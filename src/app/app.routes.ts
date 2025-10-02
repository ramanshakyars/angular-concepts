import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FiltersComponent } from './filters/filters.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    // { path: '',component: HomeComponent },
    { path: '',component: AdminComponent },
      { path: 'patient', component: PatientComponent, outlet: 'aux' }, // Auxiliary route for Patient

    // { path: 'admin',component: AdminComponent , outlet: 'aux'},

    { path: 'payment',component: PaymentComponent },
    { path: 'filter',component: FiltersComponent },
];
