"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, UsersIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";

import { cn } from "@/lib/utils";

const router = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    aciveIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    aciveIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    aciveIcon: Settings,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    aciveIcon: UsersIcon,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {router.map((item) => {
        const isActive = pathname === item.href;
        const Icon = isActive ? item.aciveIcon : item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};