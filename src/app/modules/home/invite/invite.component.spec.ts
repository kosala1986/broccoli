import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteComponent } from './invite.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ErrorService } from '../../../services/error-service';
import { By } from "@angular/platform-browser";
import { of } from "rxjs";

describe('InviteComponent', () => {
  let component: InviteComponent;
  let fixture: ComponentFixture<InviteComponent>;
  let fakeDialogRef: jasmine.SpyObj<MatDialogRef<InviteComponent>>;


  const mockUserService = jasmine.createSpyObj('UserService', ['inviteUser']);
  const mockErroroService = jasmine.createSpyObj('ErrorService', ['getErrorMessage']);

  fakeDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InviteComponent],
      imports: [FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: fakeDialogRef },
        { provide: UserService, useValue: mockUserService },
        { provide: ErrorService, useValue: mockErroroService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    mockErroroService.getErrorMessage.and.returnValue(of(''));

    fixture = TestBed.createComponent(InviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show invite fields when it is initialized', () => {

    const title = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(title.innerHTML).toBe('Request an invite');
  });

  it('should show success view when user is registered', () => {

    mockUserService.inviteUser.and.returnValue(of('registered'));
    component.invite();
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(title.innerHTML).toBe('All done!');
  });

  it('should show error message when backend throws', () => {

    mockErroroService.getErrorMessage.and.returnValue(of('Email required'));
    const fixture = TestBed.createComponent(InviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('.error-message span')).nativeElement;

    expect(title.innerHTML).toBe('Email required');
  });

  it('should close the dialog', () => {
    component.closeDialog();

    expect(fakeDialogRef.close).toHaveBeenCalled();
  });
});
