import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StoreModule, Store } from '@ngrx/store';
import { reducer } from './store/reducers/blacklist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxUIModule } from '@swimlane/ngx-ui';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        NgxDatatableModule,
        NgxUIModule,
        StoreModule.forRoot({ blacklist: reducer })
      ],
      providers: [Store],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
