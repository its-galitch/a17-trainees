import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from "./pages/data/data.component";
import {MonitorComponent} from "./pages/monitor/monitor.component";
import {AnalysisComponent} from "./pages/analysis/analysis.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/data",
    pathMatch: "full"
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: 'analysis',
    component: AnalysisComponent
  },
  {
    path: 'monitor',
    component: MonitorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
