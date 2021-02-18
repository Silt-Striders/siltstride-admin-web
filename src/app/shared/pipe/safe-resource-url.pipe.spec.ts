import { SafeResourceUrlPipe } from "./safe-resource-url.pipe";
import { TestBed } from "@angular/core/testing";
import { DomSanitizer } from "@angular/platform-browser";

describe("SafeResourceUrlPipe", () => {
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustResourceUrl: (resourceUrl: string) =>
              `safe${resourceUrl}`
          }
        }
      ]
    });

    domSanitizer = TestBed.inject(DomSanitizer);
  });

  it("create an instance", () => {
    const pipe = new SafeResourceUrlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
