import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DrinkModel } from '../../models/recipes.model';
import { ModalComponent } from '../modal/modal.component';
import { SingleBebidaService } from '../../services/single-bebida.service';

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
        }
      });
      return await modal.present();
    });
  }

}
