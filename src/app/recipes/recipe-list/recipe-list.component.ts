import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/services/recipe';
import { RecipeStoreService } from 'src/app/services/recipe-store.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  recipes?: Recipe[];
  
  constructor(private recipeService: RecipeStoreService) {

  }

  ngOnInit(): void {
    console.error("ngOnInit");

    this.sub = this.recipeService.GetRecipes().subscribe(
      {
        next: recipes => {
          this.recipes = recipes;
          console.log(JSON.stringify(recipes));
        }
      });
  }

  ngOnDestroy(): void {
    console.error("ngOnDestroy");
    this.sub?.unsubscribe();
  }

  DeleteRecipe(id: number) {
    this.recipeService.DeleteRecipe(id);
    let test = this.recipes?.findIndex(x => x.id === id);
    console.log(test);
    this.recipes?.splice(Number(test), 1);
  }
}
