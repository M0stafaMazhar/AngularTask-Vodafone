import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseFavoritesComponent } from './firebase-favorites.component';

describe('FirebaseFavoritesComponent', () => {
  let component: FirebaseFavoritesComponent;
  let fixture: ComponentFixture<FirebaseFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirebaseFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirebaseFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
