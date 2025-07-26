import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { Icart} from '../../core/interfaces/icart';
import { ProductsService } from '../../core/services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy{

  private readonly _CartService = inject(CartService)

  cartSubscribe!:Subscription;
  cartItems:Icart[] = [];


  ngOnInit(): void {
    this.cartSubscribe = this._CartService.getCart().subscribe({
      next:(res)=>{
        this.cartItems = res
      }
    })
  }
  
  ngOnDestroy(): void {
    this.cartSubscribe?.unsubscribe()
  }
}

