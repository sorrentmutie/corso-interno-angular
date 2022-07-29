import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Result } from '../../models/randomuser';
import { RandomusersService } from '../../services/randomusers.service';

@Component({
  selector: 'app-randomusers-page',
  templateUrl: './randomusers-page.component.html',
  styleUrls: ['./randomusers-page.component.css']
})
export class RandomusersPageComponent implements OnInit, OnDestroy  {

  users: Result[] | undefined=  undefined;
  subscription: Subscription | undefined = undefined;

  constructor(private service: RandomusersService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription =   this.service.getData(50).subscribe(data => {
        console.log(data);
        this.users = data.results;
    });
    }

}
