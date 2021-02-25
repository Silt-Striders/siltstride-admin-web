import { TokenWrapper } from "@core/model";

const mockToken: TokenWrapper = new TokenWrapper();

mockToken.accessToken = "afakeaccesstoken";
mockToken.tokenType = "Bearer";
mockToken.expiresIn = new Date();
mockToken.scope = new Array<string>("identify", "email");

export { mockToken };
