import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChartComponent } from '../chart/chart.component';
import { SignChartComponent } from '../sign-chart/sign-chart.component';
import { AccountExecutivesComponent } from '../account-executives/account-executives.component';
import { CountToWinTableComponent } from '../count-to-win-table/count-to-win-table.component';
import { RevenueTableComponent } from '../revenue-table/revenue-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartComponent, SignChartComponent, AccountExecutivesComponent, CountToWinTableComponent, RevenueTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  revenueCount: number = 0;
  pipelineCount: number = 0;
  signingsCount: number = 0;
  winsCount: number = 0;


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.fetchDashboardData();
  }


  fetchDashboardData() {
    this.http.get<{ revenue_sum: number }>('http://localhost:5000/revenue-sum')
      .subscribe((response) => {
        this.revenueCount = response.revenue_sum;
      });

    this.http.get<{ pipeline_count: number }>('http://localhost:5000/pipeline-count')
      .subscribe((response) => {
        this.pipelineCount = response.pipeline_count;
      });

    this.http.get<{ signings_count: number }>('http://localhost:5000/signings-count')
      .subscribe((response) => {
        this.signingsCount = response.signings_count;
      });

    this.http.get<{ wins_count: number }>('http://localhost:5000/wins-count')
      .subscribe((response) => {
        this.winsCount = response.wins_count;
      });
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  openSideBar() {
    if (!sideBaropen) {
      sideBar?.classList.add("sidebar-responsive");
      sideBaropen = true;
    }
  }


  closeSideBar() {
    if (sideBaropen) {
      sideBar?.classList.remove("sidebar-responsive");
      sideBaropen = false;
    }
  }
}


var sideBaropen = false;
var sideBar = document.getElementById('sideBar');
