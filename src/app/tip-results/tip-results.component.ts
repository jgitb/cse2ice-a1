import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../game';
import { Team } from '../team';
import { Tip } from '../tip';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tip-results',
  templateUrl: './tip-results.component.html',
  styleUrls: ['./tip-results.component.css']
})
export class TipResultsComponent implements OnInit {

  tips!: Tip[];
  @Input() team!: Team;
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getTips();
    }
  }

  ngOnInit(): void {
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      var tempArr: Tip[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.tips = tempArr;    
    });
  }
  }
