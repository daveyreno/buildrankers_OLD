import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Settings, User, } from "lucide-react";

import createClient from '@/lib/supabase-server';
import SignOut from "../app/auth/signout";

export async function SiteHeader() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />

            {user !== null && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>

                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>

                    <Link href='/u/daveyreno'>
                      <DropdownMenuItem>
                        <User className="w-4 h-4 mr-2" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                    </Link>


                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <SignOut />

                </DropdownMenuContent>
              </DropdownMenu>

            ) : (
              <div className='flex gap-2'>
                <Link href="/sign-in">
                  <Button variant="outline">Log In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}

          </nav>
        </div>
      </div>
    </header>
  );
}