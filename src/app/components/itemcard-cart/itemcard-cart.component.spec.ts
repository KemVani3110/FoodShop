import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcardCartComponent } from './itemcard-cart.component';

describe('ItemcardCartComponent', () => {
  let component: ItemcardCartComponent;
  let fixture: ComponentFixture<ItemcardCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcardCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemcardCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
