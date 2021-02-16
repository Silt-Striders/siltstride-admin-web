import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./layout/login/login.component";
import { LayoutComponent } from "./layout/layout/layout.component";
import { AuthRedirectComponent } from "./layout/auth-redirect/auth-redirect.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/app/dashboard" },
  { path: "login", component: LoginComponent },
  { path: "auth/redirect", component: AuthRedirectComponent },
  {
    path: "app",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("@module/home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
  { path: "**", redirectTo: "/app/dashboard" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
