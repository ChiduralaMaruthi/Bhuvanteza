import { Settings } from './../../../../app.settings.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public single: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 
  employeeForm:FormGroup;
  isQuote:boolean=true;
  isProject:boolean=false;
  contactoptions: string[] = ['Isaac Walker', 'Henry Wade', 'Hilda Sweden', 'Marco Wilson', 'Martin Zeller'];
  existingContactName: string = 'Henry Wade';
  constructor() { 
    const single = [
      {
        name: 'Pending',
        value: 20
      },
      {
        name: 'Under-Construction',
        value: 70
      },
      {
        name: 'Available',
        value: 10
      }
     
    ];
    Object.assign(this, {single});
  }
  
  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"]
    ]
  }
  selectedReason='Constructing a new building';
  surveyOptions = ["Severance", "Constructing a new building", "Building a fence", "Want to know where my boundaries are",
  "Selling my house", "Minor variance", "Building permit application", "Need information for architect or engineering design",
  "Need topographic information", "Other"];
  ReasonQuestions  = ['Do you have an existing copy of a survey for the property ',
      'Are you applying for a severance or has it already been approved',
      'Do you have a sketch showing the proposed severanc',
      'Do you with a list of severance conditions from the municipality that you can provide'];
      SelectedReasonQuestions  = ['Do you have an existing copy of a survey for the property ',
      'Are you applying for a severance or has it already been approved'];
      hearOptions = ["Website", "Social Media (Facebook, Twitter etc)", "Referral (Friend, Family, Etc)", "Google", "Previously a Client", "Other"]
      DetailsText = 'Do you with a list of severance conditions from the municipality that you can provide';
   selectedValue = "1";
  ngOnInit() {
    this.isProject = true;
    this.employeeForm=new FormGroup({
      notes: new FormControl('Q-190001'),
      Quote: new FormControl('New Project'),
      Client: new FormControl('Toronto Towers'),
      Survey: new FormControl('Reference Plan'),
      Admin: new FormControl('James Smith'),
      Account: new FormControl('Rob'),
      Email: new FormControl('james2136@gmail.com'),
      Project: new FormControl('Dwayne'),
      Phone: new FormControl('(416) 920-5100'),
      Country: new FormControl('Canada'),
      Province: new FormControl('Ontario'),
      Municipality: new FormControl('Ottawa'),
      City: new FormControl('Ottawa'),
      Street: new FormControl('79GG+XC Gloucester'),
      projectType: new FormControl('1'),
      clientName: new FormControl('1'),
      surveyType: new FormControl('1'),
      accountManager: new FormControl('1'),
      projectManager: new FormControl('1'),
      DueDate: new FormControl('2019-11-28'),
      ReceivedDate: new FormControl('2019-10-09'),
      QuotedDate: new FormControl('2019-10-30'),
      country: new FormControl('2'),
      state: new FormControl('1'),
      municipality: new FormControl('3')
 
    })
  }
  isedit:boolean=true;

  editfun(){
    this.isedit=false;
  }

  savedata(){
    console.log(this.employeeForm.value);
    
   this.isedit=true;

  }

  cancel(){
    
     this.isedit=true;

  }

}
