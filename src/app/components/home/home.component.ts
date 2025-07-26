import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../../core/pipes/search.pipe";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FormsModule, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
    private readonly _ProductsService = inject(ProductsService)
    private readonly _CategoriesService = inject(CategoriesService)

    productsSubscribe!: Subscription;
    categoriesSubscribe!: Subscription;
    text:string = ''

    productsList:Iproduct[] = [];
    categories:string[] = [];
    ngOnInit(): void {
      this.productsSubscribe =  this._ProductsService.getAllProducts().subscribe({
        next:(res)=>{
          this.productsList = res
        }
      })

      this.categoriesSubscribe = this._CategoriesService.getAllcategories().subscribe({
        next:(res)=>{
          this.categories = res
        }
      })
    }

    getAllProducts(){
        this._ProductsService.getAllProducts().subscribe({
        next:(res)=>{
          this.productsList = res
        }
      })}

    getCategory(cat:string){
     this._CategoriesService.getSpecificCategory(cat).subscribe(products => {
      this.productsList = products;
    });
    }

    sortProducts(type: string) {
      if (type === 'name') {
        this.productsList = [...this.productsList].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
    
      else if (type === 'priceUp') {
        this.productsList = [...this.productsList].sort((a, b) =>
          b.price - a.price
        );
      }
    
      else if (type === 'priceDown') {
        this.productsList = [...this.productsList].sort((a, b) =>
          a.price - b.price
        );
      }
    }

    ngOnDestroy(): void {
      this.productsSubscribe?.unsubscribe();
      this.categoriesSubscribe?.unsubscribe();
    }

}
