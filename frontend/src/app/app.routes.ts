import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { FoodPickupComponent } from './food-pickup/food-pickup.component';
import { FoodPickupReportComponent } from './food-pickup-report/food-pickup-report.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'clientform', component: ClientFormComponent },
    { path: 'food-pickup', component: FoodPickupComponent },
    { path: 'food-pickup-report', component: FoodPickupReportComponent },
    { path: 'client', component: ClientComponent },

];
