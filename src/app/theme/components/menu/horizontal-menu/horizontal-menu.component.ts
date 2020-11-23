import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AppSettings } from "../../../../app.settings";
import { Settings } from "../../../../app.settings.model";
import { MenuService } from "../menu.service";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import { TourService } from "ngx-tour-ngx-bootstrap";

@Component({
  selector: "app-horizontal-menu",
  templateUrl: "./horizontal-menu.component.html",
  styleUrls: ["./horizontal-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService],
})
export class HorizontalMenuComponent implements OnInit {
  @Input("menuParentId") menuParentId;
  public menuItems: Array<any>;
  public settings: Settings;
  public currentYear: String;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor(
    public appSettings: AppSettings,
    public dialog: MatDialog,
    public menuService: MenuService,
    public router: Router,
    public tourService: TourService
  ) {
    this.settings = this.appSettings.settings;
    this.tourService.initialize(
      [
        {
          anchorId: '1',
          content: 'Analytics.',
          placement: 'bottom',
          title: 'Analytics'
        },
        {
          anchorId: '2',
          content:'Projects',
          placement: 'bottom',
          title: 'Projects'
        },
        {
          anchorId: '3',
          content: 'Sales',
          placement: 'bottom',
          title: 'Sales'
        },
        {
          anchorId: '4',
          content: "Agents",
          placement: 'bottom',
          title: 'Agents'
        },
        {
          anchorId: '6',
          content: 'Customers',
          placement: 'bottom',
          title: 'Customers'
        },
        {
          anchorId: '7',
          content: 'Roles & Users can be managed here. Master Data & Settings can be setup from this module.',
          placement: 'bottom',
          title: 'Admin'
        },
      ],
      {
        route: '/superadmin/analytics'
      }
    );
    // this.tourService.start();
  }

  ngOnInit() {
    this.currentYear = "" + new Date().getFullYear();
    if (localStorage.getItem("loginUser") == "admin@bt.com") {
      this.menuItems = this.menuService.getAdminMenuItems();
    }
    else if (localStorage.getItem("loginUser") == "sales@bt.com") {
      this.menuItems = this.menuService.getSalesMenuItems();
    }
    else if (localStorage.getItem("loginUser") == "customer@bt.com") {
      this.menuItems = this.menuService.getCustomerMenuItems();
    }
    this.menuItems = this.menuItems.filter(
      (item) => item.parentId == this.menuParentId
    );
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.settings.fixedHeader) {
          let mainContent = document.getElementById("main-content");
          if (mainContent) {
            mainContent.scrollTop = 0;
          }
        } else {
          document.getElementsByClassName(
            "mat-drawer-content"
          )[0].scrollTop = 0;
        }
      }
    });
  }

  checkMenuLink(menuId) {}
}
