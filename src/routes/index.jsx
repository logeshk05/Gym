import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitZone Gym & Fitness — Train Beyond Limits" },
      {
        name: "description",
        content:
          "Premium gym & fitness centre in Coimbatore. State-of-the-art equipment, expert trainers, and 50+ weekly classes.",
      },
      { property: "og:title", content: "FitZone Gym & Fitness — Train Beyond Limits" },
      {
        property: "og:description",
        content: "Premium gym & fitness centre in Coimbatore. Start your free trial today.",
      },
    ],
  }),
  component: Home,
});
