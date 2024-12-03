import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-revenue-table',
  templateUrl: './revenue-table.component.html',
  imports: [BaseChartDirective, HttpClientModule],
  styleUrls: ['./revenue-table.component.css']
})
export class RevenueTableComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public barChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Revenue Types Count',
        backgroundColor: ['#DB4505', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: '#ccc',
        borderWidth: 1
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#000',
        font: {
          size: 12
        },
        formatter: (value) => `${value}`
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.errorMessage = 'You need to log in first!';
      this.router.navigate(['/login']);
      return;
    }

    this.http.get<any[]>('http://localhost:5000/revenue-chart-data', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe(
      response => {

        this.barChartData.labels = response.map(item => item.category);
        this.barChartData.datasets[0].data = response.map(item => item.count);
        this.chart?.update();
      },
      error => {
        this.errorMessage = error.error.message || 'Error fetching revenue data!';
        console.error('Error fetching revenue data:', error);
      }
    );
  }
}
