import { ProductsService } from './../../core/services/products.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy{

  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);

  productId:string = ''
  activatedRoute!:Subscription;
  productsService!:Subscription;

  product:Iproduct = {} as Iproduct;

    ngOnInit(): void {
      this.activatedRoute = this._ActivatedRoute.paramMap.subscribe({
        next:(p)=>{
          let productId = p.get('id')
          this.productsService =  this._ProductsService.getSpecificProducts(productId).subscribe({
            next:(res)=>{
              this.product = res;
              console.log(this.product);
            }
          })
          console.log(p.get('id'));
        }
      })
    }
    ngOnDestroy(): void {
      this.activatedRoute?.unsubscribe();
      this.productsService?.unsubscribe();
    }
}
