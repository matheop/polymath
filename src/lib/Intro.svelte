<script>
	import { isPhone } from "$stores/media";
	let quoteWidth: number;
</script>

<div class="intro">
	<p>
		Hey ! C'est moi, <strong>votre homme à tout faire</strong>,
		<a
			target="_blank"
			rel="noopener"
			href="https://fr.wikipedia.org/wiki/Polymathie#:~:text=La%20polymathie%20est%20la%20connaissance,%C2%BB%20ou%20%C2%AB%20g%C3%A9nie%20universel%20%C2%BB."
			class="def"
			>Polymath <div
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
			</div></a
		>. Ou simplement
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
		(Oui oui, c'est une école d'ingénieur bien que son nom puisse laisser
		en transparaitre autrement).
	</p>
	<p>
		Je suis également
		<strong>"Designer"</strong>
		(mais je préfère le terme "Ergonome") et
		<strong>Développeur</strong>
		en <strong>Freelance spécialisé dans le web</strong>.
		<!-- I'm a 22-year-old software engineer and also a designer and
					web developer freelance. -->
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
		Depuis, je me suis spécialisé dans le développement web, me
		permettant aussi bien de créer des interfaces utilisateurs que
		l'architecture permettant de stocker et délivrer les données
		dont ont besoin les clients/utilisateurs.
	</p>
	<p>
		Au fur et à mesure, je me suis rendu compte de l'importance de
		l'<strong>UX</strong>
		(Expérience Utilisateur) et notamment de l'<strong>UI</strong>
		(Interface Utilisateur) dans la réussite d'un projet. Ça tombe
		bien, encore quelque chose qui m'anime ! Ni une ni deux, je me
		suis formé à la <strong>conception</strong> et au
		<strong>design</strong> de projets informatiques, dans le but de
		pouvoir proposer un service complet à mes futurs clients.
	</p>
</div>

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
