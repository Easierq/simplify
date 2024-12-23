// import { cn } from "@/lib/utils";
import type { Metadata } from "next";
// import Link from "@/node_modules/next/link";

// import { MainNav } from "@/components/main-nav";
// import { buttonVariants } from "@/components/ui/button";
// import { ModeToggle } from "@/components/toggle";
// import { SiteFooter } from "@/components/site-footer";
// import { MobileToggle } from "@/components/mobile-toggle";
// import { SearchToggle } from "@/components/search-toggle";
// import MobileNav from "@/components/mobile-nav";
// import Footer from "@/components/footer";
// import { UserDropDown } from "@/components/user-drop-down";
// import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Simplify | Your way.",
  description: "Simplifying your way to the top",
};

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* <header className="h-14 sticky flex items-center top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-auto items-center justify-between w-full px-[5%] md:px-[7%]">
            <MobileNav />
            <MainNav />
            <nav>
              <div className="md:flex">
                <div className="flex items-center gap-2 md:gap-5">
                 
                  <Link
                    href="/create-course"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "px-2 lg:px-3 h-8 font-semibold hidden md:flex items-center justify-center gap-1 border-2 border-slate-900 dark:border-slate-200"
                    )}
                  >
                    <Plus className="w-4 h-4 font-bold mb-[1px]" />
                    <p className="hidden lg:block">Create course</p>
                  </Link>
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "px-4 h-8 font-semibold"
                    )}
                  >
                    Get Started
                  </Link>
                  <UserDropDown />
                  <ModeToggle />
                  <MobileToggle />
                </div>
              </div>
            </nav>
          </div>
        </header> */}
        {/* <HeroPage /> */}

        <main className="flex-1 px-[5%] md:px-[7%] bg-white dark:bg-card">
          {children}
        </main>
      </div>

      {/* <SiteFooter /> */}
      {/* <Footer /> */}
    </>
  );
}
