 "use client";

 
import { useConvexAuth as useAuth } from "convex/react";
import { ArrowRight as RightArrowIcon } from "lucide-react";
import { SignInButton as AuthSignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button as PrimaryButton } from "@/components/ui/button";
import { Spinner as LoadingSpinner } from "@/components/spinner";

export const IntroHeading = () => {
  const { isAuthenticated: userIsAuthenticated, isLoading: userIsLoading } = useAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Unite Your Ideas, Papers, & Ambitions. Welcome to <span className="underline">NoteTaker</span> — Your Hub for Everything.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        NoteTaker — Harmonizing Ideas, Files, & Objectives for Uninterrupted Productivity. Glad to Have You.
      </h3>
      {userIsLoading && (
        <div className="w-full flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      )}
      {userIsAuthenticated && !userIsLoading && (
        <PrimaryButton asChild>
          <Link href="/documents">
            Dive into NoteTaker
            <RightArrowIcon className="h-4 w-4 ml-2" />
          </Link>
        </PrimaryButton>
      )}
      {!userIsAuthenticated && !userIsLoading && (
        <AuthSignInButton mode="modal">
          <PrimaryButton>
            Start with NoteTaker for Free
            <RightArrowIcon className="h-4 w-4 ml-2" />
          </PrimaryButton>
        </AuthSignInButton>
      )}
    </div>
  )
}
