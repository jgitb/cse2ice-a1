import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Game } from '../game';
import { Venue } from '../venue';
import { DataService } from '../data.service';
import { GamesFinished } from '../gamefinished';


@Component({
  selector: 'app-user-story4',
  templateUrl: './user-story4.component.html',
  styleUrls: ['./user-story4.component.css']
})
export class UserStory4Component implements OnInit {

  teams!: Team[];
  selectedTeam!: Team;
  games!: Game[];
  myTeam!: Team;
  myRivalTeam!: Team;
  nextFour!: GamesFinished[];

  @Input() team!: Team;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getGames();
    }
  }
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }


  getMyTeam(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if (element.ateam == this.myTeam.name || element.hteam == this.myTeam.name) tempArr.push(element)
      });

      this.games = tempArr;
    });
  }

  onSelect2(team: Team): void {
    this.myTeam = team;
  }


  
  onSelect5(team: Team): void {
    this.team = team;
    this.getGames();
  }


  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if((element.hteamid == this.team.id && element.hteam == element.winner) || (element.ateamid == this.team.id && element.hteam !== element.winner)) tempArr.push(element);
      });
      
      this.games = tempArr;    
    });
  }
}