import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { SharedModule } from "@shared/shared.module";
import { ServerComponent } from "./page/server/server.component";

@NgModule({
  declarations: [DashboardComponent, ServerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
