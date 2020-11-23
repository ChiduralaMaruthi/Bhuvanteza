import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.scss']
})
export class PaidComponent implements OnInit {

  items=[
    { "AN" : "John","P":"XP","Category" :"Uplevel","Rank" : "1","DE":"13-Nov-2020","C":"200","SFT" : "800","AP":"500","PM":"Online","PD":"17-Nov-2020","RN":"BT/101"},
    { "AN" : "Mark","P":"IBW","Category" :"Downlevel","Rank" : "2","DE":"14-Nov-2020","C":"300","SFT" : "600","AP":"600","PM":"DD","PD":"16-Nov-2020","RN":"BT/109"},
    { "AN" : "Jessy","P":"SG","Category" :"Uplevel","Rank" : "3","DE":"15-Nov-2020","C":"400","SFT" : "300","AP":"700","PM":"Cash","PD":"15-Nov-2020","RN":"BT/105"},
    { "AN" : "Lucy","P":"BT","Category" :"Downlevel","Rank" : "4","DE":"16-Nov-2020","C":"500","SFT" : "500","AP":"800","PM":"Cheque","PD":"14-Nov-2020","RN":"BT/107"},
    { "AN" : "Jeswin","P":"XP","Category" :"Uplevel","Rank" : "5","DE":"17-Nov-2020","C":"600","SFT" : "400","AP":"900","PM":"Cash","PD":"13-Nov-2020","RN":"BT/102"}
    ]
  constructor() { }

  ngOnInit() {
  }

}
