import data from "../mockdata";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    })
    .catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });

  return (
    <>
      <ItemDetail lista={productList}/>
    </>
  );
};

export default ItemDetailContainer;
