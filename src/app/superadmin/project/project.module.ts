import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectGridviewComponent } from './project-gridview/project-gridview.component';
import { ProjectMapviewComponent } from './project-mapview/project-mapview.component';
import { ProjectKanbanviewComponent } from './project-kanbanview/project-kanbanview.component';
import { DragDropModule } from 'primeng/primeng';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DndModule } from 'ngx-drag-drop';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DragulaService } from 'ng2-dragula';
import { ProjectGridcolumnsComponent } from './project-gridview/project-gridcolumns/project-gridcolumns.component';
import { AddprojectDialogueComponent } from './project-gridview/addproject-dialogue/addproject-dialogue.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectScheduleComponent } from './project-schedule/project-schedule.component';
import { ScheduleComponent } from './project-dashboard/schedule/schedule.component';
import { AddincentiveComponent } from './project-gridview/addincentive/addincentive.component';

export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
    { path: 'gridview', component: ProjectGridviewComponent, data: { breadcrumb: '' } },
    { path: 'kanbanview', component: ProjectKanbanviewComponent, data: { breadcrumb: '' } },
    { path: 'mapview', component: ProjectMapviewComponent, data: { breadcrumb: '' } } ,
    { path: 'schedule', component: ProjectScheduleComponent, data: { breadcrumb: '' } } ,
    { path: 'project-dashboard', component: ProjectDashboardComponent, loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: 'Project Dashboard' } },
];

@NgModule({
  declarations: [ProjectComponent, ProjectGridviewComponent, ProjectMapviewComponent, ProjectKanbanviewComponent, ProjectGridcolumnsComponent,AddprojectDialogueComponent,ProjectDashboardComponent, ProjectScheduleComponent, AddincentiveComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,DndModule,DragDropModule
  ],
  providers: [AlertService,DragulaService],
  entryComponents: [ProjectGridcolumnsComponent,DeleteConfirmDialogComponent,AddprojectDialogueComponent,AddincentiveComponent]
})
export class ProjectModule { }
