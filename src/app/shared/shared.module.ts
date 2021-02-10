import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserInterfaceModule } from "@shared/user-interface/user-interface.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, UserInterfaceModule],
  exports: [FormsModule, UserInterfaceModule],
})
export class SharedModule {}
