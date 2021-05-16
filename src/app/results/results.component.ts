import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { Date } from '../date';
import { DataService } from '../data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  teams!: Team[];
  tips!: Tip[];
  games!: Game[];
  date!: Date[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
    this.getDate();
  
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

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp; });
  }

  getDate(): void {
    this.dataService.getDate().subscribe(temp => { this.date = temp; });
  }

}