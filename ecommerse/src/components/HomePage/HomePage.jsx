import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productsService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomepage from "@components/SaleHomepage/SaleHomepage";
import MyFooter from "@components/Footer/Footer";
function HomePage() {
  const [listProducts, setListProduct] = useState([]);
  useEffect(() => {
    // khi call thành công sẽ chạy vào .then nhận được dữ liệu từ api getProducts vào trong đối số này và khi đó ta lấy được đối số
    getProducts().then((res) => {
      setListProduct(res.contents); // call thành công sẽ ném cái cục data từ api vào listProduct
    });
  }, []); // Không trả lần nào nữa
  // console.log(listProducts, "listProducts");

  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProduct data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, listProducts.length)} />
      <SaleHomepage />
      <MyFooter />
    </>
  );
}

export default HomePage;
