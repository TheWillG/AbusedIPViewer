import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CheckData } from 'src/app/models/check.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  ipAddress: string;
  checkData: CheckData;

  constructor(private route: ActivatedRoute, private appService: AppService, private snackbarService: MatSnackBar) { }

  ngOnInit() {
    if (!this.route.snapshot.params.ip) {
      return;
    }
    this.ipAddress = this.route.snapshot.params.ip;
    this.getCheck();
  }

  async getCheck() {
    try {
      const { data } = await this.appService.getCheck({ ipAddress: this.ipAddress });
      this.checkData = data;
    } catch (e) {
      this.snackbarService.open('Failed to fetch IP check data, please try again', 'Dismiss', { duration: 2000 });
    }
  }

}
