import type { Metadata } from "next";
import config from "../../../../payload.config";
import { generatePageMetadata, RootPage } from "@payloadcms/next/views";
import { importMap } from "../importMap";

type PageProps = {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export const generateMetadata = async ({ params, searchParams }: PageProps): Promise<Metadata> => {
  const normalizedParams = params.then(({ segments }) => ({
    segments: segments ?? [],
  }));

  return generatePageMetadata({
    config,
    params: normalizedParams,
    searchParams,
  });
};

export default async function Page({ params, searchParams }: PageProps) {
  const normalizedParams = params.then(({ segments }) => ({
    segments: segments ?? [],
  }));

  return RootPage({
    config,
    importMap,
    params: normalizedParams,
    searchParams,
  });
}
