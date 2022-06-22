import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { onDestroy } from 'svelte'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

export function triggerMe(node) {
  let tl = gsap.timeline({ paused: true })
  let line = node.querySelector('path')

  // tl.from(node, { opacity: 0 })
  tl.from(node.lastChild.lastChild, { y: 0, x: 0 }, '<')
  tl.from(line, { drawSVG: 0 })
  tl.from(node.firstChild.firstChild, { y: '1rem', opacity: 0 }, '<')
  tl.from(node.firstChild.lastChild, { y: '-1rem', opacity: 0 })

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
