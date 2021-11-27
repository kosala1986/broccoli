import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let mockHttpService: HttpService;
  let httpTestingController: HttpTestingController;

  const mockUser: User = new User();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    mockHttpService = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns data when inviteUser() is successful', () => {
    service.inviteUser(mockUser).subscribe(response => {
      expect(response).toEqual('Registered');
    });

    const req = httpTestingController.expectOne(environment.inviteUrl);
    expect(req.request.method).toBe("POST");
    req.flush('Registered');

    httpTestingController.verify();
  });

});