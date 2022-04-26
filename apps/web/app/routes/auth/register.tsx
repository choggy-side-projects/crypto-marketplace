import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";

import { Form } from "@remix-run/react";
import { Input } from "@crypto-marketplace/ui";
import { authenticator } from "~/services/auth.server";
import { register } from "~/services/api/auth";

export let action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const form = await request.formData();
    await register(
      form.get("email")?.toString() ?? "",
      form.get("password")?.toString() ?? ""
    ).then(() => {
      redirect("/auth/login");
    });
  }
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
