
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';

import { DataService } from '../data.service';

@Component({
  selector: 'app-user-story1',
  templateUrl: './user-story1.component.html',
  styleUrls: ['./user-story1.component.css']
})
export class UserStory1Component implements OnInit {

  teams!: Team[];
  selectedTeam!: Team;
  tips!: Tip[];
  selectedTip!: Tip;
  games!: Game[];
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
    this.getTips();
    
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  
  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp; });
  }

  
}
