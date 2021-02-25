import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { mockUser } from "@core/mock";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let displayNameDebugElement: DebugElement;
  let displayNameElement: HTMLElement;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    displayNameDebugElement = fixture.debugElement.query(
      By.css(".nav-icon-text")
    );
    displayNameElement = displayNameDebugElement.nativeElement as HTMLElement;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display display name", () => {
    const expectedDisplayName = mockUser.displayName;
    expect(displayNameElement.textContent).toContain(expectedDisplayName);
  });
});
