import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CheckData } from 'src/app/models/check.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  ipAddress: string;
  checkData: CheckData;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

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
      console.log('this.checkData', this.checkData);
    } catch (e) {
      console.log(`Failed to get check for IP ${this.ipAddress}`);
    }
  }

}
