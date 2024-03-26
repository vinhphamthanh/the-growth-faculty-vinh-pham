import { logIn } from '@/store/slices/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');

	const handleChange = (event: any) => {
		const { target: { value } } = event;
		setEmail(() => value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		dispatch(logIn(email));
		router.push('/sign-up/how-many-memberships');
	};

	const disableNext = !email || !/@\w+\.\w{2,}/.test(email);

	return (
		<main className="w-full flex items-center py-5 justify-center mx-auto">
			<form className="flex-col justify-center items-center w-full md:w-3/5 p-6">
				<div className="flex flex-col w-full md:w-1/2 justify-center items-center mx-auto">
					<h1 className="font-bold uppercase text-2xl md:text-3xl my-6 text-center">Let's get started</h1>
					<input
						className="w-full my-3 p-2 border border-gray-300 rounded-lg" placeholder="Email address"
						onChange={handleChange}
					/>
					<button
						type="submit"
						disabled={disableNext}
						className={`my-5 rounded-3xl text-xs border ${disableNext ? 'bg-gray-300' : 'bg-orange-400'} py-2 text-white uppercase font-bold w-3/4 md:w-1/2`}
						onClick={handleSubmit}
					>Next</button>
				</div>
			</form>
    </main>
	);
};

export default HomePage;
