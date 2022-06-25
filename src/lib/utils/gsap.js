import { onDestroy } from 'svelte'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin.js'
import { afterUpdate } from 'svelte'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin)

export function triggerMe(node) {
  let line = node.querySelector('#swoop-left')
  let arrow = node.querySelector('.arrow')
  // gsap.set(arrow, { opacity: 0 })

  let tl = gsap.timeline({ paused: true })
  tl.from(node.lastChild, { opacity: 0, ease: 'power2.in' })
  tl.from(node.lastChild.lastChild, { y: 0, x: 0, ease: 'power2.in' }, '<')
  tl.from(line, { drawSVG: 0 })
  tl.from(arrow, { duration: 0.01, opacity: 0 }, '<')
  tl.to(
    arrow,
    {
      motionPath: {
        path: line,
        align: line,
        alignOrigin: [0.32, 0],
        autoRotate: 105,
      },
    },
    '<',
  )

  tl.from(node.firstChild.lastChild, { y: '-1rem', opacity: 0 }, '<+0.25')
  tl.from(
    node.firstChild.firstChild,
    {
      y: '1rem',
      opacity: 0,
    },
    '<',
  )

  ScrollTrigger.create({
    trigger: node,
    // pin: true,
    // scrub: 1,
    start: 'center bottom',
    animation: tl,
    // markers: true,
  })

  onDestroy(() => {
    // ScrollTrigger.removeEventListener()
    // note find out if we need to destroy or not
    console.log('destroy?')
  })
}

export function drawMe(node) {
  let line = node.firstChild
  let arrow = node.lastChild
  gsap.from(arrow, { opacity: 0, repeat: 4, yoyo: true })

  let tl = gsap.timeline({})
  tl.from(line, { drawSVG: 0 })
  tl.to(
    arrow,
    {
      motionPath: {
        path: line,
        align: line,
        alignOrigin: [0.5, 0.8],
        autoRotate: -90,
      },
    },
    '<',
  )

  ScrollTrigger.create({
    trigger: node,
    // pin: true,
    scrub: 1,
    start: 'top-=100 center',
    end: 'end 30%',
    animation: tl,
    // markers: true,
  })
}

export function staggerUp(node) {
  let tl = gsap.timeline({ defaults: {} })
  // tl.from('[data-header] > b', { stagger: 0.3, y: 200 })
  console.dir(node)
  tl.from(node.nextElementSibling, { y: 300, ease: 'power2' })
  tl.from(node, { y: 300, ease: 'back.out(1.2)' }, '<+0.2')

  afterUpdate(() => {
    tl.restart()
  })
}
