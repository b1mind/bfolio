<script>
	import { gsap } from 'gsap'
	import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin.js'
	import { GSDevTools } from 'gsap/dist/GSDevTools.js'
	import { onMount } from 'svelte'
	gsap.registerPlugin(DrawSVGPlugin, GSDevTools)

	onMount(() => {
		const baseTl = gsap.timeline({ default: { duration: 0.5 } })

		function groundTl() {
			const tl = gsap.timeline({ defaults: {} })
			//tl.from('#groundLine', {duration: 0.75, drawSVG: '50% 50%'})
			tl.from('#groundLine', {
				duration: 0.65,
				scaleX: 0,
				transformOrigin: 'center center',
			})

			tl.from(
				'#ground',
				{ scale: 0.7, opacity: 0, transformOrigin: 'top center' },
				'<+0.35',
			)
			tl.to('#ground', { opacity: 1 }, '<')

			return tl
		}

		function buildingsTl() {
			const tl = gsap.timeline({ defaults: { transformOrigin: 'bottom center' } })
			const buildings = gsap.utils.toArray('#buildings > rect')

			tl.addLabel('buildingStart')
				.to(buildings, { opacity: 1 })
				.from(buildings, { scaleY: 0, stagger: 0.2, ease: 'back.out(1.4)' }, '<')
				.to('#towerPoles', { opacity: 1 }, '<')
				.from('#towerPole', { scaleY: 0 }, '<+0.2')
				.from('#towerMidPole', { scaleY: 0 }, '>')
				.to('#towerBasket', { duration: 0.01, opacity: 1 }, '>-0.2')
				.from(
					'#towerBasket',
					{ scaleX: 0, transformOrigin: 'center center', ease: 'bounce.out' },
					'<',
				)
				.from('#towerTopPole', { scaleY: 0 }, '<+0.1')
				.to('#powerPole1', { opacity: 1 }, '>-0.5')
				.from('#powerPole1', { scaleY: 0 }, '<')
				.to('#powerPoleArms', { opacity: 1 }, '>-0.2')
				.from('#powerPoleArms', { scaleX: 0, transformOrigin: 'center center' }, '<')

			return tl
		}

		function lightsTl() {
			const tl = gsap.timeline({})
			const lights = gsap.utils.toArray('[id*="_lights"]')
			gsap.set(lights, { opacity: 1 })

			tl.addLabel('lightsStart')
			lights.forEach((l) => tl.from(l.children, { opacity: 0, stagger: 0.2 }, '<'))

			return tl
		}

		function buildingMoss() {
			const tl = gsap.timeline({ defaults: { transformOrigin: 'top right' } })
			const mosses = gsap.utils.toArray('#buildingMoss > g')

			gsap.set(['#bigBuildingMoss > *', '#groundMoss > *'], { opacity: 1 })
			tl.addLabel('start')
			tl.from(
				'#groundMoss > g > g > *',
				{
					duration: 1,
					scaleY: 0,
					stagger: { amount: 0.4, axis: 'x', grid: [0, 7], from: 'edges' },
				},
				'start',
			)

			mosses.forEach((moss) => {
				gsap.set(moss, { opacity: 1 })
				tl.from(
					moss.children[1].children,
					{ duration: 0.6, scaleY: 0, stagger: { amount: 0.08, from: 'end' } },
					'start+=0.5',
				)
				console.dir(moss.children[1].children)
			})

			tl.from(
				'#bigBuildingMoss > g > g > *',
				{ scaleY: 0, stagger: { amount: 0.08 } },
				'<+0.3',
			)
			console.dir(document.querySelectorAll('#bigBuildingMoss > g > g > *'))

			return tl
		}

		function cityBushTl() {
			const tl = gsap.timeline({})
			tl.to('#cityBush', { opacity: 1 })
			tl.from(
				'#cityBush > *',
				{ scale: 0, transformOrigin: 'center bottom', stagger: 0.27 },
				'<',
			)

			return tl
		}

		function treeTrunksTl() {
			const tl = gsap.timeline()
			tl.to('#treeTrunks > *', { opacity: 1 })
			tl.from('#treeTrunks > *', {
				scaleY: 0,
				transformOrigin: 'bottom center',
				stagger: { each: 0.6 },
				ease: 'back.out(3)',
			})

			return tl
		}

		function treeLeafTl() {
			const tl = gsap.timeline({
				defaults: {
					transformOrigin: 'center',
					duration: 0.42,
					stagger: { amount: 0.4 },
				},
			})
			const leafs = gsap.utils.toArray('#leafs > *')

			leafs.forEach((leaf) => {
				gsap.set(leaf, { opacity: 1 })
				tl.from(
					leaf.children,
					{
						scaleY: 0.5,
						opacity: 0,
						ease: 'back.out(3)',
					},
					'-=0.3',
				)
				tl.from(leaf.children, { scaleX: 0, ease: 'back.out(4)' }, '<+0.1')
			})

			return tl
		}

		function bushesTl() {
			const tl = gsap.timeline()
			const bushes = gsap.utils.toArray('#bushes > *')

			bushes.forEach((bush) => {
				gsap.set(bush, { opacity: 1 })
				tl.from(
					bush,
					{
						scaleY: 0,
						transformOrigin: 'bottom center',
						ease: 'back.out(4)',
					},
					'>-0.2',
				)
			})

			return tl
		}

		function powerLinesTl() {
			const tl = gsap.timeline({})
			tl.to('#powerLines > *', { duration: 0.35, opacity: 1, stagger: 0.2 })
			tl.from(
				'#powerLine02',
				{ duration: 1, y: -30, ease: 'elastic.out(0.8, 0.1)' },
				'<',
			)
			tl.from('#powerLine01', { y: -10, ease: 'elastic.out(0.6, 0.1)' }, '<+0.25')

			return tl
		}

		function ringTl() {
			gsap.set('#ring', { opacity: 1 })
			gsap.set('#ringMask', { opacity: 1 })
			const tl = gsap.timeline({})
			gsap.set('#ring', { rotate: '-90deg', transformOrigin: 'center' })
			gsap.set('#ringMask', { rotate: '-90deg', transformOrigin: 'center' })
			tl.from('#ring', { drawSVG: 0 })
			tl.from('#ringMask', { drawSVG: 0 }, '<')

			return tl
		}

		function cloudsTl() {
			const tl = gsap.timeline({})
			//gsap.set('#clouds > *', { opacity: 1 })
			tl.to('#clouds > *', { opacity: 1, stagger: 0.2 })
			tl.from('#clouds > *', { x: -30 }, '<')

			return tl
		}

		baseTl.add(groundTl())
		baseTl.add(buildingsTl(), '>-0.25')
		baseTl.add(lightsTl(), '>-1')
		baseTl.add(buildingMoss(), '>-0.75')
		baseTl.add(cityBushTl(), '<+0.25')
		baseTl.add(treeTrunksTl(), '>-1')
		baseTl.add(treeLeafTl(), '<+0.75')
		baseTl.add(bushesTl(), '<+0.3')
		baseTl.add(ringTl(), '>+0.3')
		baseTl.add(powerLinesTl(), '<')
		baseTl.add(cloudsTl(), '<')

		GSDevTools.create({})
	})
</script>

<main>
	<svg
		width="556"
		height="556"
		viewBox="0 0 556 556"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g id="KirbySVG">
			<g id="tower">
				<path
					id="towerBasket"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M217 130C219.209 130 221 131.791 221 134C221 136.209 219.209 138 217 138H216.347L213.675 154.366C215.047 155 216 156.389 216 158C216 160.209 214.209 162 212 162H170C167.791 162 166 160.209 166 158C166 156.18 167.216 154.643 168.88 154.159L166.571 138H165C162.791 138 161 136.209 161 134C161 131.791 162.791 130 165 130L217 130Z"
					fill="#CDF439"
				/>
				<g id="towerPoles">
					<rect
						id="towerTopPole"
						x="187"
						y="93"
						width="8"
						height="41"
						rx="4"
						fill="#CDF439"
					/>
					<rect
						id="towerMidPole"
						x="185"
						y="130"
						width="12"
						height="43"
						rx="4"
						fill="#CDF439"
					/>
					<rect
						id="towerPole"
						x="179"
						y="167"
						width="25"
						height="201"
						rx="12.5"
						fill="#CDF439"
					/>
				</g>
			</g>
			<g id="buildings">
				<rect
					id="building1"
					x="231"
					y="98"
					width="98"
					height="255"
					rx="7"
					fill="#BFEA44"
				/>
				<g id="building1_lights">
					<rect
						id="verticalLight"
						x="243"
						y="107"
						width="8"
						height="85"
						rx="4"
						fill="#E6FF31"
					/>
					<rect
						id="verticalLight_2"
						x="265"
						y="107"
						width="8"
						height="85"
						rx="4"
						fill="#E6FF31"
					/>
					<rect
						id="verticalLight_3"
						x="288"
						y="107"
						width="8"
						height="85"
						rx="4"
						fill="#E6FF31"
					/>
				</g>
				<g id="cityBush">
					<circle id="Ellipse 3" cx="277" cy="299" r="54" fill="#8AB029" />
					<circle id="Ellipse 4" cx="294" cy="247" r="17" fill="#8AB029" />
					<ellipse id="Ellipse 5" cx="272" cy="234" rx="17" ry="19" fill="#8AB029" />
					<ellipse id="Ellipse 6" cx="295" cy="235" rx="10" ry="11" fill="#8AB029" />
					<ellipse id="Ellipse 7" cx="240.5" cy="205" rx="15.5" ry="19" fill="#8AB029" />
				</g>
				<rect
					id="building2"
					x="197"
					y="201"
					width="74"
					height="155"
					rx="7"
					fill="#8AB029"
				/>
				<g id="building2_lights">
					<g id="Group 2">
						<rect
							id="sidewaysLight"
							x="229"
							y="245"
							width="8"
							height="22"
							rx="4"
							transform="rotate(90 229 245)"
							fill="#E6FF31"
						/>
						<rect
							id="sidewaysLight_2"
							x="262"
							y="245"
							width="8"
							height="22"
							rx="4"
							transform="rotate(90 262 245)"
							fill="#E6FF31"
						/>
					</g>
					<g id="Group 3">
						<rect
							id="sidewaysLight_3"
							x="229"
							y="270"
							width="8"
							height="22"
							rx="4"
							transform="rotate(90 229 270)"
							fill="#E6FF31"
						/>
						<rect
							id="sidewaysLight_4"
							x="262"
							y="270"
							width="8"
							height="22"
							rx="4"
							transform="rotate(90 262 270)"
							fill="#E6FF31"
						/>
					</g>
					<g id="Group 4">
						<rect
							id="sidewaysLight_5"
							x="229"
							y="295"
							width="8"
							height="22"
							rx="4"
							transform="rotate(90 229 295)"
							fill="#E6FF31"
						/>
						<rect
							id="sidewaysLight_6"
							x="262"
							y="295"
							width="8"
							height="22"
							rx="4"
							transform="rotate(90 262 295)"
							fill="#E6FF31"
						/>
					</g>
				</g>
				<rect
					id="building4"
					x="339"
					y="204"
					width="74"
					height="155"
					rx="7"
					fill="#8AB029"
				/>
				<rect
					id="building3"
					x="303"
					y="151"
					width="82"
					height="205"
					rx="7"
					fill="#8AB029"
				/>
				<g id="building3_lights">
					<rect
						id="sidewaysLight_7"
						x="374"
						y="171"
						width="8"
						height="60"
						rx="4"
						transform="rotate(90 374 171)"
						fill="#E6FF31"
					/>
					<rect
						id="sidewaysLight_8"
						x="374"
						y="196"
						width="8"
						height="60"
						rx="4"
						transform="rotate(90 374 196)"
						fill="#E6FF31"
					/>
					<rect
						id="sidewaysLight_9"
						x="374"
						y="221"
						width="8"
						height="60"
						rx="4"
						transform="rotate(90 374 221)"
						fill="#E6FF31"
					/>
					<rect
						id="sidewaysLight_10"
						x="374"
						y="246"
						width="8"
						height="60"
						rx="4"
						transform="rotate(90 374 246)"
						fill="#E6FF31"
					/>
				</g>
			</g>
			<g id="bigBuildingMoss">
				<g id="moss3">
					<mask
						id="mask0_8_22"
						style="mask-type:alpha"
						maskUnits="userSpaceOnUse"
						x="237"
						y="95"
						width="94"
						height="85"
					>
						<rect
							id="Rectangle 4"
							x="237"
							y="95"
							width="94"
							height="84.9863"
							rx="6"
							fill="#587F1C"
						/>
					</mask>
					<g mask="url(#mask0_8_22)">
						<g id="Group 1">
							<path
								id="mosses0202"
								d="M322 95.5C322 93.0147 324.015 91 326.5 91V91C328.985 91 331 93.0147 331 95.5V123.5C331 125.985 328.985 128 326.5 128V128C324.015 128 322 125.985 322 123.5V95.5Z"
								fill="#8AB029"
							/>
							<path
								id="mosses0101"
								d="M294 102C294 93.7157 300.716 87 309 87H310C318.284 87 325 93.7157 325 102V161C325 169.284 318.284 176 310 176H309C300.716 176 294 169.284 294 161V102Z"
								fill="#8AB029"
							/>
							<path
								id="mosses0202_2"
								d="M270 101C270 92.7157 276.716 86 285 86H286C294.284 86 301 92.7157 301 101V147C301 155.284 294.284 162 286 162H285C276.716 162 270 155.284 270 147V101Z"
								fill="#8AB029"
							/>
							<path
								id="mosses0303"
								d="M252 96.5C252 90.701 256.701 86 262.5 86V86C268.299 86 273 90.701 273 96.5V125.5C273 131.299 268.299 136 262.5 136V136C256.701 136 252 131.299 252 125.5V96.5Z"
								fill="#8AB029"
							/>
							<path
								id="mosses0202_3"
								d="M237 96.9315C237 91.5978 241.324 87.274 246.658 87.274V87.274C251.991 87.274 256.315 91.5978 256.315 96.9315V114.959C256.315 120.293 251.991 124.616 246.658 124.616V124.616C241.324 124.616 237 120.293 237 114.959V96.9315Z"
								fill="#8AB029"
							/>
						</g>
					</g>
				</g>
			</g>
			<g id="buildingMoss">
				<g id="moss1">
					<mask
						id="mask1_8_22"
						style="mask-type:alpha"
						maskUnits="userSpaceOnUse"
						x="202"
						y="198"
						width="73"
						height="66"
					>
						<rect
							id="Rectangle 4_2"
							x="202"
							y="198"
							width="73"
							height="66"
							rx="6"
							fill="#587F1C"
						/>
					</mask>
					<g mask="url(#mask1_8_22)">
						<g id="Group 1_2">
							<path
								id="mosses0101_2"
								d="M250 204.5C250 197.596 255.596 192 262.5 192V192C269.404 192 275 197.596 275 204.5V248.5C275 255.404 269.404 261 262.5 261V261C255.596 261 250 255.404 250 248.5V204.5Z"
								fill="#4C741D"
							/>
							<path
								id="mosses0202_4"
								d="M234 203.5C234 196.596 239.596 191 246.5 191V191C253.404 191 259 196.596 259 203.5V237.5C259 244.404 253.404 250 246.5 250V250C239.596 250 234 244.404 234 237.5V203.5Z"
								fill="#4C741D"
							/>
							<path
								id="mosses0303_2"
								d="M208 206C208 197.716 214.716 191 223 191H224C232.284 191 239 197.716 239 206V224C239 232.284 232.284 239 224 239H223C214.716 239 208 232.284 208 224V206Z"
								fill="#4C741D"
							/>
							<path
								id="mosses0202_5"
								d="M202 199.5C202 195.358 205.358 192 209.5 192V192C213.642 192 217 195.358 217 199.5V213.5C217 217.642 213.642 221 209.5 221V221C205.358 221 202 217.642 202 213.5V199.5Z"
								fill="#4C741D"
							/>
						</g>
					</g>
				</g>
				<g id="moss2">
					<mask
						id="mask2_8_22"
						style="mask-type:alpha"
						maskUnits="userSpaceOnUse"
						x="302"
						y="149"
						width="73"
						height="66"
					>
						<rect
							id="Rectangle 4_3"
							width="73"
							height="66"
							rx="6"
							transform="matrix(-1 0 0 1 375 149)"
							fill="#587F1C"
						/>
					</mask>
					<g mask="url(#mask2_8_22)">
						<g id="Group 1_3">
							<path
								id="mosses0101_3"
								d="M327 155.5C327 148.596 321.404 143 314.5 143V143C307.596 143 302 148.596 302 155.5V199.5C302 206.404 307.596 212 314.5 212V212C321.404 212 327 206.404 327 199.5V155.5Z"
								fill="#4C741D"
							/>
							<path
								id="mosses0202_6"
								d="M343 154.5C343 147.596 337.404 142 330.5 142V142C323.596 142 318 147.596 318 154.5V188.5C318 195.404 323.596 201 330.5 201V201C337.404 201 343 195.404 343 188.5V154.5Z"
								fill="#4C741D"
							/>
							<path
								id="mosses0303_3"
								d="M369 157C369 148.716 362.284 142 354 142H353C344.716 142 338 148.716 338 157V175C338 183.284 344.716 190 353 190H354C362.284 190 369 183.284 369 175V157Z"
								fill="#4C741D"
							/>
							<path
								id="mosses0202_7"
								d="M375 150.5C375 146.358 371.642 143 367.5 143V143C363.358 143 360 146.358 360 150.5V164.5C360 168.642 363.358 172 367.5 172V172C371.642 172 375 168.642 375 164.5V150.5Z"
								fill="#4C741D"
							/>
						</g>
					</g>
				</g>
			</g>
			<g id="treeTrunks">
				<path
					id="trunk03"
					d="M140.5 346H110.5V341.5C92 339 71 291 110.5 276C95.5 296 99.5 322.5 113 328.5C113.376 323.457 113 292 147 292C133.5 317 132.309 339.786 140.5 346Z"
					fill="#152F00"
				/>
				<path
					id="trunk01"
					d="M383.045 346.5H353.045V336C338 333.5 326.5 311 334.5 305.5C340 322.5 346 323 353.045 326.5C353.045 326.5 353.045 285.5 386.5 285.5C379 301 376 337 383.045 346.5Z"
					fill="#152F00"
				/>
				<path
					id="trunk02"
					d="M438 301C447 303.5 451.317 328.906 450 347H430.5C424.891 327.63 417.503 315.471 404.5 305C414 299 436.5 299.5 438 301Z"
					fill="#152F00"
				/>
			</g>
			<g id="leafs">
				<g id="tree1Leaf">
					<path
						id="treeLeaves03_2"
						d="M66 292.947C66 278.883 72.228 264.041 85.6203 259.746C91.7994 257.764 97.4937 257.76 103.86 259.779C117.497 264.103 124 279.078 124 293.383V313.5C124 316.261 121.761 318.5 119 318.5H71C68.2386 318.5 66 316.261 66 313.5V292.947Z"
						fill="#2A4E0C"
					/>
					<path
						id="treeLeaves02"
						d="M84 260.365C84 246.243 90.3966 231.812 103.546 226.664C112.608 223.116 120.525 223.094 129.922 226.706C143.328 231.859 150 246.438 150 260.8V287C150 289.761 147.761 292 145 292H89C86.2386 292 84 289.761 84 287V260.365Z"
						fill="#2A4E0C"
					/>
					<path
						id="treeLeaves01"
						d="M122 285.685C122 271.621 128.228 256.779 141.62 252.484C147.799 250.502 153.494 250.498 159.86 252.516C173.497 256.841 180 271.816 180 286.121V306.238C180 308.999 177.761 311.238 175 311.238H127C124.239 311.238 122 308.999 122 306.238V285.685Z"
						fill="#416B17"
					/>
				</g>
				<g id="tree2Leaf">
					<path
						id="treeLeaves05"
						d="M326 265.365C326 251.243 332.397 236.812 345.546 231.664C354.608 228.116 362.525 228.094 371.922 231.706C385.328 236.859 392 251.438 392 265.8V292C392 294.761 389.761 297 387 297H331C328.239 297 326 294.761 326 292V265.365Z"
						fill="#2A4E0C"
					/>
					<path
						id="treeLeaves04"
						d="M304 296.685C304 282.621 310.228 267.779 323.62 263.484C329.799 261.502 335.494 261.498 341.86 263.516C355.497 267.841 362 282.816 362 297.121V317.238C362 319.999 359.761 322.238 357 322.238H309C306.239 322.238 304 319.999 304 317.238V296.685Z"
						fill="#2A4E0C"
					/>
					<path
						id="treeLeaves03"
						d="M358 285.685C358 271.621 364.228 256.779 377.62 252.484C383.799 250.502 389.494 250.498 395.86 252.516C409.497 256.841 416 271.816 416 286.121V306.238C416 308.999 413.761 311.238 411 311.238H363C360.239 311.238 358 308.999 358 306.238V285.685Z"
						fill="#2A4E0C"
					/>
				</g>
				<g id="tree3Leaf">
					<path
						id="treeLeaves08"
						d="M426 301.685C426 287.621 432.228 272.779 445.62 268.484C451.799 266.502 457.494 266.498 463.86 268.516C477.497 272.841 484 287.816 484 302.121V322.238C484 324.999 481.761 327.238 479 327.238H431C428.239 327.238 426 324.999 426 322.238V301.685Z"
						fill="#2A4E0C"
					/>
					<path
						id="treeLeaves07"
						d="M408 285.685C408 271.621 414.228 256.779 427.62 252.484C433.799 250.502 439.494 250.498 445.86 252.516C459.497 256.841 466 271.816 466 286.121V306.238C466 308.999 463.761 311.238 461 311.238H413C410.239 311.238 408 308.999 408 306.238V285.685Z"
						fill="#2A4E0C"
					/>
					<path
						id="treeLeaves06"
						d="M385 292.685C385 278.621 391.228 263.779 404.62 259.484C410.799 257.502 416.494 257.498 422.86 259.516C436.497 263.841 443 278.816 443 293.121V313.238C443 315.999 440.761 318.238 438 318.238H390C387.239 318.238 385 315.999 385 313.238V292.685Z"
						fill="#416B17"
					/>
				</g>
			</g>
			<g id="powerLines">
				<path
					id="powerLine02"
					d="M161.113 232.513C240.909 309.525 292.784 322.563 399.113 287.513"
					stroke="#416B17"
					stroke-width="4"
				/>
				<path
					id="powerLine01"
					d="M161.5 244C196 311.5 271 366.5 325.5 356.5"
					stroke="#416B17"
					stroke-width="4"
				/>
			</g>
			<g id="powerPole">
				<rect
					id="powerPole1"
					x="156"
					y="209"
					width="11"
					height="149"
					rx="5.5"
					fill="#8AB029"
				/>
				<g id="powerPoleArms">
					<rect
						id="towerPole_2"
						x="195"
						y="230"
						width="8"
						height="66"
						rx="4"
						transform="rotate(90 195 230)"
						fill="#8AB029"
					/>
					<rect
						id="towerPole_3"
						x="168.527"
						y="259.87"
						width="8"
						height="43.6565"
						rx="4"
						transform="rotate(135 168.527 259.87)"
						fill="#8AB029"
					/>
					<rect
						id="towerPole_4"
						width="8"
						height="43.6565"
						rx="4"
						transform="matrix(0.707107 0.707107 0.707107 -0.707107 156 259.87)"
						fill="#8AB029"
					/>
				</g>
			</g>
			<g id="bushes">
				<g id="bush1">
					<path
						id="Rectangle 13"
						d="M142 333.891C142 329.465 143.253 324.906 146.706 322.137C152.007 317.885 157.271 318.016 162.378 322.162C165.777 324.923 167 329.435 167 333.815V346.064H142V333.891Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 17"
						d="M127 343.718C127 339.32 128.282 334.407 132.502 333.169C134.792 332.497 137.241 332.585 139.385 333.363C143.029 334.684 144 339 144 342.876V346.064H127V343.718Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 14"
						d="M185 339.58C185 334.291 186.835 328.698 191.624 326.451C195.619 324.577 199.585 324.622 203.469 326.464C208.205 328.71 210 334.257 210 339.498V346.064H185V339.58Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 18"
						d="M166 342.606C166 337.188 167.913 331.227 173.082 329.605C175.412 328.874 177.727 328.889 180.012 329.615C185.128 331.242 187 337.154 187 342.523V346.064H166V342.606Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 22"
						d="M208 344.233C208 340.488 209.457 336.438 213.059 335.414C214.721 334.942 216.373 334.95 218.003 335.419C221.571 336.444 223 340.465 223 344.178V346.064H208V344.233Z"
						fill="#2A4E0C"
					/>
				</g>
				<g id="bush2a">
					<path
						id="Rectangle 20"
						d="M220 342.824C220 339.046 221.5 335.092 225.035 333.755C227.729 332.736 230.404 332.759 233.028 333.76C236.529 335.097 238 339.022 238 342.769V346H220V342.824Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 21"
						d="M258 346C258 342.05 259.887 337.938 263.769 337.211C265.269 336.93 266.761 336.931 268.237 337.203C272.125 337.919 274 342.047 274 346V346H258V346Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 15"
						d="M235 339.517C235 334.227 236.835 328.634 241.624 326.387C245.619 324.513 249.585 324.558 253.469 326.4C258.205 328.646 260 334.193 260 339.434V346H235V339.517Z"
						fill="#2A4E0C"
					/>
				</g>
				<g id="bush2b">
					<path
						id="Rectangle 19"
						d="M297 342.824C297 339.046 298.5 335.092 302.035 333.755C304.729 332.736 307.404 332.759 310.028 333.76C313.529 335.097 315 339.022 315 342.769V346H297V342.824Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 16"
						d="M272 346C272 338.405 274.917 329.886 282.38 328.476C284.438 328.087 286.496 328.116 288.553 328.544C295.961 330.086 299 338.434 299 346V346H272V346Z"
						fill="#2A4E0C"
					/>
				</g>
				<g id="bush3">
					<path
						id="Rectangle 26"
						d="M406 343.082C406 337.349 408.216 331.143 413.724 329.551C416.295 328.808 418.85 328.822 421.371 329.559C426.828 331.154 429 337.313 429 342.998V346H406V343.082Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 25"
						d="M387 343.235C387 339.221 388.733 335.089 392.527 333.778C395.564 332.729 398.579 332.752 401.536 333.781C405.297 335.091 407 339.198 407 343.18V346H387V343.235Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 24"
						d="M351 345.797C351 341.924 352.606 337.592 356.444 337.073C357.172 336.974 357.896 336.976 358.616 337.075C362.422 337.6 364 341.9 364 345.742V346H351V345.797Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 27"
						d="M427 345.797C427 341.924 428.606 337.592 432.444 337.073C433.172 336.974 433.896 336.976 434.616 337.075C438.422 337.6 440 341.9 440 345.742V346H427V345.797Z"
						fill="#2A4E0C"
					/>
					<path
						id="Rectangle 23"
						d="M363 339.517C363 334.227 364.835 328.634 369.624 326.387C373.619 324.513 377.585 324.558 381.469 326.4C386.205 328.646 388 334.193 388 339.434V346H363V339.517Z"
						fill="#2A4E0C"
					/>
				</g>
			</g>
			<path
				id="groundLine"
				d="M29 350H523"
				stroke="#152F00"
				stroke-width="8"
				stroke-linecap="round"
			/>
			<path
				id="ground"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M70.4805 354C101.422 438.052 182.21 498 277 498C371.79 498 452.578 438.052 483.52 354H70.4805Z"
				fill="#587F1C"
			/>
			<g id="groundMoss">
				<mask
					id="mask3_8_22"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="23"
					y="346"
					width="505"
					height="138"
				>
					<rect
						id="grassMask"
						x="23"
						y="346"
						width="505"
						height="138"
						rx="4"
						fill="#152F00"
					/>
				</mask>
				<g mask="url(#mask3_8_22)">
					<g id="groundMosses">
						<g id="Rectangle 5">
							<path
								d="M23 330C23 302.386 45.3858 280 73 280V280C100.614 280 123 302.386 123 330V377C123 404.614 100.614 427 73 427V427C45.3858 427 23 404.614 23 377V330Z"
								fill="#152F00"
							/>
							<path
								d="M23 330C23 302.386 45.3858 280 73 280V280C100.614 280 123 302.386 123 330V377C123 404.614 100.614 427 73 427V427C45.3858 427 23 404.614 23 377V330Z"
								fill="#152F00"
							/>
						</g>
						<rect
							id="Rectangle 6"
							x="115.55"
							y="318"
							width="58.3466"
							height="81"
							rx="29.1733"
							fill="#152F00"
						/>
						<g id="Rectangle 7">
							<path
								d="M172 358C172 330.386 194.386 308 222 308V308C249.614 308 272 330.386 272 358V378C272 405.614 249.614 428 222 428V428C194.386 428 172 405.614 172 378V358Z"
								fill="#152F00"
							/>
							<path
								d="M172 358C172 330.386 194.386 308 222 308V308C249.614 308 272 330.386 272 358V378C272 405.614 249.614 428 222 428V428C194.386 428 172 405.614 172 378V358Z"
								fill="#152F00"
							/>
						</g>
						<rect
							id="Rectangle 9"
							x="271"
							y="318"
							width="58"
							height="81"
							rx="29"
							fill="#152F00"
						/>
						<rect
							id="Rectangle 10"
							x="326"
							y="318"
							width="63"
							height="81"
							rx="31.5"
							fill="#152F00"
						/>
						<rect
							id="Rectangle 11"
							x="387"
							y="285"
							width="42"
							height="100"
							rx="21"
							fill="#152F00"
						/>
						<g id="Rectangle 8">
							<path
								d="M428 353C428 325.386 450.386 303 478 303V303C505.614 303 528 325.386 528 353V377C528 404.614 505.614 427 478 427V427C450.386 427 428 404.614 428 377V353Z"
								fill="#152F00"
							/>
							<path
								d="M428 353C428 325.386 450.386 303 478 303V303C505.614 303 528 325.386 528 353V377C528 404.614 505.614 427 478 427V427C450.386 427 428 404.614 428 377V353Z"
								fill="#152F00"
							/>
						</g>
					</g>
				</g>
			</g>
			<g id="clouds">
				<g id="could1">
					<path
						id="Subtract"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M71.0816 189C71.0277 188.582 71 188.157 71 187.727C71 181.401 76.9831 176.273 84.3636 176.273C84.592 176.273 84.8191 176.278 85.0447 176.287C85.015 175.862 85 175.432 85 175C85 163.402 95.8266 154 109.182 154C120.316 154 129.693 160.535 132.504 169.429C133.41 169.326 134.334 169.273 135.273 169.273C144.982 169.273 153.153 174.964 155.556 182.694C156.001 182.656 156.452 182.636 156.909 182.636C162.156 182.636 166.697 185.228 168.884 189H71.0816Z"
						fill="#DAFA31"
					/>
				</g>
				<g id="could2">
					<path
						id="Subtract_2"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M440.802 121C440.856 120.582 440.884 120.157 440.884 119.727C440.884 113.401 434.901 108.273 427.52 108.273C427.292 108.273 427.065 108.278 426.839 108.287C426.869 107.862 426.884 107.432 426.884 107C426.884 95.402 416.057 86 402.702 86C391.568 86 382.191 92.5349 379.38 101.429C378.474 101.326 377.55 101.273 376.611 101.273C366.901 101.273 358.731 106.964 356.327 114.694C355.883 114.656 355.431 114.636 354.975 114.636C349.727 114.636 345.187 117.228 343 121H440.802Z"
						fill="#DAFA31"
					/>
				</g>
				<path
					id="cloud3"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M433.988 147C433.996 146.834 434 146.667 434 146.5C434 139.596 427.284 134 419 134C410.716 134 404 139.596 404 146.5C404 146.667 404.004 146.834 404.012 147H433.988Z"
					fill="#DAFA31"
				/>
			</g>
			<circle
				id="ringMask"
				cx="278"
				cy="278"
				r="249"
				stroke="var(--stroke, #769B1E)"
				stroke-width="58"
			/>
			<circle
				id="ring"
				cx="278"
				cy="278"
				r="215.5"
				stroke="#587F1C"
				stroke-width="9"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</main>

<style lang="scss">
	svg {
		fill: none;
	}

	#ringMask {
		--stroke: var(--clr-secondary-bg);
	}

	#KirbySVG > g > * {
		opacity: 0;
	}
</style>
