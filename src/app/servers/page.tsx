"use client";

import Link from "next/link";
import { Button, Container, Flex, Image, rem, Title } from "@mantine/core";

import { Routes } from "@/constants";

export default function Home() {
    return (
        <>
            <Flex pos={"absolute"} w={"100%"} h={"100%"} style={{ flexGrow: 1 }} align={"center"} justify={"center"}>
                <Image src={"/img/atmospire-gray.svg"} alt={"atmospire logo"} w={"95vh"} opacity={0.025} />
            </Flex>
            <Container fluid h={"100dvh"} w={"100%"}>
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"} direction={"column"} gap={"xl"}>
                    <Title size={rem(75)}>servers page work in progress teehee</Title>
                    <Button size="xl" href={Routes.HOME_PAGE} component={Link}>
                        go BACK
                    </Button>
                </Flex>
            </Container>
        </>
    );
}
