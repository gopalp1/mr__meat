import { Component } from '@angular/core';
import { META } from '../constants/mockdata';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  contactInfo = META;
}
