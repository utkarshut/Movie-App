import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {environment} from '../environments/environment';

import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieListComponent} from './movie-list/movie-list.component'

const routes:Routes=[
        {path:'',component:MovieListComponent},
        {path:'MovieDetail',component:MovieDetailComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule{};

