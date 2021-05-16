import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

import { HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TeamResultComponent } from './team-result/team-result.component';
import { LadderComponent } from './ladder/ladder.component';
import { ResultsComponent } from './results/results.component';
import { UserStory1Component } from './user-story1/user-story1.component';
import { UserStory2Component } from './user-story2/user-story2.component';
import { TipResultsComponent } from './tip-results/tip-results.component';
import { UserStory3Component } from './user-story3/user-story3.component';
import { UserStory4Component } from './user-story4/user-story4.component';
import { UserStory5Component } from './user-story5/user-story5.component';
import { UserStory6Component } from './user-story6/user-story6.component';
import { UserStory7Component } from './user-story7/user-story7.component';
import { VenueResultsComponent } from './venue-results/venue-results.component';
import { Us7loseComponent } from './us7lose/us7lose.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    TeamComponent,
    TeamResultComponent,
    LadderComponent,
    ResultsComponent,
    UserStory1Component,
    UserStory2Component,
    TipResultsComponent,
    UserStory3Component,
    UserStory4Component,
    UserStory5Component,
    UserStory6Component,
    UserStory7Component,
    VenueResultsComponent,
    Us7loseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
