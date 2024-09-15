import { Component, Renderer2, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(): void {
    setTimeout(() => {
      const scrollPosition = window.scrollY;
      const animationContainer = this.el.nativeElement.querySelector(
        '#animationContainer'
      );

      if (scrollPosition > 100) {
        this.renderer.addClass(animationContainer, 'scrolled');
      } else {
        this.renderer.removeClass(animationContainer, 'scrolled');
      }
    }, 100);
  }

  features = [
    {
      title: 'We will sell only the meat that we would eat ourselves.',
      description:
        'At Mr.Meat, we’re big meat-lovers. Every single product is handpicked by a team with years of experience.',
    },
    {
      title: 'If it’s not fresh, we won’t sell it',
      description:
        'We keep it chilled from procurement to doorstep. Did we mention that we’re obsessed?',
    },
    {
      title: 'We will charge only for what you buy',
      description:
        'Most other places weigh meat before removing unusable parts, but we only charge for what you keep.',
    },
  ];

  cities = ['Mysuru', 'Bengaluru', 'Chennai', 'Hyderabad'];
}
