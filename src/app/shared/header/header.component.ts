import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationModalComponent } from '../location-modal/location-modal.component';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() privatePages: boolean = false;
  menuOpen = false;
  authLabel = 'Login';
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
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
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.authLabel = (await this.userService.getUserValue())
      ? 'Logout'
      : 'Login';
  }
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
      }
    });
  }
  auth() {
    if (this.authLabel === 'Login') {
      this.router.navigate(['/login']);
    } else {
      this.callLogout();
    }
  }

  callLogout() {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '300px',
      data: {
        title: 'Are you sure?',
        message: 'Do you want to log out?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser();
        this.authLabel = 'Login';
        this.router.navigate(['/home']);
      }
    });
  }
}
