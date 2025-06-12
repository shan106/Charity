import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { FoodPickupComponent } from './food-pickup/food-pickup.component';
import { FoodPickupReportComponent } from './food-pickup-report/food-pickup-report.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'clientform', component: ClientFormComponent, canActivate: [authGuard] },
    { path: 'food-pickup', component: FoodPickupComponent, canActivate: [authGuard] },
    { path: 'food-pickup-report', component: FoodPickupReportComponent, canActivate: [authGuard] },
    { path: 'client', component: ClientComponent, canActivate: [authGuard] },

];
