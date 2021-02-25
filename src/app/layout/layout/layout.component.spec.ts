import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutComponent } from "./layout.component";
import { of } from "rxjs";
import { mockUser } from "@core/mock";
import { ActivatedRoute } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe("LayoutComponent", () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let routeSpy: SpyObj<ActivatedRoute>;

  beforeEach(async(() => {
    const routeSpyObj = createSpyObj("ActivatedRoute", [], {
      data: of({ user: mockUser })
    }) as ActivatedRoute;
    void TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers: [{ provide: ActivatedRoute, useValue: routeSpyObj }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    routeSpy = TestBed.inject(ActivatedRoute) as SpyObj<ActivatedRoute>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
