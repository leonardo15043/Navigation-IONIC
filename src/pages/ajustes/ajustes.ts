import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.paginas';


/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal(){
    this.navCtrl.parent.select(0);
  }

  mostrarModal(){
    let modal = this.modalCtrl.create( ModalPage , { nombre: "leonardo", edad: 27 });
        modal.present();

        modal.onDidDismiss( params =>{
          if(params){
            console.log("Datos del modal");
            console.log(params);
          }
        })
        
  }  

}
