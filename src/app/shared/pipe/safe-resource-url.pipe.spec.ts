import { SafeResourceUrlPipe } from "./safe-resource-url.pipe";
import { TestBed } from "@angular/core/testing";
import { DomSanitizer } from "@angular/platform-browser";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe("SafeResourceUrlPipe", () => {
  let domSanitizerSpy: SpyObj<DomSanitizer>;

  beforeEach(() => {
    const domSanitizerSpyObj = createSpyObj("DomSanitizer", [
      "bypassSecurityTrustResourceUrl"
    ]) as DomSanitizer;
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: domSanitizerSpyObj
        }
      ]
    });

    domSanitizerSpy = TestBed.inject(DomSanitizer) as SpyObj<DomSanitizer>;
  });

  it("create an instance", () => {
    const pipe = new SafeResourceUrlPipe(domSanitizerSpy);
    expect(pipe).toBeTruthy();
  });
});
