import { onDestroy } from 'svelte'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin)

export function triggerMe(node) {
  let line = node.querySelector('#swoop-left')
  let arrow = node.querySelector('.arrow')
  // gsap.set(arrow, { opacity: 0 })

  let tl = gsap.timeline({ paused: true })
  // tl.from(node.lastChild.lastChild, { y: 0, x: 0, ease: 'power2' })
  tl.from(line, { duration: 0.35, drawSVG: 0 })
  tl.from(arrow, { duration: 0.05, opacity: 0 }, '<')
  tl.to(
    arrow,
    {
      duration: 0.35,
      motionPath: {
        path: line,
        align: line,
        alignOrigin: [0.32, 0],
        autoRotate: 105,
      },
    },
    '<',
  )
  // tl.from(
  //   node.firstChild.firstChild,
  //   {
  //     y: '-1rem',
  //     opacity: 0,
  //     ease: 'back.out(1)',
  //   },
  //   '<+0.15',
  // )
  // tl.from(
  //   node.firstChild.lastChild,
  //   { y: '-1rem', opacity: 0, ease: 'back.out(1)' },
  //   '<+0.2',
  // )

  ScrollTrigger.create({
    trigger: node,
    // pin: true,
    // scrub: 1,
    start: 'top center',
    animation: tl,
    // markers: true,
  })

  onDestroy(() => {
    // ScrollTrigger.removeEventListener()
    // note find out if we need to destroy or not
    console.log('destroy?')
  })
}
