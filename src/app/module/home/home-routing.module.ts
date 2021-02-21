import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "@module/home/page/dashboard/dashboard.component";
import { AuthGuard } from "@core/guard";
import { ServerComponent } from "@module/home/page/server/server.component";
import { UserPreferencesComponent } from "@module/home/page/user-preferences/user-preferences.component";
import { CurrentUserResolver } from "@core/resolver";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "preferences",
    component: UserPreferencesComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Preferences"
    },
    resolve: {
      user: CurrentUserResolver
    }
  },
  { path: "server", component: ServerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
