import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'events',component:EventsComponent,canActivate:[AuthGuard]},
  {path:'special',component:SpecialEventsComponent,canActivate:[AuthGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'events',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
 export const routingcomp=
  [EventsComponent,
    SpecialEventsComponent,
    RegistrationComponent,
    LoginComponent
];
