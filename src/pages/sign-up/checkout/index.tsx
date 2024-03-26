import { getTotal } from '@/lib/utils';
import { authSelector } from '@/store/slices/auth';
import { useRouter } from 'next/router';
import React from 'react';
import {
	useSelector,
} from 'react-redux';

export type SignUpCheckoutPageProps = {};

const SignUpCheckoutPage: React.FC<SignUpCheckoutPageProps> = () => {
	const router = useRouter();
	const { selection } = useSelector(authSelector);

	const handleSubmit = () => {
		router.push('/sign-up/success')
	}
	return (
		<main className="w-full flex items-center py-5 justify-center">
			<div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
				<h1 className="font-bold uppercase text-2xl md:text-4xl my-6 text-center">Checkout & Payment</h1>
				<div className="flex flex-col w-full px-2 md:px-0 md:w-3/5 mt-6">
					{Object.keys(selection).map(key => {
						return (
							<div key={key} className="flex justify-between items-start border-b border-gray-300 my-6">
									<div className="flex flex-col pb-5 text-sm">
										<p className="uppercase font-bold">Growth Faculty - {key}</p>
										<p className="text-xs"><span className="font-bold">Qty:</span> {selection[key].qty}</p>
									</div>
								<div>
										<p className="uppercase font-bold text-orange-500 text-xl">${selection[key].cost}</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex justify-between px-3 md:px-0 w-full md:w-3/5">
					<p className="font-bold uppercase">Total cost</p>
					<p className="font-bold text-2xl text-orange-500">${getTotal(selection)} AUD</p>
				</div>
				<div className="flex my-6 w-full justify-center items-center self-center">
					<button
						className="my-5 rounded-3xl text-xs border bg-orange-400 py-2 text-white uppercase font-bold w-3/4 md:w-2/5"
						onClick={handleSubmit}
					>
						Confirm & Pay
					</button>
				</div>

      </div>
    </main>
	);
};

export default SignUpCheckoutPage;
