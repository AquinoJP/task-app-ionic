import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-form-agg-acti',
  templateUrl: './form-agg-acti.page.html',
  styleUrls: ['./form-agg-acti.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormAggActiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
