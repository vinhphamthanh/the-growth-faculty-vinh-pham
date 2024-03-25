import { useRouter } from "next/router";
import React from "react";

export type SignUpCheckoutPageProps = {};

const SignUpCheckoutPage: React.FC<SignUpCheckoutPageProps> = () => {
  const router = useRouter();

  return (
    <main>
      {/* TODO: This could be removed */}
      <div className="flex flex-col bg-gray-900 w-full min-h-screen text-white pt-12 items-center">
        <h1 className="font-semibold text-6xl text-center">
          This is another navigation
        </h1>
        <button
          className="text-orange-400 underline mt-8"
          onClick={() => router.push("/sign-up/success")}
        >
          Confirm and Submit
        </button>
      </div>
    </main>
  );
};

export default SignUpCheckoutPage;
