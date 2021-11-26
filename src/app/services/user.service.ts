import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** UserService providing data to the components. */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpService: HttpService,
  ) { }

  /** Invites user by calling the backend API. */
  inviteUser(payload: User): Observable<string> {

    return this.httpService.post(environment.inviteUrl, payload)
      .pipe(
        map((response) => {
          return response as string;
        }));
  }
}