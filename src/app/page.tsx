"use client";

import { Container, Flex, Image, rem, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconCat, IconCloudRain, IconQuestionMark, IconSpiral } from "@tabler/icons-react";

import { Social } from "@/components";

export default function Home() {
    return (
        <Container fluid h={"100dvh"} w={"100%"} px={rem(250)}>
            <Image
                pos={"absolute"}
                src={"/img/atmospire-gray.svg"}
                alt={"atmospire logo"}
                w={"50vh"}
                top={"25vh"}
                right={"15vw"}
                opacity={0.025}
            />
            <Flex w={"100%"} h={"100%"} justify={"space-between"} align={"center"}>
                <Flex direction={"column"} gap={"sm"}>
                    <Title size={rem(75)}>Atmospire</Title>
                    <Text size={rem(25)}>We are a small group of people</Text>
                    <Text size={rem(25)}>creating and developing all sorts of stuff</Text>
                    <Flex gap={"sm"} mt={rem(25)}>
                        {/* Spot for socials */}
                        <Social href="https://github.com/atmospire" Icon={IconBrandGithub} />
                        <Social Icon={IconCat} disabled />
                        <Social Icon={IconSpiral} disabled />
                        <Social Icon={IconQuestionMark} disabled />
                        <Social Icon={IconCloudRain} disabled />
                    </Flex>
                </Flex>
                <Flex direction={"column"}>{/* Spot for future projects */}</Flex>
            </Flex>
        </Container>
    );
}
