import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleErrorPageComponent } from './sample-error-page.component';

describe('SampleErrorPageComponent', () => {
  let component: SampleErrorPageComponent;
  let fixture: ComponentFixture<SampleErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleErrorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
