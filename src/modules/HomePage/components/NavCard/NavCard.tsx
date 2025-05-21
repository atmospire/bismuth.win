"use client";

import { ForwardRefExoticComponent, RefAttributes } from "react";
import { useRouter } from "next/navigation";
import { Card, Flex, rem, Text } from "@mantine/core";
import { Icon, IconProps } from "@tabler/icons-react";

import styles from "./NavCard.module.scss";

export interface NavCardProps {
    name: string;
    description: string;
    href: string;
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    disabled?: boolean;
}

export function NavCard({ name, description, href, Icon, disabled }: NavCardProps) {
    const router = useRouter();

    return (
        <Card
            onClick={() => {
                if (!disabled) {
                    router.push(href);
                }
            }}
            className={disabled ? styles.cardDisabled : styles.card}
            w={rem(500)}
        >
            <Flex align={"center"} gap={"sm"}>
                <Card
                    className={disabled ? styles.iconDisabled : styles.icon}
                    onClick={() => {
                        if (!disabled) {
                            router.push(href);
                        }
                    }}
                >
                    <Icon size={35} />
                </Card>
                <Text size={rem(30)} fw={"500"}>
                    {name}
                </Text>
            </Flex>
            {description && <Text mt={"sm"}>{description}</Text>}
        </Card>
    );
}
