import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";

/**
 * Module for exposing the UI component library to other areas of the application via the {@link SharedModule}
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, ClarityModule],
  exports: [ClarityModule]
})
export class UserInterfaceModule {}
