import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';
import { DataService } from '../data.service';
import { GamesFinished } from '../gamefinished';


@Component({
  selector: 'app-user-story3',
  templateUrl: './user-story3.component.html',
  styleUrls: ['./user-story3.component.css']
})
export class UserStory3Component implements OnInit {

  teams!: Team[];
  selectedTeam!: Team;
  tips!: Tip[];
 
  myTeam!: Team;
  myRivalTeam!: Team;
  games!:GamesFinished[];
  nextFour!: GamesFinished[];
  @Input() team!: Team;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getGamesCompleted();
    }
  }
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  //NB: GamesFinished is refering to the API url having completed=!100
  getGamesCompleted(): void {
    this.dataService.getGamesCompleted().subscribe(temp => { 
      var tempArr: GamesFinished[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.games = tempArr;    
    });

  }

  getMyTeam(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if (element.ateam == this.myTeam.name || element.hteam == this.myTeam.name) tempArr.push(element)
      });

      this.games = tempArr;
    });
  }

  onSelect2(team: Team): void {
    this.myTeam = team;
  }

 onSelect4(team: Team): void {
    this.selectedTeam = team;
    this.getNextFourMatches();
  }
  
  getNextFourMatches(): void {
    this.dataService.getGamesCompleted().subscribe(temp => {
      var tempArr: GamesFinished[] = [];

      temp.forEach(element => {
        if ((element.ateamid == this.selectedTeam.id || element.hteamid == this.selectedTeam.id) && element.year == 2021)
        tempArr.push(element)
      })

    this.nextFour = tempArr.slice(0,4);

    })
  }
  onSelect3(team: Team): void {
    this.myRivalTeam = team;
    this.getMyTeamRival();
  }

  getMyTeamRival(): void { 
    this.dataService.getGames().subscribe(temp => {
      var tempArr: Game[] = [];
      console.log(temp);

      temp.forEach(element => {
        if ((element.ateam == this.myTeam.name || element.ateam == this.myRivalTeam.name)
          && (element.hteam == this.myTeam.name || element.hteam == this.myRivalTeam.name) && element.year == 2021) tempArr.push(element)

      }) 

      this.games = tempArr;
    })
  }

}
