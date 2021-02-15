import { NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from "@core/import.guard";
import { HttpClientModule } from "@angular/common/http";
import { UserInterfaceModule } from "@shared/user-interface/user-interface.module";

@NgModule({
  imports: [HttpClientModule, UserInterfaceModule],
  exports: [HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
