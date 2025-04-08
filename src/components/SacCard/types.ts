import { ReactNode } from "react";

export interface SacCardProps {
    icon: string;
    title: string;
    isOnline ?: boolean;
    children ?: ReactNode;
}