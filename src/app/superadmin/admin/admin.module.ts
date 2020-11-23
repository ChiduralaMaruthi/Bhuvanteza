import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { SettingsComponent } from './settings/settings.component';
import { LookupoptionsComponent } from './lookupoptions/lookupoptions.component';
import { UserDialogComponent } from './manageusers/user-dialog/user-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddlookupDialogueComponent } from './lookupoptions/addlookup-dialogue/addlookup-dialogue.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'lookup', component: LookupoptionsComponent, data: { breadcrumb: 'Lookup Options' } },
  { path: 'users', component: ManageusersComponent, data: { breadcrumb: 'Manage Users' } },
  { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'Settings' } },
];

@NgModule({
  declarations: [AdminComponent, ManageusersComponent, SettingsComponent, LookupoptionsComponent, UserDialogComponent, AddlookupDialogueComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents: [UserDialogComponent,DeleteConfirmDialogComponent,AddlookupDialogueComponent]
})
export class AdminModule { }
