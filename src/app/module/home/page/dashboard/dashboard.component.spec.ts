import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import SpyObj = jasmine.SpyObj;
import { SafeResourceUrlPipe } from "@shared/pipe";
import createSpyObj = jasmine.createSpyObj;

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let safeResourceUrlPipeSpy: SpyObj<SafeResourceUrlPipe>;

  beforeEach(async(() => {
    const safeResourceUrlPipeSpyOby = createSpyObj("SafeResourceUrlPipe", [
      "transform"
    ]) as SafeResourceUrlPipe;
    void TestBed.configureTestingModule({
      declarations: [DashboardComponent, SafeResourceUrlPipe],
      providers: [
        { provide: SafeResourceUrlPipe, useValue: safeResourceUrlPipeSpyOby }
      ]
    }).compileComponents();
    safeResourceUrlPipeSpy = TestBed.inject(
      SafeResourceUrlPipe
    ) as SpyObj<SafeResourceUrlPipe>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
