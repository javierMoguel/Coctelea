export interface GetRecetasModel {
  drinks: GetReceta[];
}

export interface GetReceta {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}