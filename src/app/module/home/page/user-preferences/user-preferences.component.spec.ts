import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserPreferencesComponent } from "./user-preferences.component";
import SpyObj = jasmine.SpyObj;
import { ActivatedRoute } from "@angular/router";
import createSpyObj = jasmine.createSpyObj;
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { mockUser } from "@core/mock";
import { ThemeService } from "@core/service";
import { Theme } from "@core/model";

describe("UserPreferencesComponent", () => {
  let component: UserPreferencesComponent;
  let fixture: ComponentFixture<UserPreferencesComponent>;
  let routeSpy: SpyObj<ActivatedRoute>;
  let themeServiceSpy: SpyObj<ThemeService>;

  beforeEach(async(() => {
    const routeSpyObj = createSpyObj("ActivatedRoute", [], {
      data: of({ user: mockUser })
    }) as ActivatedRoute;
    const themeServiceSpyObj = createSpyObj("ThemeService", ["setTheme"], {
      theme$: of(Theme.Dark)
    }) as ThemeService;
    void TestBed.configureTestingModule({
      declarations: [UserPreferencesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: routeSpyObj },
        { provide: ThemeService, useValue: themeServiceSpyObj }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    routeSpy = TestBed.inject(ActivatedRoute) as SpyObj<ActivatedRoute>;
    themeServiceSpy = TestBed.inject(ThemeService) as SpyObj<ThemeService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
