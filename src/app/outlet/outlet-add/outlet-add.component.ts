import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var google: any;
@Component({
  selector: 'app-outlet-add',
  templateUrl: './outlet-add.component.html',
  styleUrls: ['./outlet-add.component.scss'],
})
export class OutletAddComponent implements OnInit {
  outletForm: FormGroup;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  zoom = 15;
  searchQuery!: string;
  searchResults: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OutletAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.outletForm = this.fb.group({
      name: [data?.branch?.name || '', Validators.required],
      address: [data?.branch?.address || '', Validators.required],
      area: [data?.branch?.area || ''],
      city: [data?.branch?.city || '', Validators.required],
      pincode: [data?.branch?.pincode || '', Validators.required],
    });
  }

  ngOnInit(): void {
    this.detectCurrentLocation();
  }

  onInputChange() {
    console.log('Current search query:', this.searchQuery);
    this.searchPlace();
  }

  // Fetch current location
  detectCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getAddress(this.lat, this.lng);
      });
    }
  }

  // Get address from latitude and longitude
  getAddress(lat: number, lng: number) {
    const geocoder = new google.maps.Geocoder();
    const latlng = { lat, lng };

    geocoder.geocode({ location: latlng }, (results: any, status: any) => {
      if (status === 'OK' && results[0]) {
        const addressComponents = results[0].address_components;

        // Populate the form fields
        this.outletForm.patchValue({
          address: results[0].formatted_address,
          city: this.getAddressComponent(addressComponents, 'locality'),
          pincode: this.getAddressComponent(addressComponents, 'postal_code'),
        });
      }
    });
  }

  // Extract specific address components
  getAddressComponent(components: any, type: string): string {
    const component = components.find((comp: any) => comp.types.includes(type));
    return component ? component.long_name : '';
  }

  // Map click handler
  onMapClick(event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.getAddress(this.lat, this.lng);
  }

  searchPlace() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: this.searchQuery },
      (results: any, status: any) => {
        if (status === 'OK' && results[0]) {
          console.log(results, 'results');
          this.searchResults = results;
        }
      }
    );
  }
  save() {
    if (this.outletForm.valid) {
      console.log(this.outletForm.value);
      this.dialogRef.close(this.outletForm.value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
