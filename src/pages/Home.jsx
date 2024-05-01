import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import ItemProducts from '../componentes/ItemProduct'
const Home = () => {
  const { products } = useContext(ProductsContext);
  // console.log(products);

  // const filterProducts = products.filter((item) => {
  //   return (
  //     item.category === "men's clothing" || item.category === "women's clothing"
  //   );
  // });
  // console.log(filterProducts)
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid=cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return (
              <ItemProducts product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
