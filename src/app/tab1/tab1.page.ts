import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tab: string = 'Buscador';

  constructor(
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipesService.getCategories().subscribe( res => {
      console.log(res);
    })
  }

}
