import { getTotal } from '@/lib/utils';
import { confirm } from '@/store/slices/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Data from '../../../lib/mock.json';

const MEMS = {
	CLUB: 'Club',
	PREM: 'Premium',
};

export type HowManyMembershipsPageProps = {};

const SignUpHowManyMembershipsPage: React.FC<
	HowManyMembershipsPageProps
> = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [selection, setSelection] = useState({
		[MEMS.CLUB]: { qty: 0, cost: 0 },
		[MEMS.PREM]: { qty: 0, cost: 0 },
	});

	const handleSelectMem = (e: any) => {
		const { target: { value, name } } = e;
		const numVal = Number(value);
		const type = Data.find(item => item.plan_id === name);

		if (!value) {
			setSelection(prevState => {
				return ({
					...prevState,
					[name]: { qty: 0, cost: 0 },
				});
			});
		}
		type?.tiered_prices?.map(item => {
			if (numVal >= item.starting_unit && numVal <= item.ending_unit) {
				setSelection((prevState) => ({
					...prevState,
					[name]: { qty: numVal, cost: numVal * item.price },
				}));
			}
		});
	};

	const handleSelect = (event: any) => {
		event.preventDefault();
		dispatch(confirm(selection));
		router.push('/sign-up/checkout');
	};

	const total = getTotal(selection);
	const disableNext = total === 0;

	return (
		<main className="w-full flex items-center py-5 justify-center">
			<form className="flex-col justify-center items-center w-full md:w-2/5 p-6">
				<p className="w-full px-6 md:px-0 text-xl md:text-3xl uppercase font-bold text-center">How many memberships do you need?</p>
				<div className="w-full border-b border-b-gray-300 py-5">
					<div className="w-full flex justify-between items-center py-3">
						<p className="font-semibold pr-3 md:font-bold w-1/4">Number of Club Members</p>
						<input name="Club" className="border border-gray-300 rounded-md w-3/5 p-2" onChange={handleSelectMem} />
						<p className="font-bold w-1/5 text-right">${selection[MEMS.CLUB].cost}</p>
					</div>
					<div className="w-full flex justify-between items-center py-3">
						<p className="font-semibold pr-3 md:font-bold w-1/4">Number of Premium Members</p>
						<input name="Premium" className="border border-gray-300 rounded-md w-3/5 p-2" onChange={handleSelectMem} />
						<p className="font-bold w-1/5 text-right">${selection[MEMS.PREM].cost}</p>
					</div>
				</div>
				<div className="flex justify-between py-3">
					<p className="font-bold uppercase">Total</p>
					<p className="font-bold text-orange-400 text-2xl">${total} AUD</p>
				</div>
				<div className="flex justify-center py-6">
					<button
						type="submit"
						disabled={disableNext}
						className={`my-5 rounded-3xl text-xs border ${disableNext ? 'bg-gray-300' : 'bg-orange-400'} py-2 text-white uppercase font-bold w-3/4 md:w-1/2`}
						onClick={handleSelect}
					>Next</button>
				</div>
			</form>
    </main>
	);
};

export default SignUpHowManyMembershipsPage;
