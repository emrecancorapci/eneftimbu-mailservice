<script>
	const data = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/company/eneftimbu',
			img: 'svg/linkedin.svg'
		},
		{
			name: 'YouTube',
			link: 'https://www.youtube.com/@eneftimbu',
			img: 'svg/youtube.svg'
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/eneftimbu/',
			img: 'svg/instagram.svg'
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/eneftimbucom',
			img: 'svg/twitter.svg'
		},
		{
			name: 'Discord',
			link: 'https://discord.gg/fDT5NVdAgU',
			img: 'svg/discord.svg'
		}
	];
</script>

{#each data as { name, link, img }}
	<a class="p-2" target="_blank" rel="noreferrer noopener" href={link}>
		<img src={img} alt={name} class="img-fluid media-logo" />
	</a>
{/each}

<style lang="css">
	.media-logo {
		transition: all 0.1s ease-out;
	}

	.media-logo:hover {
		transform: scale(1.2);
	}
</style>
