import { generateOrderRef } from '@/lib/utils';
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/lib/storeHooks';
import { authSelector } from '@/store/slices/auth';
import { useSelector } from 'react-redux';

export type SignUpSuccessPageProps = {};

const SignUpSuccessPage: React.FC<SignUpSuccessPageProps> = () => {
	const router = useRouter()
	const { email } = useSelector(authSelector)

	const handleSubmit = () => {
		router.push('/')
	}
  return (
		<main className="w-full flex items-center py-5 justify-center">
			<div className="flex flex-col justify-center items-center px-3 md:px-0 w-full md:w-3/5 p-6">
				<p className="w-full text-2xl md:text-4xl uppercase font-bold text-center my-3">Thank you for your payment!</p>
				<p className="w-full px-3 md:px-0 md:w-3/4 text-center py-6">We have sent an email verification to <span className="font-bold">{email}</span> to verify your account.</p>
				<p className="w-full text-center mb-5"><span className="font-bold">Order Ref.</span> {generateOrderRef()} <span className="uppercase text-white bg-green-500 rounded-full py-2 px-4 mx-2 font-bold text-xs">Bonus</span> </p>
				<button className="my-5 rounded-3xl text-xs border bg-orange-400 py-2 text-white uppercase font-bold w-3/4 md:w-2/5" onClick={handleSubmit}>Return to home</button>
      </div>
    </main>
  );
};

export default SignUpSuccessPage;
