import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { blacklist } from '../../store/reducers/blacklist';
import { BlackList } from '../../models/blacklist.model';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class HomeComponent implements OnInit {
  blacklist$: Observable<any>;
  blacklist: BlackList = null;
  private countMinimum = null;
  private confidenceMinimum = null;
  private maxAgeInDays = null;

  constructor(private store: Store<any>, private appService: AppService, private router: Router, private snackbarService: MatSnackBar) {
    this.blacklist$ = store.select(blacklist);
  }

  ngOnInit() {
    this.blacklist$.subscribe(newBlacklist => {
      const { data } = newBlacklist;
      this.blacklist = data;
    });
  }

  async fetchBlacklist() {
    try {
      await this.appService.fetchBlacklist({
        countMinimum: this.countMinimum,
        confidenceMinimum: this.confidenceMinimum,
        maxAgeInDays: this.maxAgeInDays
      });
    } catch (e) {
      this.snackbarService.open('Failed to fetch blacklist, please try again.', 'Dismiss', { duration: 2000 });
    }
  }

  viewIP(ipAddress: string) {
    this.router.navigate(['/', 'check', ipAddress]);
  }
}
