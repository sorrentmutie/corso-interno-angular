import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shared-second',
  templateUrl: './shared-second.component.html',
  styleUrls: ['./shared-second.component.css']
})
export class SharedSecondComponent implements OnInit, OnChanges {

  @Input() dato: string | undefined = undefined;
  @Input() dato2: number = 0;
  valore: number = 0;

  constructor() {
    console.log('sono nel costruttore');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Sono in onChanges');
    console.log(changes);
    const valoreCorrente = changes['dato'].currentValue as string;
    const includes = valoreCorrente.includes('cambiato');
    if(includes){
          this.valore = 50;
    }

  }

  ngOnInit(): void {
    console.log('sono in ngOnInit');
  }

}
