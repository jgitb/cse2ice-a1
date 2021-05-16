import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-story7',
  templateUrl: './user-story7.component.html',
  styleUrls: ['./user-story7.component.css']
})
export class UserStory7Component implements OnInit {

  teams!: Team[];
  tips!: Tip[];
  games!: Game[];
  selectedTeam!: Team;

  @Input() team!: Team;

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getGames();
    }
  }
  ngOnInit(): void {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
    
  }

 
  
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      // loop through the raw data array to find games where the home team won
      // logic: hteam == winner from the Game model we get from the transformed API data
      
      temp.forEach(element => {
        if(element.hteam == element.winner) tempArr.push(element);
      });
      
      this.games = tempArr;  

      // Sort the games array based on the highest score by the winning team
      this.games.sort(this.compareFunc);    
    });
  }

  compareFunc(a: Game, b: Game) {
    const gameAScore = a.hscore;
    const gameBScore = b.hscore;

    let compare = 0;
    if (gameAScore < gameBScore) {
      compare = 1;
    } else if (gameAScore > gameBScore) {
      compare = -1;
    }

    return compare;
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp; });
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

}
