import Link from "next/link";
import React from "react";

export type SignUpSuccessPageProps = {};

const SignUpSuccessPage: React.FC<SignUpSuccessPageProps> = () => {
  return (
    <main>
      {/* TODO: This could be removed */}
      <div className="flex flex-col bg-gray-900 w-full min-h-screen text-white pt-12 items-center">
        <h1 className="font-semibold text-6xl text-center">
          This is yet another navigation
        </h1>
        <Link className="text-orange-400 underline mt-8" href="/">
          Go to Home
        </Link>
      </div>
    </main>
  );
};

export default SignUpSuccessPage;
