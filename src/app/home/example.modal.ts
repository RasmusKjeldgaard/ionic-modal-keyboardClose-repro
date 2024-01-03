import { Component } from '@angular/core';
import {
  IonHeader,
  IonModal,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonToolbar,
  ModalController,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'example.modal.html',
  styleUrls: ['example.modal.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonModal,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonInput,
    IonItem,
  ],
})
export class ModalExampleComponent {
  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
