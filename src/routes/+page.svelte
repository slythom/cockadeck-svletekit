<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<form method="POST" action="?/search">
	<div class="mx-auto flex w-full max-w-sm flex-col gap-3 p-10">
		<Label for="quantity">quantity</Label>
		<Input type="number" name="quantity" placeholder="quantity" />
		<Label for="setcode">setcode</Label>
		<Input type="text" name="setcode" placeholder="setcode" />
		<Label for="collectornumber">collectornumber</Label>
		<Input type="text" name="collectornumber" placeholder="collectornumber" />
		<!-- <Label for="name">name</Label>
		<Input type="text" name="name" placeholder="name" />
		<Label for="image_uri">image_uri</Label>
		<Input type="text" name="image_uri" placeholder="image_uri" /> -->
        <Button type="submit">Go!</Button>
	</div>
</form>
<div>
    <h1>Liste des cartes récupérées depuis l'API</h1>
</div>