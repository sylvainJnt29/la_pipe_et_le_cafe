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
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";


// Test de fonctionnement gsap
gsap.fromTo("#testTransition",{autoAlpha: 0}, {autoAlpha:1,duration:4});
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