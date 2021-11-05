import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { APIurl } from './defines';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { CategoriesModel } from '../models/categories.model';
import { GetRecetasModel } from '../models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public getRecipes: GetRecetasModel; 

  constructor(
    private http: HttpClient
  ) { }

  public getRecetas( ingrediente: string, categoria: string): Observable<any> {
    const url: string = APIurl.cocktailDb.replace('{type}', APIurl.filter);
    url.concat(APIurl.queryParamsGet.replace('{ingrediente}', ingrediente).replace('{categoria}', categoria ));
    const headers: HttpHeaders = new HttpHeaders();
    const options: Object = {
      headers: headers
    };

    return this.http.get(url, options).pipe( map ( (res: any) => {
      this.logicRecipes( res );
    }), catchError( error => {
      return throwError(error);
    }))
  }

  private logicRecipes( recetas ) {
    this.getRecipes = recetas;
  }

  public getCategories(): Observable<CategoriesModel> {
    const url: string = APIurl.cocktailDb.replace('{type}', APIurl.list);
    url.concat(APIurl.queryParamsList);
    const headers: HttpHeaders = new HttpHeaders();
    const options: Object = {
      headers: headers
    };
    return this.http.get(url, options).pipe( map ( (res: CategoriesModel) => {
      return res;
    }), catchError( error => {
      return throwError(error);
    }))
  }
}
