import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ladder } from '../ladder';
import { Standings } from '../standings';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
 ladder!: Standings[];
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getStandings();
  }

  getStandings(): void{
    this.dataservice.getStandings().subscribe(temp => this.ladder = temp);
  }
}

