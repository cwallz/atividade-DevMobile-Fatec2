import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonCol, IonRow, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonGrid, IonList, IonItem, IonLabel, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonGrid, IonList, IonItem, IonLabel, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonagensPage implements OnInit {

  constructor(private router: Router) { }
  
  irParaHome() {
    this.router.navigate(['home']);
  }
  alternarTema() {
    document.body.classList.toggle('dark');
  }

  cardVirado: string | null = null;

  toggleCard(card: string) {
    this.cardVirado = this.cardVirado === card ? null : card;
  }

  ngOnInit() {
  }

}
