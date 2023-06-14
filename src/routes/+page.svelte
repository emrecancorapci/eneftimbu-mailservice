<script>
	import Footer from '../components/Footer.svelte';
	import Links from '../components/Links.svelte';
	import Main from '../components/Main.svelte';
</script>

<div class="container-fluid root text-white">
	<div class="container">
		<div class="row" style="height:100vh">
			<div class="col align-self-center">
				<header>
					<div class="row justify-content-center m-4">
						<div class="col-auto">
							<img src="svg/logo.svg" alt="logo" class="img-fluid" />
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

<style>
	.ghost {
		height: 15vh;
	}

	.root {
		position: relative;
		min-height: 100vh;

		background: rgb(20, 20, 20);
		background: linear-gradient(
			180deg,
			rgba(15, 15, 15, 1) 0%,
			rgba(20, 20, 20, 0.95) 30%,
			rgba(20, 20, 20, 0.85) 75%,
			rgba(20, 20, 20, 0.7) 100%
		);
	}
</style>
