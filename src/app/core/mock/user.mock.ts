import { User } from "@core/model";

const mockUser: User = new User();

mockUser.id = "000000000000000000";
mockUser.email = "mockUser@mock.com";
mockUser.mfaEnabled = false;
mockUser.discriminator = "0000";
mockUser.username = "BigMock";
mockUser.avatar = "reallylongavatarstringthatis35chars";
mockUser.flags = 0;
mockUser.publicFlags = 0;
mockUser.locale = "en-US";
mockUser.verified = true;

export { mockUser };
