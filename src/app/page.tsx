import Image from "next/image";
import Footer from "./Components/footer";
import Landing from "./LandingPage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Landing/>
     <Footer/>
    </main>
  );
}
