import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
  autocompleteInput: string = '';
  @ViewChild('addresstext', { static: true }) addresstext!: ElementRef;
  addressList: any = [];
  filteredAddresses: any = [];
  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const input = this.addresstext.nativeElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.addressList.push(place);
      this.dialogRef.close(this.addressList);
    });
  }
}
