import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonFooter, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFooter, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) {}

  irParaHistoria() {
    this.router.navigate(['/historia']);
  }

  irParaPersonagens() {
    this.router.navigate(['/personagens']);
  }

  irParaSobreMim() {
    this.router.navigate(['/sobremim']);
  }

  cardVirado: string | null = null;

  toggleCard(card: string) {
    this.cardVirado = this.cardVirado === card ? null : card;
  }

  alternarTema() {
    document.body.classList.toggle('dark');
  }

}
