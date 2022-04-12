import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleErrorPageComponent } from './sample-404-error-page/sample-error-page.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { SampleDragFropComponent } from './sample-drag-frop/sample-drag-frop.component';
import { SampleFormsComponent } from './sample-forms/sample-forms.component';
import { SampleLoginComponent } from './sample-login/sample-login.component';
import { SampleTablesComponent } from './sample-tables/sample-tables.component';
import { TestEvalComponent } from './test-eval/test-eval.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'drag-drop',
    component: SampleDragFropComponent
  },
  {
    path: 'dashboard',
    component: SampleDashboardComponent
  },
  {
    path: 'table',
    component: SampleTablesComponent
  },
  {
    path: 'forms',
    component: SampleFormsComponent
  },
  {
    path: 'login',
    component: SampleLoginComponent
  },
  {
    path: 'error404',
    component: SampleErrorPageComponent
  },
  {
    path: 'eval-test',
    component: TestEvalComponent
  },
  { path: 'text-editor', loadChildren: () => import('./text-editor/text-editor.module').then(m => m.TextEditorModule) },
  {
    path: '**',
    redirectTo: 'error404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
