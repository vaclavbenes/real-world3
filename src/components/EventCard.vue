<template>
    <div class="event">
        <span class="text-gray-500">@ {{event?.time}} on {{event?.date}}</span>
        <h4 class="font-bold">{{event?.title}}</h4>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Event {
	type: string;
	date: string;
	title: string;
	time: string;
}

export default defineComponent({
	props: {
		event: Object as PropType<Event>,
	},
	setup() {},
});
</script>



<style lang="postcss">
.event {
	@apply w-1/4 h-1/6 mx-auto border border-gray-700 text-center px-2 py-3 my-2;
}
</style>