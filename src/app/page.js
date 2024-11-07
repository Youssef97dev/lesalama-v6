import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" h-[300vh]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
