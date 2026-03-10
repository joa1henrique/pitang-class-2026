import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <header>Header...</header>

      <main>
        <Outlet context={{ login: "kevenleone" }} />
      </main>
    </div>
  );
}
