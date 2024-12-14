import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FiltersComponent } from './filters/filters.component';

export const routes: Routes = [
    { path: '',component: HomeComponent },
    { path: 'payment',component: PaymentComponent },
    { path: 'filter',component: FiltersComponent },
];
