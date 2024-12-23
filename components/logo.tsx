import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="logo"
        width={124}
        height={32}
        className="min-w-[124px]"
      />
    </Link>
  );
};
