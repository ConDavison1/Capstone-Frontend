import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-executives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-executives.component.html',
  styleUrls: ['./account-executives.component.css']
})
export class AccountExecutivesComponent implements OnInit {
  accountExecutives: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/account-executives').subscribe(
      (data: any) => {
        this.accountExecutives = data;
      },
      (error) => {
        console.error('Error fetching account executives', error);
      }
    );
  }
}
