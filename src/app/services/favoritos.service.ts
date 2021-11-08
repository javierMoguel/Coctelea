import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { single } from 'rxjs/operators';
import { SingleDrinkModel } from '../models/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(
    private storage: Storage
  ) {
    this.storage.create();
  }

  public setBebida(bebida: SingleDrinkModel) {
    this.storage.set(bebida.idDrink, bebida);
  }

  public deleteBebida( id: string ) {
    this.storage.remove( id );
  }

  public async checkBebida(id: string): Promise<boolean> {
    const storageCreated = await this.storage.get(id);
    if (!storageCreated) {
      return false;
    } else {
      return true;
    }
  }

  public async getAll() {
    const singleDrinkRetorno = new Array();
    await this.storage.forEach( (key, value, index) => {
      singleDrinkRetorno.push(key);
    });
    return singleDrinkRetorno;
  }

}
