import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { apiUrl } from './defines';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { CategoriesModel } from '../models/categories.model';
import { GetRecetasModel } from '../models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public getRecipes: GetRecetasModel = new GetRecetasModel();
  public getRecipesSubject: BehaviorSubject<GetRecetasModel> = new BehaviorSubject(this.getRecipes);
  public getRecipes$: Observable<GetRecetasModel> = this.getRecipesSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<CategoriesModel> {
    let url: string = apiUrl.cocktailDb.replace('{type}', apiUrl.list);
    url = url.concat(apiUrl.queryParamsList);
    const headers: HttpHeaders = new HttpHeaders();
    const options: { [key: string]: HttpHeaders } = {
      headers
    };
    return this.http.get(url, options).pipe( map ( (res: CategoriesModel) => res), catchError( error => throwError(error)));
  }
  public getRecetas( ingrediente: string, categoria: string): Observable<any> {
    let url: string = apiUrl.cocktailDb.replace('{type}', apiUrl.filter);
    url = url.concat(apiUrl.queryParamsGet.replace('{ingrediente}', ingrediente).replace('{categoria}', categoria ));
    const headers: HttpHeaders = new HttpHeaders();
    const options: { [key: string]: HttpHeaders } = {
      headers
    };

    return this.http.get(url, options).pipe( map ( (res: any) => {
      this.logicRecipes( res );
    }), catchError( error => throwError(error)));
  }

  private logicRecipes( recetas ) {
    this.getRecipes = recetas;
    this.getRecipesSubject.next(this.getRecipes);
  }
}
