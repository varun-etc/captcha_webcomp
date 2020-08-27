<script context="module">
	import { defineCustomElements } from '@se/web-ui/loader';
	import './components/components.module.js';
	defineCustomElements(window);

	export const label = {
		title: "Was this helpful?",
		yes: "Yes",
		no: "No",
		commentTitle: "What can we do to improve?",
		commentSubmit: "Submit",
		successMsg: "Thank you for your feedback"
	};		
</script>

<h1>SE Comment</h1>
<svelte:component this={page} params={params}/>


