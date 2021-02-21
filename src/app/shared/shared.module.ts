import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserInterfaceModule } from "@shared/user-interface/user-interface.module";
import { FormsModule } from "@angular/forms";
import { SafeResourceUrlPipe } from "@shared/pipe";
import { UserProfileComponent } from "@shared/component";
import { ThemeChooserComponent } from "@shared/component";

@NgModule({
  declarations: [
    SafeResourceUrlPipe,
    UserProfileComponent,
    ThemeChooserComponent
  ],
  imports: [CommonModule, FormsModule, UserInterfaceModule],
  exports: [
    FormsModule,
    UserInterfaceModule,
    SafeResourceUrlPipe,
    UserProfileComponent,
    ThemeChooserComponent
  ]
})
export class SharedModule {}
