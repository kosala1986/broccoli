import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let mockHttpService: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    mockHttpService = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });
 
});