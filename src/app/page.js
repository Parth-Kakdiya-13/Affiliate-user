import Image from "next/image";
import Navbar from "../../components/Navrbar";
import Carousel from "../../components/Carousel";
import Stores from "../../components/TopStores";
import TrendingCategories from "../../components/TrendingCategories";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <Stores />
      <TrendingCategories />
      <Categories classes={"py-20"} />
    </div>
  );
}
