<script>
	import "../style/global.scss";
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		--py: #{$sp-200};
		@include py(var(--py));

		@include min-tablet {
			--py: #{$sp-500};
		}
	}
</style>
