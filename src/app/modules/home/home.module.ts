import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { InviteComponent } from './invite-dialog/invite.component';



@NgModule({
  declarations: [
    MainWrapperComponent,
    InviteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [
    UserService,
  ],
})
export class HomeModule { }
