import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/services/recipe';
import { RecipeStoreService } from 'src/app/services/recipe-store.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private recipeService: RecipeStoreService, private router: Router)
  {
    
  }

  async onSubmit() {
    let recipe: Recipe = new Recipe();
    let name = this.recipeForm.get('name');
    recipe.name = name?.value as string;
    let description = this.recipeForm.get('description');
    recipe.description = description?.value as string;
    this.recipeService.AddRecipe(recipe);
    await delay(1000);
    this.router.navigate(['recipe-list']);
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
