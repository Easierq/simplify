"use client";

import { BookOpen, LogOut, User } from "lucide-react";
import Link from "@/node_modules/next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export function UserDropDown() {
  const { data: session } = useSession();
  console.log(session?.user.image);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full h-8 w-8 bg-slate-200 overflow-hidden cursor-pointer">
          <img
            className="object-cover h-full w-full"
            // src={session?.user.image ?? undefined}     //also correct
            src={(session?.user.image as string) || "/noavatar.jpg"}
            alt="alt-pic"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/create-course">
            <DropdownMenuItem>
              <User />
              <span>My Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/create-course">
            <DropdownMenuItem>
              <BookOpen />
              <span>Browse courses</span>
            </DropdownMenuItem>
          </Link>
          {/* <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
