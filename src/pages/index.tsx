import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, authSelector } from '@/store/slices/auth';

export type HomePageProps = {};

const delay = () => new Promise(resolve => setTimeout(resolve, 5000))

const HomePage: React.FC<HomePageProps> = () => {
  const router = useRouter();
	const dispatch = useDispatch()
	const { isAuthenticated } = useSelector(authSelector)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (isAuthenticated) {
			router.push('/sign-up/how-many-memberships')
		}
	}, [isAuthenticated]);
	const handleLogin = async () => {
		try {
			setLoading(true);
			await delay()
			dispatch(logIn({
				name: 'Vinh',
				isConfirmed: true,
				occupation: 'dev',
			}))
		} catch (e) {

		} finally {
			setLoading(false);
		}
	}
  return (
    <main>
      {/* TODO: This could be removed */}
      <div className="flex flex-col bg-gray-900 w-full min-h-screen text-white pt-12 items-center">
        <h1 className="text-orange-400 font-semibold text-6xl text-center">
          Hello World!
        </h1>
        <h2 className="text-3xl text-center">
          You have successfully set up the
          <br />
          <strong>Growth Faculty Tech Exam</strong>
        </h2>
        <h2 className="text-3xl text-center mt-8 mb-2">Here are your next steps:</h2>
        <ul className="list-disc">
          <li>Setup your most comfortable state management library</li>
          <li>
            Further instruction will be given{" "}
            <strong>at the day of the interview</strong>
          </li>
					<li>See you at the interview!</li>
        </ul>
        <button
          className="text-orange-400 underline mt-8"
          onClick={() => router.push("/sign-up/how-many-memberships")}
        >
          Click here to test your navigation
        </button>
				<div className="my-3">
					{loading ? <div className="loader" /> : (<button className="border border-orange-400 px-5 py-1 rounded-xl" onClick={handleLogin}>LOG IN</button>)}
				</div>
      </div>
    </main>
  );
};

export default HomePage;
