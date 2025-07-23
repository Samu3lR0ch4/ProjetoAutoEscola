import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:'', 
        component: HomeComponent
    },
    { 
    path:"cursos", 
    pathMatch: "full",
    loadComponent: () => {
        return import("./components/cursos/cursos.component").then (C => C.CursosComponent)    
    }
    },

    { 
    path:"sobre", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./components/sobre/sobre.component").then (C => C.SobreComponent) 
    }
    },


{
 path:"matricula", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./components/matricula/matricula.component").then (C => C.MatriculaComponent) 
    }
    },

    
{
 path:"loginuser", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./login/loginuser/loginuser.component").then (C => C.LoginuserComponent) 
    }
    },

    {
 path:"loginadm", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./login/loginadm/loginadm.component").then (C => C.LoginadmComponent) 
    }
    },

{
 path:"dashboard", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./components/dashboard/dashboard.component").then (C => C.DashboardComponent) 
    }
    },

    {
 path:"dashboardadm", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./components/dashboardadm/dashboardadm.component").then (C => C.DashboardAdmComponent) 
    }
    },
    {
 path:"termos", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./pages/termos/termos.component").then (C => C.TermosComponent) 
    }
    },
    {
     path:"politica", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./pages/politica/politica.component").then (C => C.PoliticaComponent) 
    }
    },
];
