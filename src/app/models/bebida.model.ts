export interface SingleDrinksModel {
  drinks: SingleDrinkModel[];
}

export interface SingleDrinkModel {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: any;
  strTags?: any;
  strVideo?: any;
  strCategory: string;
  strIBA?: any;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: any;
  strInstructionsDE: string;
  strInstructionsFR?: any;
  strInstructionsIT: string;
  'strInstructionsZH-HANS'?: any;
  'strInstructionsZH-HANT'?: any;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10?: any;
  strIngredient11?: any;
  strIngredient12?: any;
  strIngredient13?: any;
  strIngredient14?: any;
  strIngredient15?: any;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10?: any;
  strMeasure11?: any;
  strMeasure12?: any;
  strMeasure13?: any;
  strMeasure14?: any;
  strMeasure15?: any;
  strImageSource?: any;
  strImageAttribution?: any;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export interface InstruccionesModal {
  instruccion: string;
  idioma: string;
}
