import type { ReactNode } from "react";
import config from "../../payload.config";
import { RootLayout, handleServerFunctions, metadata } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import { importMap } from "./admin/importMap.js";

type LayoutProps = {
  children: ReactNode;
};

export { metadata };

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";

  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

export default function Layout({ children }: LayoutProps) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
