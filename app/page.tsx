import { Hero, HowItWork, Newest, Phone } from "./Components";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <HowItWork />
      <Newest />
      <Phone />
    </main>
  );
}
