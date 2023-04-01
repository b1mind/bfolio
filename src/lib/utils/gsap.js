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
				autoRotate: 105
			}
		},
		'<'
	)

	tl.from(
		node.firstChild.lastChild,
		{ duration: 0.35, y: '-1rem', opacity: 0, ease: 'power4' },
		'<+=0.3'
	)
	tl.from(
		node.firstChild.firstChild,
		{ duration: 0.35, y: '1rem', opacity: 0, ease: 'power4' },
		'<'
	)

	ScrollTrigger.create({
		trigger: node,
		// pin: true,
		// scrub: 1,
		start: 'center bottom',
		animation: tl
		// markers: true,
	})

	return {
		destroy() {
			// console.log('destroy?')
			ScrollTrigger.removeEventListener()
			tl.kill()
			// note find out if we need to destroy or not
		}
	}
}

export function drawMe(node) {
	let line = node.firstChild
	let arrow = node.lastChild
	gsap.from(arrow, { opacity: 0, repeat: 6, yoyo: true })

	let tl = gsap.timeline({ defaults: { ease: 'sine.in' } })
	tl.from(line, { drawSVG: 0 })
	tl.to(
		arrow,
		{
			motionPath: {
				path: line,
				align: line,
				alignOrigin: [0.5, 0.8],
				autoRotate: -90
			}
		},
		'<'
	)

	ScrollTrigger.create({
		trigger: node,
		// pin: true,
		scrub: 1,
		start: 'top-=100 center',
		end: 'end 30%',
		animation: tl
		// markers: true,
	})
}

export function staggerUp(node) {
	let tl = gsap.timeline({ defaults: {} })
	// tl.from('[data-header] > b', { stagger: 0.3, y: 200 })
	// console.dir(node)
	tl.from(node.nextElementSibling, {
		duration: 0.35,
		opacity: 0,
		x: 300,
		ease: 'power1'
	})
	tl.from(node, { y: 150, ease: 'back.out(1.3)' }, '<+=0.2')

	afterUpdate(() => {
		tl.restart()
	})
}

export function staggerIcons(node) {
	let tl = gsap.timeline()
	console.dir(node)
	let icons = node.children
	tl.from(icons, {
		delay: 0.4,
		opacity: 0,
		y: -20,
		stagger: { amount: 0.5, grid: 'auto', from: 'center' }
	})

	afterUpdate(() => {
		tl.restart()
	})
}
