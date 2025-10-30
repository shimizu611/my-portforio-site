import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Works } from "./components/Works";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Profile/>
      </main>
      <Footer />
    </>
  );
}
