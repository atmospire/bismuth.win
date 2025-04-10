import "@mantine/core/styles.css";
import "./globals.scss";

import React, { type ReactNode } from "react";
import type { Metadata } from "next";
import { mantineHtmlProps } from "@mantine/core";

import Providers from "./Providers";

export const metadata: Metadata = {
    metadataBase: new URL("https://atmospire.dev"),
    title: "Atmospire",
    description: "Creating and developing all sorts of stuff.",
    icons: {
        apple: "/favicon/apple-touch-icon.png",
        icon: "/favicon/favicon.ico",
    },
    manifest: "/favicon/site.webmanifest",
    openGraph: {
        images: "/favicon/android-chrome-512x512.png",
    },
    twitter: {
        images: "",
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
