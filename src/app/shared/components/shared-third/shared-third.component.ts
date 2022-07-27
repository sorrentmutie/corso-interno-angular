import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shared-third',
  templateUrl: './shared-third.component.html',
  styleUrls: ['./shared-third.component.css']
})
export class SharedThirdComponent implements OnInit {

  @Input() terzoDato: string | undefined = undefined;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
