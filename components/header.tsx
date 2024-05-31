"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { ModeToggle } from "./mood-toggle";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 container mx-auto">
      <div className="">
        <h3 className="font-bold text-2xl tracking-tight text-primary-foreground">
          Doc<span className="text-primary ">AI</span>
        </h3>
      </div>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <div className="flex items-center gap-4">
          <UserButton />
          <ModeToggle />
        </div>
      </Authenticated>
    </div>
  );
};
export default Header;
