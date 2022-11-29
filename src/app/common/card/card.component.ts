import { Component, Input, OnInit } from '@angular/core';
import { Bird } from 'src/app/model/bird'
import { BirdService } from 'src/app/service/bird.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() bird: Bird = new Bird;

  constructor(
    private birdService: BirdService
  ) {

   }

  ngOnInit(): void {
  }

  onDeleteClick (bird:Bird): void {
    console.log(bird,'not deleted');
  }


}
