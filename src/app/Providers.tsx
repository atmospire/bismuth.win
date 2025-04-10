"use client";

import { type ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

import { theme } from "@/theme";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <>
            <MantineProvider defaultColorScheme={"dark"} theme={theme}>
                {children}
            </MantineProvider>
        </>
    );
}
