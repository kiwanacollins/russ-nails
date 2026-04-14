import type { ReactNode } from "react";
import config from "../../payload.config";
import { RootLayout, handleServerFunctions, metadata } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import { importMap } from "./admin/importMap";

type LayoutProps = {
  children: ReactNode;
};

export { metadata };

export default function Layout({ children }: LayoutProps) {
  const serverFunction: ServerFunctionClient = (args) =>
    handleServerFunctions({
      ...args,
      config,
      importMap,
    });

  return RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  });
}
