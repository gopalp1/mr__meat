import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contact!: FormGroup;

  ngOnInit(): void {
    this.prepareform()
  }
  prepareform() {
    this.contact = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mobileNum: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),

    });
  }
  get f() {
    return this.contact.controls;
  }
}
