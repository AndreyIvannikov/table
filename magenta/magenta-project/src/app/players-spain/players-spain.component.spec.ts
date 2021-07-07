import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersSpainComponent } from './players-spain.component';

describe('PlayersSpainComponent', () => {
  let component: PlayersSpainComponent;
  let fixture: ComponentFixture<PlayersSpainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersSpainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
