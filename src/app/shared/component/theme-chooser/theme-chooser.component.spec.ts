import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ThemeChooserComponent } from "@shared/component";

describe("ThemeChooserComponent", () => {
  let component: ThemeChooserComponent;
  let fixture: ComponentFixture<ThemeChooserComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ThemeChooserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
