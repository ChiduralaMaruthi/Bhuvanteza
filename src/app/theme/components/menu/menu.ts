import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const horizontalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const adminMenuItems = [

    new Menu(1, 'Analytics', '/superadmin/analytics', null, 'analytics', null, true, 0, "white"),
    new Menu(2, 'Projects', '/superadmin/projects', null, 'description', null, true, 0, "white"),
    new Menu(3, 'Sales', '/superadmin/sales', null, 'business_center', null, true, 0, "white"),
    new Menu(3.1, 'Leads', '/superadmin/sales/leads', null, 'group', null, true, 3, "white"),
    new Menu(3.2, 'Prospects', '/superadmin/sales/prospects', null, 'outlined_flag', null, true, 3, "white"),
    new Menu(3.3, 'Constant Contact', '/superadmin/sales/constantcontacts', null, 'contact_page', null, true, 3, "white"),
    new Menu(3.4, 'Commission', '/superadmin/sales/commission', null, 'group', null, true, 3, "white"),
    new Menu(3.5, 'Incentives', '/superadmin/sales/incentives', null, 'group', null, true, 3, "white"),
    new Menu(4, 'Agents', '/superadmin/agents', null, 'group', null, true, 0, "white"),
    // new Menu(5, 'Visits', '/superadmin/visits', null, 'today', null, true, 0, "white"),
    new Menu(6, 'Customers', '/superadmin/customers', null, 'group_add', null, true, 0, "white"),
    new Menu(7, 'Admin', '/superadmin/admin/users', null, 'person', null, true, 0, "white"),
    new Menu(7.1, 'Manage Users', '/superadmin/admin/users', null, 'group_add', null, true, 7, "white"),
    new Menu(7.2, 'Settings', '/superadmin/admin/settings', null, 'settings_applications', null, true, 7, "white"),
    new Menu(7.3, 'Lookup Options', '/superadmin/admin/lookup', null, 'zoom_in', null, true, 7, "white"),
]

export const salesMenuItems = [

    new Menu(1, 'Analytics', '/sales/analytics', null, 'analytics', null, true, 0, "white"),
    new Menu(2, 'Leads', '/sales/leads', null, 'group', null, true, 0, "white"),
    new Menu(3, 'Team', '/sales/teams', null, 'business_center', null, true, 0, "white"),
    new Menu(4, 'Customers', '/sales/customers', null, 'group', null, true, 0, "white"),
    new Menu(5, 'Sales', '/sales/sales', null, 'today', null, true, 0, "white"),
    new Menu(6, 'Payments', '/sales/payments', null, 'payments', null, true, 0, "white"),
]
 
export const customerMenuItems = [
    new Menu(1, 'Overview', '/customers/overview', null, 'analytics', null, true, 0, "white"),
    new Menu(2, 'Transactions', '/customers/transaction', null, 'business_center', null, true, 0, "white"),
    
]