"use client";

import { Container, Flex, Image, rem, Text, Title } from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandSteam,
    IconCat,
    IconCloudRain,
    IconCode,
    IconDroplet,
    IconPlayBasketball,
    IconQuestionMark,
    IconServer2,
    IconSpiral,
} from "@tabler/icons-react";

import { Routes } from "@/constants";
import { NavCard, NavCardProps, Social } from "@/modules/HomePage";

const links: NavCardProps[] = [
    {
        name: "Projects",
        description:
            "We have many projects at Atmospire ranging from software projects, to projects revolving around managing our server and much more.",
        href: Routes.PROJECTS,
        Icon: IconCode,
        disabled: true,
    },
    {
        name: "Servers",
        description:
            "Atmospire hosts many game servers, primarily for Source Engine games like Team Fortress 2. But we dabble in other games too.",
        href: Routes.SERVERS,
        Icon: IconServer2,
    },
    {
        name: "The Team",
        description: "",
        href: Routes.TEAM,
        Icon: IconPlayBasketball,
        disabled: true,
    },
    {
        name: "About Atmospire",
        description: "",
        href: Routes.ABOUT,
        Icon: IconCloudRain,
        disabled: true,
    },
];

export default function Home() {
    return (
        <>
            <Flex pos={"absolute"} w={"100%"} h={"100%"} style={{ flexGrow: 1 }} align={"center"} justify={"center"}>
                <Image src={"/img/atmospire-gray.svg"} alt={"atmospire logo"} w={"95vh"} opacity={0.025} />
            </Flex>
            <Container fluid h={"100dvh"} w={"100%"} pl={rem(200)} pr={rem(100)}>
                <Flex w={"100%"} h={"100%"} justify={"space-between"} align={"center"}>
                    <Flex direction={"column"} gap={"sm"}>
                        <Title size={rem(75)}>Atmospire</Title>
                        <Text size={rem(25)}>We are a small group of people</Text>
                        <Text size={rem(25)}>creating and developing all sorts of stuff</Text>
                        <Flex gap={"sm"} mt={rem(25)}>
                            {/* Spot for socials */}
                            <Social href="https://steamcommunity.com/groups/atmospire" Icon={IconBrandSteam} />
                            <Social href="https://github.com/atmospire" Icon={IconBrandGithub} />
                            <Social href="https://cat.basil.florist" Icon={IconCat} />
                            <Social Icon={IconSpiral} disabled />
                            <Social href="https://www.youtube.com/watch?v=fq3abPnEEGE" Icon={IconQuestionMark} />
                            <Social Icon={IconDroplet} disabled />
                        </Flex>
                    </Flex>
                    {/* Spot for future projects */}
                    <Flex direction={"column"} gap={"lg"}>
                        {links.map((link) => (
                            <NavCard
                                key={link.href}
                                name={link.name}
                                description={link.description}
                                href={link.href}
                                Icon={link.Icon}
                                disabled={link.disabled}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </>
    );
}
