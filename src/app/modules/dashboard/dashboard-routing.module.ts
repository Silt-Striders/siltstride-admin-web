import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "@modules/dashboard/components/dashboard/dashboard.component";
import { AuthGuard } from "@core/guards/auth.guard";
import { ServerComponent } from "@modules/dashboard/components/server/server.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "server", component: ServerComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
