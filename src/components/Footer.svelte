<script>
	import Form from './Form.svelte';
</script>

<footer class="container-fluid text-white">
	<div class="container p-3">
		<div class="row p-3">
			<div class="col text-center">
				<h5>
					Projemiz ve NFT Dünyasındaki gelişmelerden haberdar olmak için bültenimize abone
					olabilirsiniz.
				</h5>
			</div>
		</div>
		<Form />
	</div>
</footer>

<style>
	footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 50%);
    backdrop-filter: blur(5px);
}
</style>
