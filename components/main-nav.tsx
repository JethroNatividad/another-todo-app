"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold sm:inline-block">
          Another Todo App
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/todos"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/todos" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Todos
        </Link>
      </nav>
    </div>
  );
}
