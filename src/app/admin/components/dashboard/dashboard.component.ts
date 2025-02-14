import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}

  ngOnInit(): void {}
  m() {
    this.alertify.message(
      'Merhaba',
      MessageType.Notify,
      Position.BottomRight,
      5,true
    );
  }
  d(){
    this.alertify.dismiss();
  }
}
