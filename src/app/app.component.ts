import { Component } from '@angular/core';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  ModalController,
  IonTitle,
} from '@ionic/angular/standalone';
import { ModalExampleComponent } from './home/example.modal';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    ModalExampleComponent,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButton,
    IonTitle,
  ],
})
export class AppComponent {
  message =
    'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
      keyboardClose: false,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
