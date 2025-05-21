"use client";

import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card, Tooltip } from "@mantine/core";
import { Icon, IconProps } from "@tabler/icons-react";

import styles from "./Social.module.scss";

interface SocialProps {
    name?: string;
    href?: string;
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    disabled?: boolean;
}

export function Social({ name, href, Icon, disabled }: SocialProps) {
    return (
        <Tooltip label={name} position="top" withArrow openDelay={250} closeDelay={100} disabled={disabled || !name}>
            <Card
                withBorder
                onClick={() => {
                    if (!disabled) {
                        window.open(href, "_blank");
                    }
                }}
                className={disabled ? styles.socialDisabled : styles.social}
            >
                <Icon size={30} />
            </Card>
        </Tooltip>
    );
}
