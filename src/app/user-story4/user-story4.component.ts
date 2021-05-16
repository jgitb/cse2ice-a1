import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Game } from '../game';
import { Venue } from '../venue';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-story4',
  templateUrl: './user-story4.component.html',
  styleUrls: ['./user-story4.component.css']
})
export class UserStory4Component implements OnInit {

  teams!: Team[];
  selectedTeam!: Team;
  venues!: Venue[];
  selectedVenue!: Venue;
  games!: Game[];


  constructor(private dataService: DataService) { }

  
  ngOnInit(): void {
    this.getAFLTeams();
    this.getVenues();
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }


  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
    
  }

  getVenues(): void {
    this.dataService.getVenues().subscribe(temp => { this.venues = temp; });
  }
}