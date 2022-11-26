import { Component, Input, OnInit } from '@angular/core';
import { Bird } from 'src/app/model/bird'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() bird: Bird = new Bird;

  constructor() {

   }

  ngOnInit(): void {
  }

}
