import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { login } from "./api/auth";
import { sessionStorage } from "~/services/session.server";

export let authenticator = new Authenticator<string>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email")?.toString() ?? "";
    let password = form.get("password")?.toString() ?? "";
    let response = await login(email, password);
    return response.token;
  }),
  "user-pass-token"
);
