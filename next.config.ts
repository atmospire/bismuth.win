import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    experimental: {
        optimizePackageImports: ["@mantine/core"],
    },
    sassOptions: {
        implementation: "sass-embedded",
        additionalData: `@use "${path.join(process.cwd(), "_mantine").replace(/\\/g, "/")}" as mantine;`,
    },
};

export default nextConfig;
