import React from "react";
import { useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";

const Basket = () => {
  const { basket } = useSelector((s) => s.product);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--cards">
            {basket.map((el) => (
              <div className="basket--cards__card">
                <img src={el.images} alt="" />
                <h3>{el.title}</h3>
                <div className="basket--cards__card--priceBlock">
                  <h4>{el.price} сом</h4>
                  <div className="basket--cards__card--priceBlock__count">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
                <a className="card--close">
                  <IoCloseCircleOutline />
                </a>
              </div>
            ))}
          </div>
          <div className="basket--title">
            <div className="basket--title__massege">
              <input type="text" />
              <div className="basket--title__massege--button">
                <button>Ок</button>
                <button>Отмена</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
