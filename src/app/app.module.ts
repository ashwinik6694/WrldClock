import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
//import{ClockComponent} from './clock/clock.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
   declarations: [
      
      AppComponent,
      
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
         {path: '',component:AppComponent}
      ])
   ],
   providers: [MyserviceService],
   bootstrap: [AppComponent]
})
export class AppModule { }