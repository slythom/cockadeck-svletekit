<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from "$lib/components/ui/card/index.js";
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	// import type { card } from '$lib/server/db/schema';
	let { form, data } = $props();
</script>

<form method="POST" action="?/search">
	<div class="mx-auto flex w-full max-w-sm flex-col gap-3 p-10 shadow-lg">
		<Label for="quantity">Quantity</Label>
		<Input type="number" name="quantity" placeholder="quantity" />
		<Label for="setcode">Set Code</Label>
		<Input type="text" name="setcode" placeholder="setcode" />
		<Label for="collectornumber">Collector Number</Label>
		<Input type="text" name="collectornumber" placeholder="collectornumber" />

		<Button type="submit">Search...</Button>
	</div>
</form>
<div class="p-10">
	<h1>Found card:</h1>
	{#if form?.success && form?.card}
		<ul>
			<li>
				<form method="POST" action="?/save">
					{form.card?.name} - {form.quantity} - {form.card?.set} - {form.card?.collector_number}
					<img src={form.card?.image_uris.small} alt={form.card?.name} />
					<Input type="hidden" value={form.card?.name} name="name" />
					<Input type="hidden" value={form.quantity} name="quantity" />
					<Input type="hidden" value={form.card?.set} name="setcode" />
					<Input type="hidden" value={form.card?.collector_number} name="collectornumber" />
					<Input type="hidden" value={form.card?.image_uris.small} name="image_uri" />

					<Button type="submit" class="mt-4">Add to my deck</Button>
				</form>
			</li>
		</ul>
	{/if}
	 {#if form?.success && !form?.card}
    <p>Successfully saved!</p>
  {/if}
</div>

<div class="p-10 mx-auto">
<h1 class="mb-4">My deck</h1>

<div class="grid grid-cols-6">
	{#each data.rows as row}

<Card.Root class="shadow-2xl border-none">
  <Card.Header>
    <Card.Title>{row.name}</Card.Title>
    <Card.Description>Quantity: {row.quantity}</Card.Description>
  </Card.Header>
  <Card.Content>
    <img src="{row.image_uri}" alt="{row.name}" />
  </Card.Content>
  <Card.Footer>
    <p class="text-xs">#{row.collectornumber} / {row.setcode}</p>
  </Card.Footer>
</Card.Root>
  {/each}


<form method="POST">
  <button name="export" formaction="?/export">Exporter</button>
</form>

</div>
</div>
