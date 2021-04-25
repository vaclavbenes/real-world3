<template>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
</template>


<script lang="ts">
import { defineComponent, onMounted, PropType, Ref, ref } from "vue";
import { getEvents } from "../services";
import EventCard from "./EventCard.vue";

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
	components: {
		EventCard,
	},
	setup() {
		let events: Ref<any[]> = ref([]);

		onMounted(async () => {
			const res = await getEvents();
			events.value = res.data;
			console.log(events.value);
		});

		return { events };
	},
});
</script>



<style lang="postcss">
.event {
	@apply w-1/4 h-1/6 mx-auto border border-gray-700 text-center px-2 py-3 my-2;
}
</style>