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
  
//  recipes$?: Observable<recipestorerecipe[]>;
  recipeStoreUrl = "https://recipestore.azurewebsites.net/recipes";
  //recipeStoreUrl = "https://localhost:7246/recipes";
  
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
//    this.recipes$ = this.httpClient.get<recipestorerecipe[]>("https://localhost:7246/recipes");
  }

  GetRecipes(): Observable<recipe[]> {
    return this.httpClient.get<recipe[]>(this.recipeStoreUrl);
  }

  AddRecipe(recipe: recipe) {
    console.log(`Add ${recipe.name}`);
    this.httpClient.post<recipe>(this.recipeStoreUrl, {"id":0,"name":"joepie"}, httpOptions).subscribe();
  }
}
