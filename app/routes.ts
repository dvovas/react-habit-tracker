import type { RouteObject } from "react-router";
import { replace } from "react-router";

import { Route } from "@/shared/config";

import { AppLayout } from "./layout/AppLayout.tsx";

export const routes: RouteObject[] = [
  {
    Component: AppLayout,
    children: [],
  },
];
