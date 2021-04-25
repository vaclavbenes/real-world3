<template>
    <div class="event">
        <span class="text-gray-500">@ {{event?.time}} on {{event?.date}}</span>
        <h4 class="font-bold">{{event?.title}}</h4>
    </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, PropType, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { getEvent } from "../services";

export interface Event {
	id: number;
	type: string;
	date: string;
	title: string;
	time: string;
}

export default defineComponent({
	props: {
		event: Object as PropType<Event>,
	},
	setup(props: any) {
		const route: any = useRoute();
		let event: Ref<any> = ref("");

		onMounted(async () => {
			const res = await getEvent(route.params.id);
			event.value = res.data;
		});

		return { event };
	},
});
</script>



<style lang="postcss">
.event {
	@apply w-1/4 h-1/6 mx-auto border border-gray-700 text-center px-2 py-3 my-2;
}
</style>