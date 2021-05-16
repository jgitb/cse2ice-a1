import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { TeamComponent } from './team/team.component';
import { AppComponent } from './app.component';
import { LadderComponent } from './ladder/ladder.component';
import { ResultsComponent } from './results/results.component';
import { TipResultsComponent } from './tip-results/tip-results.component';
import { UserStory1Component } from './user-story1/user-story1.component';
import { UserStory2Component } from './user-story2/user-story2.component';
import { UserStory3Component } from './user-story3/user-story3.component';
import { UserStory4Component } from './user-story4/user-story4.component';
import { UserStory5Component } from './user-story5/user-story5.component';
import { UserStory6Component } from './user-story6/user-story6.component';
import { UserStory7Component } from './user-story7/user-story7.component';
import { VenueResultsComponent} from './venue-results/venue-results.component';

const routes: Routes = [
  { path: 'ViewLeagueTable', component: ViewLeagueTableComponent},
  { path: 'Team', component: TeamComponent},
  { path: '', component: TeamComponent}, 
  { path: "Ladder", component: LadderComponent},
  { path: "Results", component: ResultsComponent},
  { path: "UserStory1", component: UserStory1Component},
  { path: "UserStory2", component: UserStory2Component},
  { path: "UserStory3", component: UserStory3Component},
  { path: "UserStory4", component: UserStory4Component},
  { path: "UserStory5", component: UserStory5Component},
  { path: "UserStory6", component: UserStory6Component},
  { path: "UserStory7", component: UserStory7Component},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
