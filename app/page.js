import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import AboutUs from "@/components/aboutus";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Divider />
      <AboutUs />
    </>
  );
}
