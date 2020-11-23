import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent, MatDialog } from '@angular/material';
import { ProjectGridcolumnsComponent } from './project-gridcolumns/project-gridcolumns.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddprojectDialogueComponent } from './addproject-dialogue/addproject-dialogue.component';
import { AddincentiveComponent } from './addincentive/addincentive.component';

@Component({
  selector: 'app-project-gridview',
  templateUrl: './project-gridview.component.html',
  styleUrls: ['./project-gridview.component.scss']
})
export class ProjectGridviewComponent implements OnInit {

  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
           {'status_id':'2','status_name':'Inactive'}]

  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  startendDate = new FormControl();
  startdueDate = new FormControl();
  activityDate = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [{projectNumber: "P12007",streetAddress: "Satyam","City" : "Delhi",clientName: "2314535 Ontario Limited (The King Street Condos)",struct:"38/97",arch:"33/45",plumbing:"15",ele:"47/98",fire:"99/123",
  projectType: "Residential",projectManager: "3","C":"Rs.200","Units":"343/432",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"2000","BA":"1000","CA":"1000","Status": "Active"},
  {struct:"23/97",arch:"32/48",plumbing:"12",ele:"67/98",fire:"54/103",projectNumber: "P12002",streetAddress: "Forum","City" : "Goa",clientName: "1799882 Ontario Inc.",
  projectType: "Commercial",projectManager: "5","C":"Rs.200","Units":"127/123",strDueDate: "2019-12-20",strFollowUpDate: "2019-07-18",strProjectAwaredDate: "2020-05-17",
  "TA":"5000","BA":"4000","CA":"1000","Status": "Active"},
  {struct:"28/97",arch:"12/48",plumbing:"13",ele:"27/198",fire:"24/113",projectNumber: "P12300",streetAddress: "MKR","City" : "elhi",clientName: "The King Street Condos",
  projectType: "Residential",projectManager: "2","C":"Rs.200","Units":"137/189",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"2000","BA":"1000","CA":"1000","Status": "Active"},
  {struct:"38/97",arch:"43/48",plumbing:"09",ele:"78/98",fire:"64/103",projectNumber: "P2390",streetAddress: "Sujana","City" : "Delhi",clientName: "2314535 Ontario Limited",
  projectType: "Commercial",projectManager: "9","C":"Rs.200","Units":"231/134",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
   "TA":"5000","BA":"4000","CA":"1000","Status": "Active"},
  {struct:"11/12",arch:"32/48",plumbing:"12",ele:"67/98",fire:"54/103",projectNumber: "P12374",streetAddress: "Mega","City" : "Goa",clientName: "The King Street Condos",
  projectType: "Residential",projectManager: "4","C":"Rs.200","Units":"342/345",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"5000","BA":"4000","CA":"1000","Status": "Active"},
  {struct:"09/12",arch:"33/48",plumbing:"14",ele:"56/76",fire:"74/103",projectNumber: "P12009",streetAddress: "PVR","City" : "elhi",clientName: "2314535 Ontario Limited (The King Street Condos)",
  projectType: "Commercial",projectManager: "5","C":"Rs.200","Units":"343/432",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"5000","BA":"4000","CA":"1000","Status": "Active"},
  {struct:"01/09",arch:"32/48",plumbing:"08",ele:"67/98",fire:"54/103",projectNumber: "P12092",streetAddress: "INOX","City" : "Goa",clientName: "The Street Condos",
  projectType: "Commercial",projectManager: "6","C":"Rs.200","Units":"231/134",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
 "TA":"2000","BA":"1000","CA":"1000","Status": "Active"},
  {struct:"10/97",arch:"48/48",plumbing:"09",ele:"78/98",fire:"98/99",projectNumber: "P12007",streetAddress: "IMAX","City" : "elhi",clientName: "The King Street",
  projectType: "Commercial",projectManager: "4","C":"Rs.200","Units":"127/123",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"5000","BA":"4000","CA":"1000","Status": "Active"},
  {struct:"38/97",arch:"32/48",plumbing:"10",ele:"67/98",fire:"54/103",projectNumber: "9-12007",streetAddress: "Cube","City" : "Goa",clientName: " Ontario Limited ",
  projectType: "Commercial",projectManager: "3","C":"Rs.200","Units":"126/198",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"5000","BA":"4000","CA":"1000","Status": "Active"},
  {struct:"18/87",arch:"32/48",plumbing:"11",ele:"67/98",fire:"54/103",projectNumber: "10-12007",streetAddress: "IMAX","City" : "Goa",clientName: "2314535 Ontario Limited (The King Street Condos)",
  projectType: "Commercial",projectManager: "1","C":"Rs.200","Units":"137/189",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  "TA":"2000","BA":"1000","CA":"1000","Status": "Active"}];

  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openProjectDialog(stat){
    let dialogRef = this.dialog.open(AddprojectDialogueComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
  
      }
    });
  }

  addIncentive(stat){
    let dialogRef = this.dialog.open(AddincentiveComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
  
      }
    });
  }


  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  
  fliterSearch() {}
  clearFilters() {
    this.contactName.setValue([]);
    this.clientName.setValue([]);
    this.jobTitle.setValue([]);
    this.startendDate.setValue([]);
    this.startdueDate.setValue([]);
    this.activityDate.setValue([]);
    this.contactNumber.setValue([]);
    this.statu.setValue([]);
    this.status_filter = '';
  }

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }

openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(ProjectGridcolumnsComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {
        
      }
    });
  }
}
