import { Component, HostListener } from '@angular/core';
import { SERVICE_BANNER } from 'src/app/shared/constants/mockdata';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  data = SERVICE_BANNER;

  highlights = [
    {
      title: 'Bulk order checkout',
      icon: 'shopping_cart',
      description:
        'A visual of a cart filled with large quantities of meat products.',
    },
    {
      title: 'Scheduled delivery calendar',
      icon: 'event',

      description: 'A calendar interface for selecting a future date.',
    },
    {
      title: ' On-time delivery guarantee',
      icon: 'local_shipping',

      description:
        'An image showing fresh meat products being delivered to the doorstep on the selected date.',
    },
  ];

  steps = [
    {
      image:
        'https://pluspng.com/img-png/fish-and-meat-png-seafood-meat-fish-protein-meat-download-png-1024.png',
      title: 'Select the items to place the order',
      subText: '',
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/013/363/810/original/date-and-time-3d-rendering-isometric-icon-png.png',
      title: 'Select the date and time for delivery',
      subText: '',
    },
    {
      image:
        'https://cdn3d.iconscout.com/3d/free/thumb/payment-successful-3543010-2969397.png',
      title: 'Make the payment',
      subText: '',
    },
    {
      image:
        'https://png.pngtree.com/png-clipart/20230524/original/pngtree-delivery-van-and-smartphone-app-png-image_9168974.png',
      title: 'Recieve your order on selected date and time',
      subText: '',
    },
  ];

  stepsInView: boolean[] = new Array(this.steps.length).fill(false); // Track which steps are in view

  // Listen for window scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const cards = document.querySelectorAll('.custom-card');
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement; // Cast Element to HTMLElement
      if (this.isElementInViewport(cardElement)) {
        this.stepsInView[index] = true; // Mark step as in view
      }
    });
  }

  // Check if an element is in the viewport
  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
