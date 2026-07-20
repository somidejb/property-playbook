"use client";

import dynamic from "next/dynamic";

export const ServiceMap = dynamic(() => import("./service-map").then((m) => m.ServiceMap), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-plum-900/10" />,
});
