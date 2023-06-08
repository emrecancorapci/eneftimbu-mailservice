<script>
	import Footer from '../components/Footer.svelte';
	import Links from '../components/Links.svelte';
	import Logo from '../components/Logo.svelte';
	import Main from '../components/Main.svelte';

	export const prerender = true;
</script>

<div class="container-fluid root text-white">
	<div class="container">
		<div class="row" style="height:100vh">
			<div class="col align-self-center">
				<header>
					<div class="row justify-content-center m-4">
						<div class="col-auto">
							<Logo />
						</div>
					</div>
					<div class="row my-2 justify-content-center">
						<div class="col-auto">
							<Links />
						</div>
					</div>
				</header>

				<main>
					<Main />
				</main>

				<div class="ghost" />
			</div>
		</div>
	</div>
</div>
<Footer />
<!-- Hi stranger :) -->
