import { HomeBanner, HomeInfo, CountdownSection, Tickets, Header, Footer } from '@/components'

export default function HomePage() {

  return (
    <main>
      <Header />
      <HomeBanner />
      <CountdownSection />
      <HomeInfo />
      <Tickets />
      <Footer />
    </main>
  );
}