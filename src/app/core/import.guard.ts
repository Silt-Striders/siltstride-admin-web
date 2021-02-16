import { CoreModule } from "@core/core.module";

export const throwIfAlreadyLoaded = (
  parentModule: CoreModule,
  moduleName: string
): void => {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
    );
  }
};
