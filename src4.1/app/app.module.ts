import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddBooksComponent } from './app.addbooks';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,
        AddBooksComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }