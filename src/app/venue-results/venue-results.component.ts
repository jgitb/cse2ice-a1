import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../game';
import { Team } from '../team';
import { Venue } from '../venue';
import { DataService } from '../data.service';

@Component({
  selector: 'app-venue-results',
  templateUrl: './venue-results.component.html',
  styleUrls: ['./venue-results.component.css']
})
export class VenueResultsComponent implements OnInit {

  games!:Game[];
  @Input() team!: Team;
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getGames();
    }
  }

  ngOnInit(): void {
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
}
