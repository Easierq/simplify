import type { Metadata } from "next";

import Footer from "@/components/footer";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Simplify | Your way to success.",
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
        <Navbar />

        <main className="flex-1 px-[5%] md:px-[7%]">{children}</main>
      </div>

      {/* <SiteFooter /> */}
      <Footer />
    </>
  );
}
