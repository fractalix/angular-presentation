import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsComponent } from './arrows.component';

// TODO: Fix this test suite.
xdescribe('ArrowsComponent', () => {
  let component: ArrowsComponent;
  let fixture: ComponentFixture<ArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
