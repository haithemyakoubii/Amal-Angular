import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./components/produits/produits/produits.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AddProductComponent} from "./components/produits/add-product/add-product.component";
import {TodoListComponent} from "./components/todos/todo-list/todo-list.component";

const routes: Routes = [
  { path: "produits", component: ProduitsComponent },
  { path: "produits/add", component: AddProductComponent },
  { path: "produits/:id/edit", component: AddProductComponent },
  { path: "todos", component: TodoListComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
