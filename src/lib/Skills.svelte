<script>
	import Typewriter from "$lib/Typewriter.svelte";
</script>

<div class="grid">
	<div class="col-1">
		<div class="titles">
			<Typewriter title={"Conception"} isFast={true} />
		</div>
		<p>
			Besoin d'un site vitrine pour votre activité, mais vous
			voulez quelque chose qui vous corresponde ? Après une
			prise de besoin détaillé, je conçois pour vous les designs
			tout en applicant les règles de rétention client pour les
			amener vers <mark>votre objectif</mark>. Bien sûr,
			toujours dans le
			<mark>respect de vos utilisateurs.</mark>
		</p>
	</div>
	<div class="col-2">
		<div class="titles">
			<Typewriter addDelay={true} title={"Développement"} />
		</div>

		<p>
			Ca y est, vous avez vos designs pour votre site internet,
			mais il vous manque le développeur ? Pas cette fois !
			Après que nous nous soyons mis d'accord sur le contenu de
			vote site web, je m'occupe aussitôt de le coder et de le
			mettre en ligne ! <u>Facile, non ?</u>
		</p>
	</div>
</div>

<style lang="scss">
	.grid {
		display: block;
		& > * {
			margin-top: $sp-300;
		}

		.titles {
			width: fit-content;
			text-align: center;
			margin: 0 auto 2rem;
		}

		@include min-tablet {
			display: grid;
			grid-template-columns: 50% 50%;

			--box-padding: 2rem;

			.col-1 {
				padding-right: var(--box-padding);
				border-right: solid 1px $black;
			}

			.col-2 {
				padding-left: var(--box-padding);
			}
		}
	}
</style>
