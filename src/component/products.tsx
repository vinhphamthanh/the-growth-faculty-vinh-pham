
const Products = async () => {
	await new Promise(resolve => setTimeout(resolve, 3000))
	return (
		<div className="m-5 border">Products of your company</div>
	)
}

export default Products
