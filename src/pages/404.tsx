import Error from 'next/error'
import Link from 'next/link';

const Page404 = () => {
	return (
		<>
			<Link href="/">HOME</Link>
			<Error statusCode={500} title="Something went wrong" />
		</>

	)
}

export default Page404
