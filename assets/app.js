/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

// Import de gsap (manuel après installation npm)
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';



// Test de fonctionnement gsap
gsap.fromTo("#containerIntro",{autoAlpha: 0}, {autoAlpha:1,duration:6});
gsap.fromTo("#blocEntrantGauche",{
    x:-3000
},{
    x:0,
    duration:4
    }
);
gsap.fromTo("#blocEntrantDroite",{
    x:3000
},{
    x:0,
    duration:4
    }
);
/* Animation ecritures intro */
gsap.fromTo("#textePipeIntro",{
    y:-3000
},{
    x:100,
    y:80,
    duration:3
    }
);
gsap.fromTo("#texteOuIntro",{
    y:-3000
},{
    x:0,
    y:90,
    duration:3
    }
);
gsap.fromTo("#texteCafeIntro",{
    x:-1000,
    y:2000
},{
    x:1000,
    y:700,
    duration:3,
    }
);
/* Fin animation ecritures intro */ 

// progress bar
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

// animation de la grue construct
gsap.fromTo("#grue",{
    x:-1600
},{
    x:0,
    duration:4
    }
);

// Animations articles page Pipe + Café

// gsap.fromTo("#test", {
//   scrollTrigger: "#test", // start the animation when ".box" enters the viewport (once)
//   x: -2000
//   },{
//       x:5,
//       duration: 2
//   }
// );

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    var test = gsap.timeline({
        scrollTrigger: {
        trigger: "#test",
        toggleActions: "play pause play reverse"
        }
        });

    test.from("#test", {x:-1800,rotationX:-360,duration:2.2,ease:"power2"})
    .to("#test", {x:0});

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    var test2 = gsap.timeline({
        scrollTrigger: {
        trigger: "#test2",
        toggleActions: "play pause play reverse"
        }
        });

    test2.from("#test2", {rotationX:-360,duration:2.2,ease:"power2"})
    .to("#test2", {x:0});

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    var test3 = gsap.timeline({
        scrollTrigger: {
        trigger: "#test3",
        toggleActions: "play pause play reverse"
        }
        });

    test3.from("#test3", {x:1800,rotationX:-360,duration:2.2,ease:"power2"})
    .to("#test3", {x:0});

// Fin animations articles page Pipe + Café
