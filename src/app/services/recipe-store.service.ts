import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};  

@Injectable({
  providedIn: 'root'
})
export class RecipeStoreService implements OnInit {
  
  recipeStoreUrl = "https://recipestore.azurewebsites.net/recipes";
  //recipeStoreUrl = "https://localhost:7246/recipes";
  
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  GetRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.recipeStoreUrl);
  }

  AddRecipe(recipe: Recipe) {
    this.httpClient.post<Recipe>(this.recipeStoreUrl, recipe, httpOptions).subscribe();
  }

  DeleteRecipe(recipeId: number) {
    const url = `${this.recipeStoreUrl}/${recipeId}`;
    this.httpClient.delete<Recipe>(url).subscribe();
  }
}
