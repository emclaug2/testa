import { TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HeroBannerComponent } from './hero-banner.component';
//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon'; 
describe('HeroBannerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         HeroBannerComponent
      ],
      imports: [
        BrowserModule,
        MatDividerModule,
        MatIconModule,
        HttpClientModule,
        //pxblue
        NgProgressIconsModule,
      
      ],
    }).compileComponents();
  }));

  it(`Div element should have class as 'wrapper'`, () => {
    const fixture = TestBed.createComponent(HeroBannerComponent);
    const heroComponent = fixture.debugElement;
    const wrapperDiv: HTMLElement = heroComponent.query(By.css('div')).nativeElement;
    expect(wrapperDiv.getAttribute('class')).toEqual('banner');
  });
});
