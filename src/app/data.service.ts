import { Injectable } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';
import { Tip } from './tip';
import { Game } from './game';
import { Standings } from './standings'
import { Date } from './date';
import { Venue } from './venue'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) =>
        new Team(
          item.name,
          item.logo,
          item.id,
          item.abbrev
      ))))

  }

  getGames(): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2021;complete=100').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.is_grand_final,
        item.hbehinds,
        item.abehinds,
        item.hteam,
        item.round,
        item.hgoals,
        item.winnerteamid,
        item.ateamid,
        item.is_final,
        item.venue,
        item.date,
        item.year,
        item.complete,
        item.ascore,
        item.tz,
        item.updated,
        item.agoals,
        item.id,
        item.ateam,
        item.winner,
        item.hscore,
        item.hteamid,
        item.roundname,
        item.localtime
      )))
    )
  }


  getTips(): Observable<Tip[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2021;complete=!100').pipe( 
      map((data: any) => data.tips.map((item: any) => new Tip(
        item.tip,
        item.round,
        item.ateamid,
        item.venue,
        item.correct,
        item.date,
        item.margin,
        item.err,
        item.hteam,
        item.tipteamid,
        item.source,
        item.confidence,
        item.ateam,
        item.bits,
        item.hteamid,
        item.sourceid,
        item.year,
        item.updated,
        item.confidence,
        item.gameid,
        item.hmargin
      )))
    )
  }

  getTip(): Observable<Tip[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2021;complete=!100').pipe( 
      map((data: any) => data.tips.map((item: any) => new Tip(
        item.tip,
        item.round,
        item.ateamid,
        item.venue,
        item.correct,
        item.date,
        item.margin,
        item.err,
        item.hteam,
        item.tipteamid,
        item.source,
        item.confidence,
        item.ateam,
        item.bits,
        item.hteamid,
        item.sourceid,
        item.year,
        item.updated,
        item.confidence,
        item.gameid,
        item.hmargin
      )))
    )
  }
  getStandings(): Observable<Standings[]> { 
    return this.http.get('https://api.squiggle.com.au/?q=standings;year=2021').pipe(
      map((data: any) =>  data.standings.map((item: any) => new Standings(
        item.wins,
        item.rank,
        item.losses,
        item.name,
        item.draws
    )))
    )
  }
  getDate(): Observable<Date[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2021').pipe(
      map((data: any) => data.date.map((item: any) => new Date(
        item.is_grand_final,
        item.hbehinds,
        item.abehinds,
        item.hteam,
        item.round,
        item.hgoals,
        item.winnerteamid,
        item.ateamid,
        item.is_final,
        item.venue,
        item.date,
        item.year,
        item.complete,
        item.ascore,
        item.tz,
        item.updated,
        item.agoals,
        item.id,
        item.ateam,
        item.winner,
        item.hscore,
        item.hteamid,
        item.roundname,
        item.localtime
      )))
    )
  }
  getVenues(): Observable<Venue[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2021;complete=100').pipe(
      map((data: any) => data.venues.map((item: any) => new Venue(
        item.hbehinds,
        item.winnerteamid,
        item.updated,
        item.localtime,
        item.year,
        item.id,
        item.winner,
        item.hteamid,
        item.complete,
        item.is_grand_final,
        item.agoals,
        item.date,
        item.ascore,
        item.tz,
        item.hteam,
        item.venue,
        item.ateam,
        item.hgoals,
        item.hscore,
        item.round,
        item.roundname,
        item.is_final,
        item.ateamid,
        item.abehinds
      )))
    )
  }
  getVenue(): Observable<Venue[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2021;complete=100').pipe(
      map((data: any) => data.venues.map((item: any) => new Venue(
        item.hbehinds,
        item.winnerteamid,
        item.updated,
        item.localtime,
        item.year,
        item.id,
        item.winner,
        item.hteamid,
        item.complete,
        item.is_grand_final,
        item.agoals,
        item.date,
        item.ascore,
        item.tz,
        item.hteam,
        item.venue,
        item.ateam,
        item.hgoals,
        item.hscore,
        item.round,
        item.roundname,
        item.is_final,
        item.ateamid,
        item.abehinds
      )))
    )
  }
}
