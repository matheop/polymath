<script>
	import Typewriter from "$lib/Typewriter.svelte";
</script>

<section class="grid cols-2">
	<div class="col-1">
		<div class="title">
			<Typewriter chars={10} speed={2} title={"Conception"} />
		</div>
		<p>
			Besoin d'un site vitrine pour votre activité, mais vous
			voulez quelque chose qui vous corresponde ? Après une
			prise de besoin détaillée, je conçois pour vous les
			designs tout en appliquant les règles de rétention client
			pour les amener vers <strong>votre objectif</strong>. Bien
			sûr, toujours dans le
			<strong>respect de vos utilisateurs.</strong>
		</p>
	</div>
	<div class="col-2">
		<div class="title">
			<Typewriter
				chars={13}
				speed={2.6}
				addDelay={true}
				title={"Développement"} />
		</div>

		<p>
			Ça y est, vous avez vos designs pour votre site internet,
			mais il vous manque le développeur ? Pas cette fois !
			Après que nous nous soyons mis d'accord sur le contenu de
			vote site web, je m'occupe aussitôt du <strong
				>code</strong>
			et de la
			<strong>mise en ligne</strong> !
		</p>
		<p>
			<strong class="color"> Facile, non ? </strong>
		</p>
	</div>
</section>
