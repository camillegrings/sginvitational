import { HomeBanner, HomeInfo, CountdownSection, Tickets, Header, Footer, EffectPhrase, SeparatorWithPhrase, Separator, Testimony } from '@components'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function HomePage() {

  function animateFrom(elem, direction) {
    direction = direction || 1;
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }

    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";

    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  useGSAP(
    () => {
      gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem);

        ScrollTrigger.create({
          trigger: elem,
          start: 'top bottom',
          end: `bottom-=57 top`,
          onEnter: function () { animateFrom(elem) },
          onEnterBack: function () { animateFrom(elem, -1) },
          onLeave: function () { hide(elem) }
        });
      });
    }
  );

  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <CountdownSection />
        <HomeInfo />
        <Testimony />
        <EffectPhrase />
        <SeparatorWithPhrase />
        <Tickets />
        <Separator />
      </main>
      <Footer />
    </>
  );
}