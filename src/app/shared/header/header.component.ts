import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationModalComponent } from '../location-modal/location-modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen = false;
  menus = [
    {
      title: 'Home',
      icon: '',
      key: 'home',
      url: 'home',
    },
    {
      title: 'About us',
      icon: '',
      key: 'about',
      url: 'about-us',
    },
    {
      title: 'Services',
      icon: '',
      key: 'services',
      url: 'services',
    },
    {
      title: 'Contact us',
      icon: '',
      key: 'contact',
      url: 'contact-us',
    },
  ];
  constructor(public dialog: MatDialog) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  open(data?: any): void {
    const dialogRef = this.dialog.open(LocationModalComponent, {
      data: data,
      position: { top: '80px' },
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result, '==result');
      }
    });
  }
}
