import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { ResourcesComponent } from './resources/resources.component';
import {FeedbackComponent} from './feedback/feedback.component';

const routes: Routes = [
  {path: '', redirectTo: '/download', pathMatch: 'full'},
  {path: 'download', component: DownloadComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
