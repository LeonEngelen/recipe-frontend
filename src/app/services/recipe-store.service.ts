import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { recipe } from './recipe';
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

  GetRecipes(): Observable<recipe[]> {
    return this.httpClient.get<recipe[]>(this.recipeStoreUrl);
  }

  AddRecipe(recipe: recipe) {
    this.httpClient.post<recipe>(this.recipeStoreUrl, recipe, httpOptions).subscribe();
  }

  DeleteRecipe(recipeId: number) {
    const url = `${this.recipeStoreUrl}/${recipeId}`;
    this.httpClient.delete<recipe>(url).subscribe();
  }
}
