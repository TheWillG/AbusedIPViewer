import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { blacklist } from '../../store/reducers/blacklist';
import { BlackList } from '../../models/blacklist.model';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class HomeComponent implements OnInit {
  blacklist$: Observable<any>;
  blacklist: BlackList = null;
  private countMinimum;
  private confidenceMinimum;
  private maxAgeInDays;

  constructor(private store: Store<any>, private appService: AppService, private router: Router) {
    this.blacklist$ = store.select(blacklist);
  }

  ngOnInit() {
    this.blacklist$.subscribe(newBlacklist => {
      const { data } = newBlacklist;
      this.blacklist = data;
    });
  }

  fetchBlacklist() {
    this.appService.fetchBlacklist({
      countMinimum: this.countMinimum,
      confidenceMinimum: this.confidenceMinimum,
      maxAgeInDays: this.maxAgeInDays
    });
  }

  viewIP(ipAddress: string) {
    console.log('ipAddress', ipAddress);
    this.router.navigate(['/', 'check', ipAddress]);
  }
}
