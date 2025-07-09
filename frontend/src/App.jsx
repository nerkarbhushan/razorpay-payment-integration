import productsData from "./components/data";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Product products={productsData} />
    </>
  );
}

export default App;
