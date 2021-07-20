import { Injectable } from '@angular/core';
import {DISHES} from '../shared/dishes';
import {Dish} from '../shared/dish';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //dishes= DISHES;

  // getDishes(): Promise<Dish[]> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES), 2000);
  //   });
  // }

  // getDish(id: string): Promise<Dish> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
  //   });
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return  new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
  //   });
  // }

  // getDishes(): Promise<Dish[]> {
  //   return of(DISHES).pipe(delay(2000)).toPromise();
  // }

  // getDish(id: number): Promise<Dish> {
  //   return of(DISHES.filter((dish) => (dish.id === id.toString()))[0]).pipe(delay(2000)).toPromise();
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  // }


  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id.toString()))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
