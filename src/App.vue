<template>
    <div class="container mx-auto">
        <div class="flex justify-center space-x-2">
            <router-link to="/" class="underline text-blue-400">Events</router-link>
            <router-link to="/about" class="underline text-blue-400">About</router-link>
        </div>

        <router-view />
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
});
</script>

