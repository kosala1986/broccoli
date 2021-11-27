import { Component, OnInit } from '@angular/core';
import { User, UserLabel } from '../../../shared/models/user';
import { UserService } from '../../../services/user.service';
import { ErrorService } from '../../../services/error-service';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from '../../../services/loading.service';
import { Observable } from 'rxjs';

/**
 * This component is a dialog model which is used to invite users to the
 * Broccoli & Co.
 */
@Component({
  selector: 'invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  showsuccessMsg = false;

  user: User = new User();

  errorMsg = '';

  loading$: Observable<boolean>;

  readonly UserLabel = UserLabel;

  constructor(
    private readonly errorService: ErrorService,
    private loadingService: LoadingService,
    readonly dialogRef: MatDialogRef<InviteComponent>,
    private readonly userService: UserService,
  ) {

    this.loading$ = this.loadingService.loading$;
    this.errorService.getErrorMessage().subscribe((message) => {
      this.errorMsg = message;
    });
  }

  ngOnInit(): void { }

  invite() {
    this.userService.inviteUser(this.user).subscribe(response => {
      this.showsuccessMsg = true;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
