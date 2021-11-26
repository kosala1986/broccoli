import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MainWrapperComponent } from './main-wrapper.component';

describe('MainWrapperComponent', () => {
  let component: MainWrapperComponent;
  let fixture: ComponentFixture<MainWrapperComponent>;
  let mockDialog: MatDialog = jasmine.createSpyObj('MatDialog', ['open', 'close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainWrapperComponent],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open the invite component', () => {
    component.inviteUser();

    expect(mockDialog.open).toHaveBeenCalled();
  });
});
