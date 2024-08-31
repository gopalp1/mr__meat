import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.scss'],
})
export class BannerContentComponent implements OnInit {
  @Input() data: any;

  ngOnInit() {}
}
