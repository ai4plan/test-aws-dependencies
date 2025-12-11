import { signUp } from "aws-amplify/auth";

await signUp({
  username: "jdoe",
  password: "mysecurerandompassword#123",
  options: {
    userAttributes: {
      email: "me@domain.com",
      phone_number: "+12128601234", // E.164 number convention
      given_name: "Jane",
      family_name: "Doe",
      nickname: "Jane",
    },
  },
});
