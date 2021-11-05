import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';
import { CategoriesModel } from '../../../models/categories.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public categories: CategoriesModel;
  public form: FormGroup;
  public formError = false;

  constructor(
    private recipesService: RecipesService,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      ingredient: new FormControl('', Validators.required),
      category: new FormControl('default', Validators.required)
    });
  }

  ngOnInit() {
    this.recipesService.getCategories().subscribe( res => {
      this.categories = res;
    });
  }

  onChangeMode() {
    const category = this.form.controls.category.value;
    const ingredient = this.form.controls.ingredient.value;
    if ( category !== 'default' && ingredient ) {
      this.recipesService.getRecetas( ingredient, category ).subscribe();
      this.formError = false;
    } else {
      this.formError = true;
    }
  }


}
