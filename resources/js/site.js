// This is all you.
import barba from '@barba/core';
import { gsap } from "gsap";

barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
});

barba.hooks.beforeEnter(({ current, next }) => {
	let nextHtml = next.html;
	// Get next page scripts.
	const nextScripts = $(nextHtml).filter("#scripts");
	// Replace the current scripts with the new ones.
	$("#scripts").html(nextScripts.html());
});

