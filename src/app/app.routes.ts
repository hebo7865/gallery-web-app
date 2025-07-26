import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'product/:id', component:ProductComponent},
    {path:'cart', component:CartComponent},
    {path:'**', component:NotfoundComponent}

];
