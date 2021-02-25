import { TestBed } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { AuthService } from "@core/service";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let authServiceSpy: SpyObj<AuthService>;
  let router: Router;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const authServiceSpyObj = createSpyObj("AuthService", ["isValidToken$"]);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      providers: [{ provide: AuthService, useValue: authServiceSpyObj }]
    });
    guard = TestBed.inject(AuthGuard);
    authServiceSpy = TestBed.inject(AuthService) as SpyObj<AuthService>;
    router = TestBed.inject(Router);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
