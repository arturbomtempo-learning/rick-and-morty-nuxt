<script setup>
const props = defineProps({
    locations: Array,
});
</script>

<template>
    <div class="grid w-full gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        <LocationCard
            v-for="currentLocation of locations"
            :key="currentLocation.id"
            :id="currentLocation.id"
            :name="currentLocation.name"
            :type="currentLocation.type"
        />
    </div>
</template>
