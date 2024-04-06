import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../utils/constants";

const ProductDetail = () => {
  const { productID } = useParams();

  const getProducts = async () => {
    const data = await fetch(PRODUCT_URL + productID);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <></>;
};

export default ProductDetail;
