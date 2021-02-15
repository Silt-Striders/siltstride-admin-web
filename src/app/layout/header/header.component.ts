import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core/http/auth.service";
import { Observable } from "rxjs";
import { User } from "@core/models/user.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public get user(): Observable<User> {
    return this.authService.user;
  }

  public get id(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.id));
  }

  public get username(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.username));
  }

  public get discriminator(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.discriminator));
  }

  public get avatarUrl(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.avatarUrl));
  }

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {}
}
