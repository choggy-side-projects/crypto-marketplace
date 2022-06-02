import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { Form } from "@remix-run/react";
import { Input } from "~/components/Forms/Input";
import { authenticator } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("user-pass-token", request, {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export default function Login() {
  return (
    <Form method="post">
      <Input type="email" name="email" required />
      <Input
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <button>Sign In</button>
    </Form>
  );
}
