import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

/**
 * Utility Pipe to trust provided resource URLs
 */
@Pipe({
  name: "safeResourceUrl"
})
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Bypasses the {@link DomSanitizer}'s security trust for the provided resource URL
   * @param {string} resourceUrl Resource URL to trust
   * @returns {SafeResourceUrl} The safe resource URL
   */
  public transform(resourceUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(resourceUrl);
  }
}
