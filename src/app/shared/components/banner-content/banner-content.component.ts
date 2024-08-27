import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.scss']
})
export class BannerContentComponent  implements OnInit {
 
    imageVisible = false;
  
    ngOnInit() {
      // Delay the appearance of the image by 500ms
      setTimeout(() => {
        this.imageVisible = true;
      }, 1000);
    }
 
}
