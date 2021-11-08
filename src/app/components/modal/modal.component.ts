import { alcoholicStr } from './../../services/defines';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstruccionesModel, SingleDrinkModel } from '../../models/bebida.model';
import ISO6391 from 'iso-639-1-plus';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() bebida: SingleDrinkModel;
  @Input() isFavPage: boolean;

  public iconAlcoholic: string;
  public instruccion: string;
  public iconFav: string;
  public instrucciones: Array<InstruccionesModel>;
  public ingredientes: Array<string>;
  private isFav: boolean;

  constructor(
    public modalController: ModalController,
    private favoritosService: FavoritosService
  ) { }

  ngOnInit() {
    this.isAlcoholic();
    this.ingredientes = this.setIngredients();
    this.instrucciones = this.setInstrucciones();
    this.instruccion = this.instrucciones[0].instruccion;
    this.checkIconFav();
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
    });
  }

  public checkFav() {
    if ( this.isFav ) {
      this.favoritosService.deleteBebida( this.bebida.idDrink );
      this.iconFav = 'star-outline';
    } else {
      this.favoritosService.setBebida( this.bebida );
      this.iconFav = 'star-sharp';
    }
    this.isFav = !this.isFav;
  }

  private isAlcoholic(): void {
    this.iconAlcoholic = this.bebida.strAlcoholic === alcoholicStr ? 'checkmark-circle-outline' : 'close-circle-outline';
  }

  private checkIconFav() {
    this.favoritosService.checkBebida( this.bebida.idDrink ).then( res => {
      this.iconFav = res ? 'star-sharp' : 'star-outline';
      this.isFav = res;
    });
  }

  private setIngredients(): Array<string> {
    const ingredientes = new Array();
    for (let i = 1; i < 16; i++) {
      if (this.bebida[`strIngredient${i}`]) {
        ingredientes.push(`${this.bebida[`strMeasure${i}`]} - ${this.bebida[`strIngredient${i}`]}`);
      }
    }
    return ingredientes;
  }

  private setInstrucciones(): Array<InstruccionesModel> {
    const instrucciones = new Array();
    Object.keys(this.bebida).map((res) => {
      if (res.indexOf('strInstructions') > -1 && this.bebida[res]) {
          instrucciones.push({
            instruccion: this.bebida[res],
            idioma: this.getIdioma(res.slice(15, res.length))
          });
      }
    });
    return instrucciones;
  }

  private getIdioma( iso: string ): string {
    iso = iso ? iso : 'EN';
    return ISO6391.getName(iso.toLocaleLowerCase());
  }

}
