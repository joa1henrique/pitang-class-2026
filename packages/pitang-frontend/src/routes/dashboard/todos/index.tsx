import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/todos/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Todos page</div>;
}
