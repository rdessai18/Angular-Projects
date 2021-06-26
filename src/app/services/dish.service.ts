import { Injectable } from '@angular/core';
import {DISHES} from '../shared/dishes';
import {Dish} from '../shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //dishes= DISHES;

  getDishes(): Dish[]{
    return DISHES;
  }
}
