const initialState = {
  mainData: JSON.parse(localStorage.getItem("data")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const ReducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let newData = [...state.mainData, action.payload];
      localStorage.setItem("data", JSON.stringify(newData));
      return { ...state, mainData: newData };

    case "DELETE_PRODUCT":
      let deleteData = state.mainData.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("data", JSON.stringify(deleteData));
      return { ...state, mainData: deleteData };
    case "ADD_TO_BASKET":
      let toBasket = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(toBasket));
      return { ...state, basket: toBasket };
    default:
      return state;
  }
};
