import Hero from "@/components/landing/Hero";
import NavBar from "@/components/landing/NavBar";

export default function Home() {
  return (
    <div className="min-h-[3000px]">
      <div className="landing">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
