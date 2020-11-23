import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { SitevisitsComponent } from './sitevisits/sitevisits.component';
import { DocsComponent } from './docs/docs.component';
import { ConceptComponent } from './concept/concept.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DesignComponent } from './design/design.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { ConstructionComponent } from './construction/construction.component';
import { ClosureComponent } from './closure/closure.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/dragdrop';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddsvComponent } from './sitevisits/addsv/addsv.component';
import { AddoComponent } from './sitevisits/addo/addo.component';
import { AddsComponent } from './schedule/adds/adds.component';
import { AddComponent } from './drawings/add/add.component';

export const routes = [ 
  { path: '', redirectTo:"activity", pathMatch:'full' },
  { path: 'activity', component: ActivityComponent, data: { breadcrumb: 'Activity' } },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'sitevisits', component: SitevisitsComponent, data: { breadcrumb: 'Project Dashboard' } },
 
  { path: 'concept', component: ConceptComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'unit', component: ScheduleComponent, data: { breadcrumb: 'Project Dashboard' } },
  
  { path: 'docs', component: DrawingsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'closure', component: ClosureComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'structure', component: ConstructionComponent, data: { breadcrumb: 'Project Dashboard' } },
]

@NgModule({
  declarations: [ ActivityComponent, OverviewComponent, SitevisitsComponent, DocsComponent, ConceptComponent, ScheduleComponent, DesignComponent, DrawingsComponent, ConstructionComponent, ClosureComponent, AddsvComponent, AddoComponent, AddsComponent, AddComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  entryComponents:[DeleteConfirmDialogComponent,AddsvComponent,AddoComponent,AddComponent,AddsComponent]
})

export class ProjectDashboardModule { }
