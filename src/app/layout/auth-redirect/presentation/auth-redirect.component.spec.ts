import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthRedirectComponent } from "./auth-redirect.component";
import SpyObj = jasmine.SpyObj;
import { AuthService } from "@core/service";
import createSpyObj = jasmine.createSpyObj;
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe("AuthRedirectComponent", () => {
  let component: AuthRedirectComponent;
  let fixture: ComponentFixture<AuthRedirectComponent>;
  let authServiceSpy: SpyObj<AuthService>;
  let routeSpy: SpyObj<ActivatedRoute>;
  let routerSpy: SpyObj<Router>;

  beforeEach(async(() => {
    const authServiceSpyObj = createSpyObj("AuthService", [
      "storeToken"
    ]) as AuthService;
    const mockFragment =
      "#access_token=fjasdkfjsdjfksdjkafjskf&token_type=Bearer&expires_in=203610&scope=identify+email";
    const routeSpyObj = createSpyObj("ActivatedRoute", [], {
      snapshot: { fragment: mockFragment }
    }) as ActivatedRoute;
    const routerSpyObj = createSpyObj("Router", ["navigate"]) as Router;
    void TestBed.configureTestingModule({
      declarations: [AuthRedirectComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: AuthService, useValue: authServiceSpyObj },
        { provide: ActivatedRoute, useValue: routeSpyObj },
        { provide: Router, useValue: routerSpyObj }
      ]
    }).compileComponents();
    authServiceSpy = TestBed.inject(AuthService) as SpyObj<AuthService>;
    routeSpy = TestBed.inject(ActivatedRoute) as SpyObj<ActivatedRoute>;
    routerSpy = TestBed.inject(Router) as SpyObj<Router>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
