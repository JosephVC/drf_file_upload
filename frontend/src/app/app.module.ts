import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  // declarations: [
  //   AppComponent
  // ],
  imports: [
    // [...]
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
