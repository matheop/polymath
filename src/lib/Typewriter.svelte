<script>
	import { onMount } from "svelte";

	import IntersectionObserver from "./IntersectionObserver.svelte";

	export let title: string;
	export let isFast: boolean;
</script>

<IntersectionObserver let:intersecting>
	{#if intersecting}
		<h2 class:isFast>{title}</h2>
	{/if}
</IntersectionObserver>

<style lang="scss">
	h2 {
		position: relative;
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.1rem; /* Adjust as needed */
		animation: typing 3.5s steps(13, end);

		&.isFast {
			animation-timing-function: steps(10, end);
		}

		&:after {
			position: absolute;
			right: 0;
			content: " ";
			white-space: pre;
			border-right: 0.3rem solid $black; /* The typwriter cursor */
			animation: blink-caret 0.75s step-end infinite;
		}
	}

	/* The typing effect */
	@include anim(typing) {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@include anim(blink-caret) {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: $black;
		}
	}
</style>
