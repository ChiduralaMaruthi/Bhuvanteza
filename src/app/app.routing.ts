import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MessagecenterComponent } from "./superadmin/messagecenter/messagecenter.component";

export const routes: Routes = [
  {
    path: "superadmin",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "analytics", pathMatch: "full" },
             
      {
        path: "analytics",
        loadChildren: "./superadmin/dashboard/dashboard.module#DashboardModule",
        data: { breadcrumb: "Analytics" },
      },        
      {
        path: "projects",
        loadChildren: "./superadmin/project/project.module#ProjectModule",
        data: { breadcrumb: "Project" },
      },  
      {
        path: "sales",
        loadChildren: "./superadmin/sales/sales.module#SalesModule",
        data: { breadcrumb: "Sales" },
      },  
      {
        path: "agents",
        loadChildren: "./superadmin/agents/agents.module#AgentsModule",
        data: { breadcrumb: "Agents" },
      },  
      {
        path: "visits",
        loadChildren: "./superadmin/visits/visits.module#VisitsModule",
        data: { breadcrumb: "Visits" },
      },   
      {
        path: "customers",
        loadChildren: "./superadmin/customers/customers.module#CustomersModule",
        data: { breadcrumb: "Customers" },
      }, 
      {
        path: "admin",
        loadChildren: "./superadmin/admin/admin.module#AdminModule",
        data: { breadcrumb: "Admin" },
      },   
      {
        path: "messagecenter",
        component: MessagecenterComponent,
        data: { breadcrumb: "Message Center" },
      },        
    ],
  },
  {
    path: "sales",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "analytics", pathMatch: "full" },
             
      {
        path: "analytics",
        loadChildren: "./sales/analytics/analytics.module#AnalyticsModule",
        data: { breadcrumb: "Analytics" },
      },        
      {
        path: "leads",
        loadChildren: "./sales/leads/leads.module#LeadsModule",
        data: { breadcrumb: "Leads" },
      },  
      {
        path: "teams",
        loadChildren: "./sales/team/team.module#TeamModule",
        data: { breadcrumb: "Teams" },
      },  
      {
        path: "customers",
        loadChildren: "./sales/customers/customers.module#CustomersModule",
        data: { breadcrumb: "Customers" },
      },  
      {
        path: "sales",
        loadChildren: "./sales/sales/sales.module#SalesModule",
        data: { breadcrumb: "Sales" },
      },   
      {
        path: "payments",
        loadChildren: "./sales/payments/payments.module#PaymentsModule",
        data: { breadcrumb: "Payments" },
      },       
    ],
    
  },
  {
    path: "customers",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "overview", pathMatch: "full" },
             
      {
        path: "overview",
        loadChildren: "./customer/overview/overview.module#OverviewModule",
        data: { breadcrumb: "Overview" },
      },        
      {
        path: "transaction",
        loadChildren: "./customer/transaction/transaction.module#TransactionModule",
        data: { breadcrumb: "Transactions" },
      },    
    ],
    
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { breadcrumb: "Login" } },
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
