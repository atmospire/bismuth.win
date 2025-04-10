"use client";

import { createTheme, type MantineColorsTuple } from "@mantine/core";

const colors: MantineColorsTuple = [
    "#ffe9f3",
    "#fed2e0",
    "#f8a2be",
    "#f4709a",
    "#f0467c",
    "#ee2c69",
    "#ee1d5f",
    "#d40f4f",
    "#be0446",
    "#a7003b",
];

export const theme = createTheme({
    /* Put your mantine theme override here */
    colors: {
        primary: colors,
    },
    primaryColor: "primary",
    other: {
        /* Put your other theme overrides here */
    },
});
