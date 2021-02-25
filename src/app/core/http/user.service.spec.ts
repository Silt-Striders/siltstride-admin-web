import { TestBed } from "@angular/core/testing";

import { UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe("UserService", () => {
  let service: UserService;

  /*
   * Spying on HttpClient instead of using HttpClientTestingModule because
   * we only use "get"
   */
  let httpSpy: SpyObj<HttpClient>;

  beforeEach(() => {
    const httpSpyObj = createSpyObj("HttpClient", ["get"]) as HttpClient;
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpSpyObj }]
    });
    service = TestBed.inject(UserService);
    httpSpy = TestBed.inject(HttpClient) as SpyObj<HttpClient>;
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
