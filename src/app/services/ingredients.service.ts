import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private storage: Storage
  ) { }

  public async checkIngrediente( ingrediente: string) {
    ingrediente = ingrediente.slice( ingrediente.indexOf('-') + 2, ingrediente.length);
    let storedIngredients = new Array();
    await this.getIngredientes().then( res => {
      storedIngredients = res;
    });
    if ( storedIngredients.indexOf(ingrediente) !== -1 ) {
      storedIngredients.splice( storedIngredients.indexOf(ingrediente), 1);
    } else {
      storedIngredients.push(ingrediente);
    }
    this.storage.set('ingredientes', storedIngredients );
  }

  public async getIngredientes(): Promise<string[]> {
    return await this.storage.get('ingredientes');
  }
}
