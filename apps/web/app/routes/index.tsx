import { Input } from "~/components/Forms/Input";
import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/auth/login",
  });
};

export default function Index() {
  return (
    <div>
      <Input />
    </div>
  );
}
