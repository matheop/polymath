<script>
	import Typewriter from "$lib/Typewriter.svelte";

	interface Project {
		col: number;
		title: string;
		logo: string;
		url: string;
	}

	const projects: Project[] = [
		{
			col: 1,
			title: "Workingoo",
			logo: "/logo-workingoo.jpg",
			url: "https://www.workingoo.com/",
		},
		{
			col: 2,
			title: "MAP",
			logo: "/logo-map.png",
			url: "https://www.mesaidespubliques.fr/",
		},
		{
			col: 3,
			title: "Apparelo",
			logo: "/logo-apparelo.png",
			url: "https://www.apparelo.com/",
		},
	];
</script>

<div class="title section-title">
	<Typewriter chars={14} speed={2.8} title={"Collaborations"} />
</div>
<section class="grid cols-3">
	{#each projects as p}
		<div class="col-{p.col}">
			<h3 class="title">
				{p.title}
			</h3>
			<a rel="noopener" href={p.url} target="_blank">
				<i>
					<img
						class:isMap={p.logo === "/logo-map.png"}
						src={p.logo}
						alt={p.title} />
				</i>
			</a>
		</div>
	{/each}
</section>

<style lang="scss">
	i {
		@include flex;
		margin: auto;
		text-align: center;
		width: 50vw;
		height: 50vw;
		overflow: hidden;
		background: linear-gradient(
			31.88deg,
			#4696d7 15.76%,
			#4fa0e2 58.18%,
			#5ab5ff 97.48%
		);

		@include br-500;
		@include ds-500;
		@include transition($transition);

		@include min-tablet {
			width: 10rem;
			height: 10rem;
		}

		&:hover {
			transform: scale(1.05);
			@include ds-700;
			@include transition($transition);
		}

		img {
			width: 100%;
			object-fit: cover;

			&.isMap {
				max-width: 70%;
			}
		}
	}
</style>
