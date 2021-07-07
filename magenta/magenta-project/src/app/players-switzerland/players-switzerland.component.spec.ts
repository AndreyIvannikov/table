import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('PlayersSwitzerlandComponent', () => {
  let component: PlayersSwitzerlandComponent;
  let fixture: ComponentFixture<PlayersSwitzerlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersSwitzerlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSwitzerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
