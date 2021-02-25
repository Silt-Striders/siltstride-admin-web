import { TestBed } from "@angular/core/testing";

import { TokenInterceptor } from "./token.interceptor";
import { AuthService } from "@core/service";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe("TokenInterceptor", () => {
  let tokenInterceptor: TokenInterceptor;
  let authServiceSpy: SpyObj<AuthService>;

  beforeEach(() => {
    const authServiceSpyObj = createSpyObj(
      "AuthService",
      [],
      ["token$"]
    ) as AuthService;
    TestBed.configureTestingModule({
      providers: [
        TokenInterceptor,
        { provide: AuthService, useValue: authServiceSpyObj }
      ]
    });
    tokenInterceptor = TestBed.inject(TokenInterceptor);
    authServiceSpy = TestBed.inject(AuthService) as SpyObj<AuthService>;
  });

  it("should be created", () => {
    expect(tokenInterceptor).toBeTruthy();
  });
});
