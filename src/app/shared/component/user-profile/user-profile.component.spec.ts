import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserProfileComponent } from "@shared/component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { mockUser } from "@core/mock";

describe("UserProfileComponent", () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let usernameDebugElement: DebugElement;
  let usernameElement: HTMLElement;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [UserProfileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    // Find the card-component containing the username
    usernameDebugElement = fixture.debugElement.query(
      By.css(".card-media-title")
    );
    usernameElement = usernameDebugElement.nativeElement as HTMLElement;
    // Simulate the parent setting the input property with that user
    component.user = mockUser;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display username", () => {
    const expectedUsername = mockUser.username;
    expect(usernameElement.textContent).toContain(expectedUsername);
  });
});
