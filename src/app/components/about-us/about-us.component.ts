import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  images: string[] = [
    'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F7a0ee5bc-c229-987b-429d-f884aaaefe8a%2Foriginal%2F1703869838436.jpg&w=384&q=75',
    'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F369188ea-0f91-af18-3c2b-d81c1f640977%2Foriginal%2F1705080204185.jpg&w=384&q=75'
  ];

  currentSlide: number = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopSlideShow() {
    clearInterval(this.slideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
    this.stopSlideShow(); // Stop automatic slideshow when manually changing slides
    this.startSlideShow(); // Restart the slideshow
  }
}
