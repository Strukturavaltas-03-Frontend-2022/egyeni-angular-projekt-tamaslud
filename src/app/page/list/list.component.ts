import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bird } from 'src/app/model/bird';
import { BirdService } from 'src/app/service/bird.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input () birdList: Bird[] = [];

  constructor(private birdService: BirdService) { }

  birds$: Observable<Bird[]> = this.birdService.getAll();

  ngOnInit(): void {
    }

}
