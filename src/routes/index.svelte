<script>
	import LogoPm from "$svg/Logo-PM.svelte";
	import LogoPolymath from "$svg/Logo-Polymath.svelte";
	import Intro from "$lib/Intro.svelte";
	import Skills from "$lib/Skills.svelte";
	import IntersectionObserver from "$lib/IntersectionObserver.svelte";
	import Seo from "$lib/SEO.svelte";
	import Projects from "$lib/Projects.svelte";
	import Contact from "$lib/Contact.svelte";
</script>

<Seo />

<section>
	<h1>
		&nbsp;
		<i class="polymath">
			<LogoPolymath />
		</i>
		&nbsp;
	</h1>

	<Intro />

	<Skills />

	<Projects />

	<Contact />

	<IntersectionObserver let:intersecting top={-50} once={true}>
		{#if intersecting}
			<i class:appears={intersecting} class="logo-pm">
				<LogoPm opa={0.8} />
			</i>
		{/if}
	</IntersectionObserver>
</section>

<style lang="scss">
	section {
		--px: #{$sp-200};
		padding: var(--px);
		padding-bottom: $sp-600;
		@include mx($sp-100);
		max-width: 100vw;
		position: relative;
		margin-bottom: 0; // override section global
		color: $white;

		@include min-tablet {
			--px: #{$sp-400};
			@include mx($sp-600);
		}

		@include desktop {
			--px: #{$sp-600};
			max-width: 76vw;
			@include mx(auto);
		}

		@include screen-xl {
			max-width: $screen-md;
			@include mx(auto);
		}

		&:before,
		&:after {
			pointer-events: none;
			box-sizing: inherit;
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
		}
		&:before,
		&:after {
			// Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
			border: 3px solid transparent;
			width: 0;
			height: 0;
		}

		// This covers the top & right borders (expands right, then down)
		&:before {
			top: 0;
			left: 0;
		}

		// And this the bottom & left borders (expands left, then up)
		&:after {
			bottom: 0;
			right: 0;
		}

		h1 {
			text-align: center;
			margin-bottom: 2rem;
		}
		h1 {
			--height: 4rem;
			position: relative;
			z-index: 1;
			overflow: hidden;
			height: var(--height);

			&:before,
			&:after {
				position: absolute;
				top: 50%;
				overflow: hidden;
				width: 50%;
				height: 1px;
				content: "\a0";
				background-color: $black;
			}
			&:before {
				margin-left: -50%;
				text-align: right;
			}

			.polymath {
				height: var(--height);
				width: 12rem;
			}
		}

		.logo-pm {
			position: absolute;
			bottom: 2rem;
			transform: translate(-50%, -50%);
			right: 30%;
			width: 5rem;
			height: 5rem;

			border-radius: 100rem;
			background: $danger-700;
			&.appears {
				@include animation(1s stamp normal forwards ease-out);
			}
		}

		/* Paper Animations */
		@include animation(2s coloring normal forwards ease-out 2s);
		&:before {
			@include animation(2s top-left normal forwards ease-out);
		}
		&:after {
			@include animation(
				2s bottom-right normal forwards ease-out 2s
			);
		}
	}

	@include anim(coloring) {
		0% {
			background-color: transparent;
		}
		100% {
			color: $black;
			background-color: $white;
		}
	}

	@include anim(top-left) {
		0% {
			width: 0rem;
			height: 0rem;
		}
		50% {
			height: 0rem;
			width: 100%;
			border-top-color: $black;
			transition: width 1s ease-in;
		}
		100% {
			width: 100%;
			height: 100%;
			border-top-color: $black;
			border-right-color: $black;
			transition: height 1s linear 1s;
		}
	}

	@include anim(bottom-right) {
		0% {
			width: 0rem;
			height: 0rem;
			border-bottom-color: $black;
			border-left-color: $black;
		}
		50% {
			height: 0rem;
			width: 100%;
			transition: width 1s ease-in;
		}
		100% {
			width: 100%;
			height: 100%;
			transition: height 1s linear 1s;
			border-bottom-color: $black;
			border-left-color: $black;
		}
	}

	@include anim(stamp) {
		from {
			transform-origin: 50% 50%;
			transform: rotate(-2deg) scale(3);
			@include ds-700;
			box-shadow: 20 20 58px #121212, -20 -20 58px #121212;
		}
		to {
			opacity: 1;
			transform: rotate(-20deg) scale(1);
		}
	}
</style>
