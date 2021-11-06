import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { alcoholicStr } from 'src/app/services/defines';
import { InstruccionesModal } from '../../models/bebida.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() headerTitle: string;
  @Input() image: string;
  @Input() alcoholic: string;
  @Input() vaso: string;
  @Input() ingredientes: Array<string>;
  @Input() instrucciones: Array<InstruccionesModal>;

  public iconAlcoholic: string;
  public instruccion: string;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.isAlcoholic();
    this.instruccion = this.instrucciones[0].instruccion;
  }

  public dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  public setLang( e ) {
    this.instrucciones.map( res => {
      if ( res.idioma === e.target.value) {
        this.instruccion = res.instruccion;
      }
    })
  }

  private isAlcoholic(): void {
    this.iconAlcoholic = this.alcoholic === alcoholicStr ? 'checkmark-circle-outline' : 'close-circle-outline';
  }

}
