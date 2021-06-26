import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  dish: Dish;
}
