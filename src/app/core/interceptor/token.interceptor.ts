import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "@core/http/auth.service";
import { concatMap, map, tap } from "rxjs/operators";
import { TokenWrapper } from "@core/model/token.model";

/**
 * Interceptor used to inject {@link TokenWrapper#accessToken} in the
 * Authorization header of outgoing requests
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private authService: AuthService) {}

  /**
   * Interceptor method adding Authorization header to outgoing requests
   * @param {HttpRequest<unknown>} request Intercepted request
   * @param {HttpHandler} next Next event to occur
   * @returns {Observable<HttpEvent<unknown>>} Observable containing the
   * outgoing request handler event
   */
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const source = this.authService.token;
    const inner = source.pipe(
      map((token: TokenWrapper) => token.accessToken),
      map((accessToken: string) =>
        request.headers.append("Authorization", `Bearer ${accessToken}`)
      ),
      map((httpHeaders: HttpHeaders) =>
        request.clone({ headers: httpHeaders })
      ),
      concatMap((clone: HttpRequest<unknown>) => next.handle(clone))
    );
    return inner;
  }
}
