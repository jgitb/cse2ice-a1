import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';

import { DataService } from '../data.service';

@Component({
  selector: 'app-user-story5',
  templateUrl: './user-story5.component.html',
  styleUrls: ['./user-story5.component.css']
})
export class UserStory5Component implements OnInit {
  teams!: Team[];
  selectedTeam!: Team;

 
  myTeam!: Team;
  myRivalTeam!: Team;
  games!:Game[];
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

  

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.games = tempArr;    
    });
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

  onSelect3(team: Team): void {
    this.myRivalTeam = team;
    this.getMyTeamRival();
  }

  getMyTeamRival(): void { 
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      console.log(temp);

      temp.forEach(element => {
        if ((element.ateam == this.myTeam.name || element.ateam == this.myRivalTeam.name)
          && (element.hteam == this.myTeam.name || element.hteam == this.myRivalTeam.name) && element.year == 2021) tempArr.push(element)

      }) 

      this.games = tempArr;
    })
  }


  
}

