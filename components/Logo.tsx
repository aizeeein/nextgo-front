"use client";
import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Image from "next/image";
import alii from "@/public/alii.jpg";
import Link from "next/link";
import React from "react";

function Logo({
  fontSize = "2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn("text-2xl font-extrabold flex items-center", fontSize)}
    >
      <Image
        src={"KOMIDA-02.svg"}
        width={20}
        height={20}
        alt="logo"
        className="size-12 bg-transparent"
      />

      <div>
        <span className="bg-gradient-to-r from-emerald-500 to bg-emerald-600 bg-clip-text text-transparent">
          KOMIDA
        </span>
        <span className="text-stone-700 dark:text-stone-300">Task</span>
      </div>
    </Link>
  );
}

export default Logo;
