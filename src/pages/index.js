import { HomeBanner, HomeInfo, CountdownSection, Tickets, Header, Footer, EffectPhrase, SeparatorWithPhrase, Separator } from '@components'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <CountdownSection />
        <HomeInfo />
        <EffectPhrase />
        <SeparatorWithPhrase />
        <Tickets />
        <Separator />
      </main>
      <Footer />
    </>
  );
}