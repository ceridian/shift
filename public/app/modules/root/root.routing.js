"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
//services
//import {AuthGuard} from '../../services/auth/auth-guard.service';
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    },
];
exports.appRoutingProviders = [];
exports.RootRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=root.routing.js.map