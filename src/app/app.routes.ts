import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AddtemplateComponent} from './addtemplate/addtemplate.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addtemplate', component: AddtemplateComponent}
]
