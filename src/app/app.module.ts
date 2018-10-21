import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule ,routingcomp} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
   routingcomp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [AuthService,EventService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
