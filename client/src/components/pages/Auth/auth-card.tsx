import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

const AuthCard = () => {
  return (
    <Card className="w-full max-w-md border-neutral-800 bg-neutral-900 text-white">
      <CardContent className="space-y-5 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Get Started</h1>

          <p className="text-sm text-neutral-400">
            Create your account to continue
          </p>
        </div>

        <div className="space-y-4">
          <Input type="email" placeholder="Email" className="h-11" />

          <Input type="password" placeholder="Password" className="h-11" />

          <Button variant="secondary" className="h-11 w-full">Sign Up</Button>
        </div>

        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-neutral-500">OR</span>
          <Separator className="flex-1" />
        </div>

        <Button variant="outline" className="h-11 w-full text-black">
            <FcGoogle />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <button className="font-medium text-white hover:underline">
            Login
          </button>
        </p>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
