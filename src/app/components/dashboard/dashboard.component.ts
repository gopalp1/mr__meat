import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  menuOptions = [
    { label: 'Orders', url: '/orders', active: true },
    { label: 'Agents', url: '/agents', active: false },
    { label: 'Branches', url: '/branches', active: false },
  ];

  items = [
    // {
    //   image: '../../../../assets/images/dashboard/outlet.png',
    //   url: '/outlets',
    //   title: 'Outlets ',
    // },
    // {
    //   image: '../../../../assets/images/dashboard/delivery.png',
    //   url: '/riders',
    //   title: 'Delivery agent',
    // },
    // {
    //   image: '../../../../assets/images/dashboard/menu.png',
    //   url: '/menu',
    //   title: 'Products',
    // },
    // {
    //   image: '../../../../assets/images/dashboard/category.png',
    //   url: '/category',
    //   title: 'Category',
    // },
    {
      image: '../../../../assets/images/dashboard/orders.png',
      url: '/orders',
      title: 'Orders',
    },
    // {
    //   image: '../../../assets/images/dashboard/users.png',
    //   url: '/users',
    //   title: 'Users',
    // },
    // {
    //   image: '../../../../assets/images/dashboard/orders.png',
    //   url: '/slots',
    //   title: 'Slots',
    // },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onMenuChange(url: string) {
    console.log('Navigating to:', url);
  }

  onItemClick(url: string) {
    this.router.navigate([url]);
  }
}
