import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUIModule, ButtonModule } from '@swimlane/ngx-ui';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducer } from './store/reducers/blacklist';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckComponent } from './components/check/check.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { HomeComponent } from './components/app-home/app-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, CheckComponent, HomeComponent],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ blacklist: reducer }),
    RouterModule.forRoot(routes),
    NgxChartsModule,
    NgxUIModule,
    FlexLayoutModule,
    ButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [Store, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
