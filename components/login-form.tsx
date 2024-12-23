"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { signIn } from "next-auth/react";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="py-8 border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-lg md:text-xl font-semibold">
            Sign in to Simplify
          </CardTitle>
          {/* <CardDescription>
            Login with your Apple or Google account
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* <form> */}
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full font-semibold border-2 border-black dark:border-white"
                onClick={() => signIn("google")}
              >
                <Image
                  src="/google.png"
                  alt="google-img"
                  width={14}
                  height={14}
                  className="mr-1 h-[14px] w-[14px]"
                />
                Continue with Google
              </Button>
              {/* <Button variant="outline" className="w-full">
                  <Image
                    src="/google.png"
                    alt="google-img"
                    width={14}
                    height={14}
                    className="mr-2 h-[14px] w-[14px]"
                  />
                  Login with Facebook
                </Button> */}
            </div>
          </div>
          {/* </form> */}
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
