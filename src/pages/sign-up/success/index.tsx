import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/lib/storeHooks';
import { logOut } from '@/store/slices/auth';

export type SignUpSuccessPageProps = {};

const SignUpSuccessPage: React.FC<SignUpSuccessPageProps> = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const handleLogOut = () => {
		dispatch(logOut())
		router.replace('/')
	}
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
				<button className="px-2 py-8" onClick={handleLogOut}>LogOut</button>
      </div>
    </main>
  );
};

export default SignUpSuccessPage;
