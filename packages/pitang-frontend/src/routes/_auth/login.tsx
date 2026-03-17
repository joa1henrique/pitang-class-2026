import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { loggedUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser) {
      navigate({ to: "/dashboard" });
    }
  }, [loggedUser, navigate]);

  return <LoginForm />;
}
