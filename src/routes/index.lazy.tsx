import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/home/Home.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});
