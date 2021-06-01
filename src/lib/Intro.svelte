<script>
	import { isPhone } from "$stores/media";
	let quoteWidth: number;
</script>

<section class="intro">
	<p>
		Hey ! C'est moi, <strong>votre homme à tout faire</strong>,
		<a
			target="_blank"
			rel="noopener"
			href="https://fr.wikipedia.org/wiki/Polymathie"
			class="def">
			Polymath
			<div
				bind:clientWidth={quoteWidth}
				class="tooltip"
				style="left: {$isPhone
					? '0'
					: `calc(50% - ${quoteWidth / 2}px)`};">
				<q>
					La polymathie est la connaissance approfondie d’un
					grand nombre de sujets différents, en particulier
					dans le domaine des arts et des sciences. Le
					substantif associé est polymathe, parfois
					également nommé « personne d'esprit universel » ou
					« génie universel ».</q>
				– Wikipédia
			</div>
		</a>. Ou simplement
		<a
			target="_blank"
			rel="noopener"
			href="https://www.linkedin.com/in/matheopierini/">Math</a>
		en fait...
		<!-- Hey! I'm your polyvalent advisor, Polymath. Or just Math
				actually... -->
	</p>
	<p>
		Je suis étudiant-ingénieur en Informatique et Système
		d'Information à l'<a
			target="_blank"
			rel="noopener"
			href="https://www.utt.fr/"
			>Université de Technologie de Troyes</a>
		(Oui oui, c'est bien une école d'ingénieur malgré ce que peut laisser
		penser son nom).
	</p>
	<p>
		Je suis également
		<strong>Ergonome</strong>
		(ou Designer) et
		<strong>Développeur</strong>
		en <strong>Freelance</strong>.
	</p>
	<p>
		Fortement intéressé et intrigué par l'informatique, je me suis
		rapidement tourné vers des études dans l'ingénierie logicielle
		afin d'en découvrir un peu plus. C'est ainsi que j'ai
		découvert une nouvelle passion ! De la conception à la
		réalisation, un nouveau champ des possibles dont seule la
		créativité semble être la limite s'est ouvert à moi.
	</p>
	<p>
		Depuis, je me suis <strong
			>spécialisé dans le Développement Web</strong
		>, me permettant aussi bien de créer des interfaces
		utilisateurs que l'architecture permettant de stocker et
		délivrer les données dont ont besoin les clients/utilisateurs.
	</p>
	<p>
		Au fur et à mesure, je me suis rendu compte de l'importance de
		l'<strong>UX</strong>
		(Expérience Utilisateur) et notamment de l'<strong>UI</strong>
		(Interface Utilisateur) dans la réussite d'un projet. Ça tombe
		bien, encore quelque chose qui m'anime ! Ni une ni deux, je me
		suis formé à la <strong>Conception</strong> et au
		<strong>Design</strong> de projets informatiques, dans le but de
		pouvoir proposer un service complet à mes futurs clients.
	</p>
</section>

<style lang="scss">
	.def {
		.tooltip {
			display: none;
			position: absolute;
			font-weight: normal;
			background: $grey;
			padding: 1.5rem;
			@include br-300;
			@include ds-500;
		}
		&:hover {
			.tooltip {
				max-width: 90vw;
				display: block;
				@include min-tablet {
					max-width: 50rem;
				}
			}
		}
	}
</style>
