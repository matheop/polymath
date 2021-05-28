<script>
	let quoteWidth: number;
</script>

<section class="global-container">
	<h1>&nbsp; Polymath &nbsp;</h1>

	<div class="intro">
		<p>
			Hey ! C'est moi, <strong>votre homme à tout faire</strong
			>,
			<em class="def"
				>Polymath <div
					bind:clientWidth={quoteWidth}
					class="bull"
					style="left: {quoteWidth} - 50%">
					<q>
						La polymathie est la connaissance approfondie
						d’un grand nombre de sujets différents, en
						particulier dans le domaine des arts et des
						sciences. Le substantif associé est polymathe,
						parfois également nommé « personne d'esprit
						universel » ou « génie universel ».</q>
					– Wikipédia
				</div></em
			>. Ou simplement <em>Math</em> en fait...
			<!-- Hey! I'm your polyvalent advisor, Polymath. Or just Math
				actually... -->
		</p>
		<p>
			Je suis étudiant-ingénieur en Informatique et Système
			d'Information à l'<u
				>Université de Technologie de Troyes</u>
			(Oui oui, c'est une école d'ingénieur bien que son nom puisse
			laisser en transparente autrement).
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
			Fortement intéressé et intrigué par l'informatique, je me
			suis rapidement tourné vers des études dans l'ingénierie
			logicielle afin d'en découvrir un peu plus. C'est ainsi
			que j'ai découvert une nouvelle passion ! De la conception
			à la réalisation, un nouveau champ des possibles dont
			seule la créativité semble être la limite s'est ouvert à
			moi.
		</p>
		<p>
			Depuis, je me suis spécialisé dans le développement web,
			me permettant aussi bien de créer des interfaces
			utilisateurs que l'architecture permettant de stocker et
			délivrer les données dont ont besoin les
			clients/utilisateurs.
		</p>
		<p>
			Au fur et à mesure, je me suis rendu compte de
			l'importance de l'<strong>UX</strong> (Expérience
			Utilisateur) et notamment de l'<strong>UI</strong>
			(Interface Utilisateur) dans la réussite d'un projet. Ça tombe
			bien, encore quelque chose qui m'anime ! Ni une ni deux, je
			me suis formé à la <strong>conception</strong> et au
			<strong>design</strong> de projets informatiques, dans le but
			de pouvoir proposer un service complet à mes futurs clients.
		</p>
	</div>

	<div class="grid">
		<div class="col-1">
			<h2>Conception & Ergonomie</h2>
			<p>
				Besoin d'un site vitrine pour votre activité, mais
				vous voulez quelque chose qui vous corresponde ? Après
				une prise de besoin détaillé, je conçois pour vous les
				designs tout en applicant les règles de rétention
				client pour les amener vers <mark>votre objectif</mark
				>. Bien sûr, toujours dans le
				<mark>respect de vos utilisateurs.</mark>
			</p>
		</div>
		<div class="col-2">
			<h2>Développement Web</h2>
			<p>
				Ca y est, vous avez vos designs pour votre site
				internet, mais il vous manque le développeur ? Pas
				cette fois ! Après que nous nous soyons mis d'accord
				sur le contenu de vote site web, je m'occupe aussitôt
				de le coder et de le mettre en ligne ! <u
					>Facile, non ?</u>
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@include my(5rem);
		@include py(4rem);
		border: solid 1px $black;

		h1,
		h2 {
			text-align: center;
			margin-bottom: 2rem;
		}
		h1 {
			position: relative;
			z-index: 1;
			overflow: hidden;

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
		}

		.intro {
			margin-bottom: 3rem;

			.def {
				position: relative;

				.bull {
					display: none;
					position: absolute;
					width: 50rem;
					background-color: $white;
					padding: 1.5rem;
					@include br-300;
					@include ds-300;
				}
				&:hover {
					.bull {
						display: block;
					}
				}
			}
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;

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
