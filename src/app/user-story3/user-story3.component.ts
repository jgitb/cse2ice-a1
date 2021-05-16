import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Game } from '../game';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-story3',
  templateUrl: './user-story3.component.html',
  styleUrls: ['./user-story3.component.css']
})
export class UserStory3Component implements OnInit {

  teams!: Team[];
  games!: Game[];
  selectedTeam!: Team;
  nextFour!: Game[];
  
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
    this.getNextFourMatches();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
    
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];
      
      temp.forEach(element => {
        if(element.hteam == element.winner) tempArr.push(element);
      });
      
      this.games = tempArr;  
         
    });
  }

  getNextFourMatches(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.ateamid == this.selectedTeam.id || element.hteamid == this.selectedTeam.id) && element.round >= 20 && element.round <=25 && element.year == 2021)
        tempArr.push(element)
      })

    this.nextFour = tempArr;

    })
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

}
