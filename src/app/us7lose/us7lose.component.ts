import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../game';
import { Team } from '../team';
import { DataService } from '../data.service';


@Component({
  selector: 'app-us7lose',
  templateUrl: './us7lose.component.html',
  styleUrls: ['./us7lose.component.css']
})
export class Us7loseComponent implements OnInit {


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

      // loop through the raw data array to find games where the home team won
      // logic: hteam == winner from the Game model we get from the transformed API data
      
      temp.forEach(element => {
        if(element.hteam == element.winner) tempArr.push(element);
      });
      
      this.games = tempArr;  

      // Sort the games array based on the highest score by the winning team
          
    });
  }

}
