import { useRouter } from "next/router";

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const router = useRouter();

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
      </div>
    </main>
  );
};

export default HomePage;
