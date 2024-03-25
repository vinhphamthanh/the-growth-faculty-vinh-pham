import { useRouter } from "next/router";
import React from "react";

export type HowManyMembershipsPageProps = {};

const SignUpHowManyMembershipsPage: React.FC<
  HowManyMembershipsPageProps
> = () => {
  const router = useRouter();

  return (
    <main>
      {/* TODO: This could be removed */}
      <div className="flex flex-col bg-gray-900 w-full min-h-screen text-white pt-12 items-center">
        <h1 className="font-semibold text-6xl text-center">
          You have successfully navigated!
        </h1>
        <button
          className="text-orange-400 underline mt-8"
          onClick={() => router.push("/sign-up/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
};

export default SignUpHowManyMembershipsPage;
