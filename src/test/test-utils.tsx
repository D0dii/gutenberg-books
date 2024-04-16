import {
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";

function createTestRouter(ui: React.ReactElement) {
  const rootRoute = createRootRouteWithContext<{}>()({
    component: Outlet,
  });

  const uiRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => ui,
  });

  const routeTree = rootRoute.addChildren([uiRoute]);

  return createRouter({
    history: createHashHistory(),
    routeTree: routeTree,
  });
}

function renderWithClient(ui: React.ReactElement) {
  const router = createTestRouter(ui);

  return render(<RouterProvider router={router} />);
}

export { renderWithClient as render };
