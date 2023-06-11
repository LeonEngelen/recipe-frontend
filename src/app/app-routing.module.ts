import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { TipsComponent } from './recipes/tips/tips.component';

const routes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'recipe-edit', component: RecipeEditComponent },
  { path: 'tips', component: TipsComponent },
  { path: '',   redirectTo: '/recipe-list', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: RecipeListComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
