import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { TweenMax, TimelineMax, Cubic } from 'gsap'; // Make sure to install GSAP
declare var Delaunay: any; // Assuming you're using a Delaunay triangulation library

@Component({
  selector: 'app-glassbreakbanner',
  templateUrl: './glassbreakbanner.component.html',
  styleUrls: ['./glassbreakbanner.component.scss'],
})
export class GlassbreakbannerComponent implements OnInit {
  TWO_PI = Math.PI * 2;

  images: HTMLImageElement[] = [];
  imageIndex = 0;

  image!: any;
  imageWidth = 768;
  imageHeight = 485;

  vertices: number[][] = [];
  indices: number[] = [];
  prevfrag: any[] = [];
  fragments: any[] = [];

  margin = 50;

  clickPosition: number[] = [this.imageWidth * 0.5, this.imageHeight * 0.5];

  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    TweenMax.set(this.containerRef.nativeElement, { perspective: 500 });

    const urls = [
      'https://zachsaucier.com/images/girl.jpg',
      'https://zachsaucier.com/images/flash.jpg',
      'https://zachsaucier.com/images/vader.jpg',
      'https://zachsaucier.com/images/interstellar.jpg',
    ];

    let loaded = 0;

    this.images[0] = new Image();
    this.images[0].onload = () => {
      if (++loaded === 1) {
        for (let i = 1; i < 4; i++) {
          this.images[i] = new Image();
          this.images[i].src = urls[i];
        }
        this.placeImage();
      }
    };
    this.images[0].src = urls[0];
  }

  placeImage(transitionIn: boolean = true) {
    this.image = this.images[this.imageIndex];

    if (++this.imageIndex === this.images.length) this.imageIndex = 0;

    const num = Math.random();
    if (num < 0.25) {
      this.image.direction = 'left';
    } else if (num < 0.5) {
      this.image.direction = 'top';
    } else if (num < 0.75) {
      this.image.direction = 'bottom';
    } else {
      this.image.direction = 'right';
    }

    this.renderer.appendChild(this.containerRef.nativeElement, this.image);
    this.image.style.opacity = '0';

    if (transitionIn) {
      this.triangulateIn();
    }
  }

  triangulateIn() {
    const box = this.image.getBoundingClientRect();
    const { top, left } = box;

    switch (this.image?.direction) {
      case 'left':
        this.clickPosition = [0, this.imageHeight / 2];
        break;
      case 'top':
        this.clickPosition = [this.imageWidth / 2, 0];
        break;
      case 'bottom':
        this.clickPosition = [this.imageWidth / 2, this.imageHeight];
        break;
      case 'right':
        this.clickPosition = [this.imageWidth, this.imageHeight / 2];
        break;
    }

    this.triangulate();
    this.build();
  }

  triangulate() {
    for (let i = 0; i < 40; i++) {
      const x =
        -this.margin + Math.random() * (this.imageWidth + this.margin * 2);
      const y =
        -this.margin + Math.random() * (this.imageHeight + this.margin * 2);
      this.vertices.push([x, y]);
    }

    this.vertices.push(
      [0, 0],
      [this.imageWidth, 0],
      [this.imageWidth, this.imageHeight],
      [0, this.imageHeight]
    );

    this.vertices.forEach((v) => {
      v[0] = this.clamp(v[0], 0, this.imageWidth);
      v[1] = this.clamp(v[1], 0, this.imageHeight);
    });

    this.indices = Delaunay.triangulate(this.vertices);
  }

  build() {
    let p0, p1, p2, fragment;

    const tl0 = new TimelineMax({
      onComplete: this.buildCompleteHandler.bind(this),
    });

    for (let i = 0; i < this.indices.length; i += 3) {
      p0 = this.vertices[this.indices[i]];
      p1 = this.vertices[this.indices[i + 1]];
      p2 = this.vertices[this.indices[i + 2]];

      fragment = new Fragment(
        p0,
        p1,
        p2,
        this.image,
        this.containerRef.nativeElement
      );

      const dx = fragment.centroid[0] - this.clickPosition[0];
      const dy = fragment.centroid[1] - this.clickPosition[1];
      const d = Math.sqrt(dx * dx + dy * dy);
      const rx = 30 * this.sign(dy);
      const ry = 90 * -this.sign(dx);
      const delay = d * 0.003 * this.randomRange(0.9, 1.1);
      fragment.canvas.style.zIndex = Math.floor(d).toString();

      const tl1 = new TimelineMax();
      tl1.from(fragment.canvas, 1, {
        z: -50,
        rotationX: rx,
        rotationY: ry,
        scaleX: 0,
        scaleY: 0,
        ease: Cubic.easeIn,
      });
      tl1.from(fragment.canvas, 0.4, { alpha: 0 }, 0.6);

      tl0['insert'](tl1, delay);

      this.fragments.push(fragment);
      this.renderer.appendChild(
        this.containerRef.nativeElement,
        fragment.canvas
      );
    }
  }

  buildCompleteHandler() {
    this.image.style.opacity = '1';
    this.image.addEventListener(
      'transitionend',
      this.onTransitionEnd.bind(this),
      false
    );
  }

  onTransitionEnd() {
    this.fragments.forEach((f) => {
      this.renderer.removeChild(this.containerRef.nativeElement, f.canvas);
    });

    this.fragments = [];
    this.vertices = [];
    this.indices = [];

    this.placeImage();
    this.image.removeEventListener(
      'transitionend',
      this.onTransitionEnd.bind(this),
      false
    );
  }

  randomRange(min: number, max: number) {
    return min + (max - min) * Math.random();
  }

  clamp(x: number, min: number, max: number) {
    return x < min ? min : x > max ? max : x;
  }

  sign(x: number) {
    return x < 0 ? -1 : 1;
  }
}

// Fragment class similar to the one defined in the original JS code
class Fragment {
  v0: number[];
  v1: number[];
  v2: number[];
  box: any;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  centroid!: number[];

  constructor(
    v0: number[],
    v1: number[],
    v2: number[],
    private image: HTMLImageElement,
    private container: HTMLElement
  ) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;

    this.computeBoundingBox();
    this.computeCentroid();
    this.createCanvas();
    this.clip();
  }

  computeBoundingBox() {
    const xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]);
    const xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]);
    const yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]);
    const yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

    this.box = {
      x: Math.round(xMin),
      y: Math.round(yMin),
      w: Math.round(xMax - xMin),
      h: Math.round(yMax - yMin),
    };
  }

  computeCentroid() {
    const x = (this.v0[0] + this.v1[0] + this.v2[0]) / 3;
    const y = (this.v0[1] + this.v1[1] + this.v2[1]) / 3;

    this.centroid = [x, y];
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.box.w;
    this.canvas.height = this.box.h;
    this.canvas.style.width = this.box.w + 'px';
    this.canvas.style.height = this.box.h + 'px';
    this.canvas.style.left = this.box.x + 'px';
    this.canvas.style.top = this.box.y + 'px';
    this.ctx = this.canvas.getContext('2d')!;
  }

  clip() {
    this.ctx.save();
    this.ctx.translate(-this.box.x, -this.box.y);
    this.ctx.beginPath();
    this.ctx.moveTo(this.v0[0], this.v0[1]);
    this.ctx.lineTo(this.v1[0], this.v1[1]);
    this.ctx.lineTo(this.v2[0], this.v2[1]);
    this.ctx.closePath();
    this.ctx.clip();
    this.ctx.drawImage(this.image, 0, 0);
    this.ctx.restore();
  }
}
