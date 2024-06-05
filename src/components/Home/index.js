import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import emptyProduct from "../../assets/images/emptyProduct.webp"

const Home = () => {
  const { mainData } = useSelector((s) => s.product);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
            { mainData.length ?
                mainData.map((el) => <ProductCard el={el} key={el.id}/>) :
                <div className="home--empty">
                  <img src={emptyProduct} alt="" />
                </div>
            }

        </div>
      </div>
    </div>
  );
};

export default Home;
