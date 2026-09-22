import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import StickyOrderBar from "@/components/StickyOrderBar";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Testimonials />
        <Order />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
