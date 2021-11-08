import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';
import { SingleDrinkModel } from '../models/bebida.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public tab = 'Favoritos';
  public favoritos: SingleDrinkModel[] = new Array();
  constructor(
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.getFavoritos();
  }

  private getFavoritos() {
    this.favoritosService.getAll().then( res => {
      this.favoritos = res;
    });
  }

}
