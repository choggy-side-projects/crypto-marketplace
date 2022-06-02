import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { Form } from "@remix-run/react";
import { Input } from "~/components/Forms/Input";
import { authenticator } from "~/services/auth.server";
import { redirect } from "@remix-run/node";
import { register } from "~/services/api/auth";

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const form = await request.formData();
    return await register(
      form.get("email")?.toString() ?? "",
      form.get("password")?.toString() ?? ""
    ).then(() => {
      return redirect("/auth/login");
    });
  }

  return null;
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
