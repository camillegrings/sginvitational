import { HomeBanner, HomeInfo, CountdownSection, Tickets, Header, Footer } from '@components'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <CountdownSection />
        <HomeInfo />
        <Tickets />
      </main>
      <Footer />
    </>
  );
}