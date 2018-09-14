import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './pages/showcase/autocomplete/autocomplete.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


const appRoutes: Routes = [

    { path: 'main', component: HomeLayoutComponent,
            children: [
            { path: 'autocomplete', component: AutocompleteComponent, data: {title: 'AutoComplete'} }
            ]
    }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );
