import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild("loginWrapper")
  private loginWrapper: ElementRef<HTMLDivElement>;

  constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    /*
     * Used this Stack Overflow post to determine parallax logic:
     * https://stackoverflow.com/questions/56025761/how-do-parallax-mouse-move-effect-pure-javascript
     */
    const loginDiv = this.loginWrapper.nativeElement;
    loginDiv.addEventListener("mousemove", (event: MouseEvent) => {
      const offsetWidth = loginDiv.offsetWidth;
      const offsetHeight = loginDiv.offsetHeight;
      loginDiv.style.setProperty(
        "--mouseX",
        (event.clientX * 25) / offsetWidth + "%"
      );
      loginDiv.style.setProperty(
        "--mouseY",
        (event.clientY * 50) / offsetHeight + "%"
      );
    });
  }
}
