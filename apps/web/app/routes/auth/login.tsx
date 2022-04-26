import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { Form } from "@remix-run/react";
import { Input } from "@crypto-marketplace/ui";
import { authenticator } from "~/services/auth.server";

export let action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("user-pass-token", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};

export let loader: LoaderFunction = async ({ request }) => {
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
