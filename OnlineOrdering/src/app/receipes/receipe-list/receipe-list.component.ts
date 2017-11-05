import { Component, OnInit } from '@angular/core';
import {Receipe} from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipes: Receipe[] = [
    new Receipe('Test Receipe', 'This is simply a test receipe',
      'https://c1.staticflickr.com/9/8409/30001106280_676f968089_b.jpg'),
    new Receipe('Test Receipe', 'This is simply a test receipe',
      'https://c1.staticflickr.com/9/8409/30001106280_676f968089_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
