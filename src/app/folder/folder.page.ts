import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public user = {
    usuario: "",
    senha: ""
  }

  constructor(public nav: NavController, private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Dados incorreta!',
      duration: 500,
      position: position
    });
    await toast.present();
  }

  logar(x: string) {

    if (this.user.usuario == "Gerente" && this.user.senha == "000111") {
      this.nav.navigateForward(x);
    } else {
      this.presentToast('top')
    }

  }



  cadastrar(x: string) {
    this.nav.navigateForward(x);

  }



  ngOnInit() {
  }

}
