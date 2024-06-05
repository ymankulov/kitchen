import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const nav = useNavigate();
  let dispatch = useDispatch();
  return (
    <div className="card">
      <img src={el.images} alt="" />
      <h2>{el.title}</h2>
      <p>{el.description}</p>
      <h3>{el.price}сом</h3>
      <div className="card--price">
        <div className="card--price__quantity">
          <button>-</button>
          <h3>1</h3>
          <button>+</button>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "ADD_TO_BASKET", payload: el });
            nav("/basket");
          }}
          className="card--price__basket"
        >
          В корзину
        </button>
      </div>
      <a
        onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: el })}
        className="card--close"
      >
        <IoCloseCircleOutline />
      </a>
    </div>
  );
};

export default ProductCard;
