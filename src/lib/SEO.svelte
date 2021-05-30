<script>
	import { getImageMimeType } from "$utils/file";

	export let title = "Polymath | Freelance Polyvalent";
	export let description =
		"Polymath, votre Designer et votre Développeur, le tout en 1 !";
	export let url = "https://poly-math.dev";
	export let image = "https://poly-math.dev/logo-polymath.png";
	export let imageType = null;
	export let type = "website";
	export let locale = "fr_FR";
	export let localeAlternate = null; //ex: en_US
	export let twitterAccount = null; //ex: @bobby_12

	if (image && !imageType) {
		imageType = getImageMimeType(image);
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	{#if imageType}
		<meta property="og:image:type" content={imageType} />
	{/if}
	<meta property="og:locale" content={locale} />
	{#if localeAlternate}
		<meta
			property="og:locale:alternate"
			content={localeAlternate} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	{#if twitterAccount}
		<meta property="twitter:site" content={twitterAccount} />
	{/if}
</svelte:head>
