import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderHistoryComponent } from './user-order-history.component';

describe('ViewBookDetailsComponent', () => {
  let component: UserOrderHistoryComponent;
  let fixture: ComponentFixture<UserOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOrderHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
