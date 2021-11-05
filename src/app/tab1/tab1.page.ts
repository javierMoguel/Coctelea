import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from '../models/categories.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public tab = 'Buscador';
  public showList = false;

  constructor(
    public recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipesService.getRecipesSubject?.subscribe( res => {
      this.showList = true;
    });
  }
  

}
