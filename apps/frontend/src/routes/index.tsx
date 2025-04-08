import { useUser } from "@/hooks/queries/useUser";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data } = useUser();
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {JSON.stringify(data)}
    </div>
  );
}
