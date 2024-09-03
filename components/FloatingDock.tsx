import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconDeviceDesktopCode,
  IconExchange,
  IconHome,
  IconInfoCircle,
  IconMail,
  IconMap,
  IconNewSection,
  IconRocket,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="sm:scale-125 h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconInfoCircle className="sm:scale-125 h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconDeviceDesktopCode className="sm:scale-125 h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    // {
    //   title: "Testinomial",
    //   icon: (
    //     <IconBrandX className="sm:scale-125 h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/testinomial",
    // },
    {
      title: "Approach",
      icon: (
        <IconRocket className="sm:scale-125 h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#approach",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="sm:scale-125 h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
