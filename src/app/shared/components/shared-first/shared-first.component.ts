import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-first',
  templateUrl: './shared-first.component.html',
  styleUrls: ['./shared-first.component.css']
})
export class SharedFirstComponent  {
  downloadStatus = 0;

  downloadFile(): void {
    console.log(Date.now());
    this.downloadStatus = 1;
    setTimeout( () => {
      console.log(Date.now());
      this.downloadStatus = 2;
    },2000);
  }
}
