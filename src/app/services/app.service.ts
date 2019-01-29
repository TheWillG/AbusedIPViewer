import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlackList } from '../models/blacklist.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NEW_BLACKLIST } from '../store/actions/blacklist';
import { Check } from '../models/check.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private store: Store<any>, private http: HttpClient) {}

  async fetchBlacklist({
    countMinimum = 15,
    maxAgeInDays = 60,
    confidenceMinimum = 90
  }: {
    countMinimum: number;
    maxAgeInDays: number;
    confidenceMinimum: number;
  }): Promise<void> {
    const newBlacklist = await this.http
      .get<BlackList>(
        `${
          environment.apiBaseUrl
        }/blacklist?countMinimum=${countMinimum}&maxAgeInDays=${maxAgeInDays}&confidenceMinimum=${confidenceMinimum}`
      )
      .toPromise();
    this.store.dispatch({ type: NEW_BLACKLIST, payload: newBlacklist });
  }

  async getCheck({ ipAddress }: { ipAddress: string }): Promise<Check> {
    return this.http
      .get<Check>(`${environment.apiBaseUrl}/check?ipAddress=${ipAddress}`)
      .toPromise();
  }
}
