import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  constructor(public nav: NavController) { }
  abrirPagina(page:string){   
    this.nav.navigateForward(page);

  }

  ngOnInit() {
  }

}
