import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteComponent } from '../invite/invite.component';

/** This is the middle component of the homepage. */
@Component({
  selector: 'main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  /** Opens the invite component dialog model. */
  inviteUser(): void {

    this.dialog.open(InviteComponent, {
      width: '400px',
      autoFocus: false,
    });
  }
}
