import { Component, OnInit } from '@angular/core';
import { recipe } from 'src/app/services/recipe';
import { RecipeStoreService } from 'src/app/services/recipe-store.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes?: recipe[];
  
  constructor(private recipeService: RecipeStoreService) {

  }
  ngOnInit(): void {
    console.log("leon");

    this.recipeService.GetRecipes().subscribe(
      {
        next: recipes => {
          this.recipes = recipes;
          console.log(JSON.stringify(recipes));
        }
      });
  }

  AddRecipe() {
    let recipe2: recipe = new recipe(0, 'Klotzooi');
    this.recipeService.AddRecipe(recipe2);
  }
}
