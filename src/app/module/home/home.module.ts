import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { SharedModule } from "@shared/shared.module";
import { ServerComponent } from "./page/server/server.component";
import { UserPreferencesComponent } from "./page/user-preferences/user-preferences.component";

@NgModule({
  declarations: [DashboardComponent, ServerComponent, UserPreferencesComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
