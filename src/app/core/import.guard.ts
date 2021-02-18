import { CoreModule } from "@core/core.module";

/**
 * Helper function preventing the {@link CoreModule} from being imported more than once as implemented in the [Angular reference documentation]{@link https://angular.io/guide/singleton-services#prevent-reimport-of-the-greetingmodule}
 * @param {CoreModule} parentModule The CoreModule
 * @param {string} moduleName Name of the CoreModule
 */
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
