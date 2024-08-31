import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CONTACT_BANNER, META } from 'src/app/shared/constants/mockdata';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  data = CONTACT_BANNER;

  contactInfo = META;
}
