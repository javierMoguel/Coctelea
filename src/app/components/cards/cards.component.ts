import { InstruccionesModal } from './../../models/bebida.model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DrinkModel } from '../../models/recipes.model';
import { ModalComponent } from '../modal/modal.component';
import { SingleBebidaService } from '../../services/single-bebida.service';
import ISO6391 from 'iso-639-1-plus';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

@Input() drink: DrinkModel;

  constructor(
    public modalController: ModalController,
    private singleBebidaService: SingleBebidaService
  ) { }

  ngOnInit() {}

  async crearModal(id) {
    this.singleBebidaService.getBebida(id).subscribe( async () => {
      const modal = await this.modalController.create({
        component: ModalComponent,
        cssClass: 'my-custom-class',
        componentProps: {
          headerTitle: this.singleBebidaService.bebida.strDrink,
          image: this.singleBebidaService.bebida.strDrinkThumb,
          alcoholic: this.singleBebidaService.bebida.strAlcoholic,
          vaso: this.singleBebidaService.bebida.strGlass,
          ingredientes: this.setIngredients(),
          instrucciones: this.setInstrucciones()
        }
      });
      return await modal.present();
    });
  }

  public dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  private setIngredients(): Array<string> {
    const ingredientes = new Array();
    for (let i = 1; i < 16; i++) {
      if (this.singleBebidaService.bebida[`strIngredient${i}`]) {
        ingredientes.push(`${this.singleBebidaService.bebida[`strMeasure${i}`]} - ${this.singleBebidaService.bebida[`strIngredient${i}`]}`);
      }
    }
    return ingredientes;
  }

  private setInstrucciones(): Array<InstruccionesModal> {
    const instrucciones = new Array();
    Object.keys(this.singleBebidaService.bebida).map((res) => {
      if (res.indexOf('strInstructions') > -1 && this.singleBebidaService.bebida[res]) {
          instrucciones.push({
            instruccion: this.singleBebidaService.bebida[res],
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
