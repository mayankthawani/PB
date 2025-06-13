import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import AboutUs from "@/components/aboutus";
import Divider from "@/components/Divider";
import Divider2 from "@/components/Divider2";
import Owners from "@/components/owners";
import LatestToys from "@/components/LatestTrend";
import Ourcollection from "@/components/Our-collection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Divider2 />
      <AboutUs />
      <Divider />
      <Owners />
      <Divider2/>
      <LatestToys />
      <Ourcollection />
      <Divider />
      

    </>
  );
}
