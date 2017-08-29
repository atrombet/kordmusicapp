import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: '', redirectTo: '/download'},
  {path: 'download', component: DownloadComponent},
  {path: 'resources', component: ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
