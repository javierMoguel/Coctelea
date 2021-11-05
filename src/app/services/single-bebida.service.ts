import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { apiUrl } from './defines';
import { SingleDrinkModel, SingleDrinksModel } from '../models/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class SingleBebidaService {

  public bebida: SingleDrinkModel;

  constructor(
    private http: HttpClient
  ) { }

  public getBebida(nombre) {
    let url: string = apiUrl.cocktailDb.replace('{type}', apiUrl.search);
    url = url.concat(apiUrl.queryParamsSearch, nombre);
    const headers: HttpHeaders = new HttpHeaders();
    const options: { [key: string]: HttpHeaders } = {
      headers
    };
    return this.http.get(url, options).pipe( map ( (res: SingleDrinksModel) => {
      this.bebida = res.drinks[0];
    }), catchError( error => throwError(error)));

  }
}
