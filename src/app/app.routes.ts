import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './pages/showcase/autocomplete/autocomplete.component';
import { SidenavComponent } from './pages/showcase/sidenav/sidenav.component';


const appRoutes: Routes = [
    { path: 'main', component: SidenavComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );
