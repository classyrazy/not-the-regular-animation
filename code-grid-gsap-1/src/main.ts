import './style.css'
// import { setupCounter } from './counter'

// // document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://www.typescriptlang.org/" target="_blank">
// //       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
// //     </a>
// //     <h1>Vite + TypeScript</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite and TypeScript logos to learn more
// //     </p>
// //   </div>
// // `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
window.addEventListener('load', () => {
  gsap.to(document.querySelector("body"), {
    visibility: "visible",
  });

  gsap.from(".nav-logo, .nav-links > a", 2, {
    top: "-30px",
    opacity: 0,
    ease: "power4.inOut",
    delay: 1,
    stagger: {
      amount: 0.5
    }
  });
  gsap.from(".back-text-wrapper >h1", 2, {
    height: "0px",
    ease: "Power4.inOut",
    stagger: 0.15,
    delay: 1.5
  });
  gsap.from(".play-wrapper, .copy, .pattern", 2, {
    scaleY: 0,
    ease: "Power3.inOut",
    stagger: 0.15,
    delay: 2.5
  });
  gsap.from(".hr", 2, {
    width: "0",
    ease: "Power3.inOut",
    delay: 3
  });
  gsap.from(".btns", 2, {
    x: 50,
    opacity: 0,
    ease: "Power3.inOut",
    delay: 3
  });
  gsap.from(".play-btn", 2, {
    scale: "0",
    ease: "Power3.inOut",
    delay: 3
  });
  gsap.from(".hero-wrapper", 2, {
    width: "100%",
    ease: "Power3.inOut",
    delay: 3
  });
  gsap.from(".arrow", 2, {
    scale: "0",
    ease: "Power3.inOut",
    delay: 3
  });
  gsap.from(".marquee", 2, {
    bottom: "-10rem",
    ease: "Power3.inOut",
    delay: 4
  });

})
