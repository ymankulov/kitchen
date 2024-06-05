import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminCreate = () => {
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const { mainData } = useSelector((s) => s.product);
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };

  const infoMessage = (info) =>
    toast.error(info, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const dataTitle = mainData.map((el) => el.title);
  console.log(dataTitle, "data");
  const dispatch = useDispatch();
  const createProduct = () => {
    if (
      productDes.trim() !== "" &&
      productName.trim() !== "" &&
      productPrice.trim() !== "" &&
      productImg.trim() !== "" &&
      !isNaN(+productPrice) &&
      !dataTitle.includes(productName)
    ) {
      let newProduct = {
        id: mainData.length ? mainData[mainData.length - 1].id + 1 : 1,
        images: productImg,
        title: productName,
        description: productDes,
        price: productPrice,
      };
      dispatch({ type: "ADD_PRODUCT", payload: newProduct });
      setProductDes("");
      setProductName("");
      setProductPrice("");
    } else if (dataTitle.includes(productName)) {
      infoMessage("Такой продукт уже существует!");
    } else {
      infoMessage("Заполните пустые ячейки!");
    }
  };
  return (
    <div id="create">
      <div className="container">
        <div className="create">
          <div className="input__wrapper">
            <input
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              multiple
              onChange={onChange}
            />
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">
                <FaCloudDownloadAlt />
              </span>
              <span className="input__file-button-text">Выберите файл</span>
            </label>
          </div>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <input
            type="text"
            placeholder="Product Description"
            onChange={(e) => setProductDes(e.target.value)}
            value={productDes}
          />
          <input
            type="text"
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <button onClick={() => createProduct()}>Create</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminCreate;
