import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { Date } from '../date';
import { GamesFinished } from '../gamefinished';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  upcomingGames!: GamesFinished[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getGamesCompleted();
  }

  getGamesCompleted(): void {
    this.dataService.getGamesCompleted().subscribe(temp => this.upcomingGames = temp);
  }

}
