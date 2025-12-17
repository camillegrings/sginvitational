import { HomeBanner, HomeInfo, CountdownSection, Tickets, Header, Footer, EffectPhrase, SeparatorWithPhrase, Separator } from '@components'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";

export default function HomePage() {

  // function animateFrom(elem, direction) {
  //   direction = direction || 1;
  //   let x = 0,
  //     y = direction * 100;
  //   if (elem.classList.contains("gs_reveal_fromLeft")) {
  //     x = -100;
  //     y = 0;
  //   } else if (elem.classList.contains("gs_reveal_fromRight")) {
  //     x = 100;
  //     y = 0;
  //   }

  //   elem.style.transform = "translate(" + x + "px, " + y + "px)";
  //   elem.style.opacity = "0";

  //   gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
  //     duration: 1.25,
  //     x: 0,
  //     y: 0,
  //     autoAlpha: 1,
  //     ease: "expo",
  //     overwrite: "auto"
  //   });
  // }

  // function hide(elem) {
  //   gsap.set(elem, { autoAlpha: 0 });
  // }

  // useGSAP(
  //   () => {
  //     gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
  //       hide(elem);

  //       ScrollTrigger.create({
  //         trigger: elem,
  //         start: 'top bottom',
  //         end: `bottom-=57 top`,
  //         onEnter: function () { animateFrom(elem) },
  //         onEnterBack: function () { animateFrom(elem, -1) },
  //         onLeave: function () { hide(elem) }
  //       });
  //     });
  //   }
  // );

  useGSAP(() => {
    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      // smooth: 1,
      smooth: 1.2,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
      preventDefault: true
    });

    let tl = gsap.timeline();
    let mySplitText = new SplitText(".splitStagger", { type: "words,chars" });
    let chars = mySplitText.chars;

    console.log(chars)

    chars.forEach((char, i) => {
      smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });
  })

  return (
    <>
      <Header />
      <main id='wrapper'>
        <div id="content">
          <HomeBanner />
          <CountdownSection />
          <HomeInfo />
          <EffectPhrase />
          <SeparatorWithPhrase />
          <Tickets />
          <Separator />
          <Footer />
        </div>
      </main>

    </>
  );
}