import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserInterfaceModule } from "@shared/user-interface/user-interface.module";
import { FormsModule } from "@angular/forms";
import { SafeResourceUrlPipe } from "./pipe/safe-resource-url.pipe";

@NgModule({
  declarations: [SafeResourceUrlPipe],
  imports: [CommonModule, FormsModule, UserInterfaceModule],
  exports: [FormsModule, UserInterfaceModule, SafeResourceUrlPipe],
})
export class SharedModule {}
