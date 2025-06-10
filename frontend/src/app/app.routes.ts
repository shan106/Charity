import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { FoodPickupComponent } from './food-pickup/food-pickup.component';

export const routes: Routes = [
    { path: '', component: ClientComponent },
    { path: 'clientform', component: ClientFormComponent },
    { path: 'food-pickup', component: FoodPickupComponent }
];
