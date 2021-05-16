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

 
  ngOnInit(): void {
  }

}
