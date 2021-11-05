export class GetRecetasModel {
  drinks: DrinkModel[];
}

export interface DrinkModel {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
