<template>
    <div class="grid grid-cols-1 screen-xs:grid-cols-[repeat(auto-fill,minmax(1fr,1fr))] screen-sm:grid-cols-[repeat(auto-fill,minmax(255px,1fr))] gap-8 gap-x-2 max-w-[2250px] px-2 screen-md:px-10 py-4">
        <Card v-for="index in 10" :key="index" :roomDetails="roomDetails"/>
        <Card class="hidden screen-md:block" v-for="index in 10" :key="index" :roomDetails="roomDetails"/>
        <Card class="hidden screen-lg:block" v-for="index in 20" :key="index" :roomDetails="roomDetails"/>
    </div>
</template>

<script setup>

const roomDetails = {
    'location': 'Nantes, France',
    'stay': 'Stay with Golwen',
    'start': '4.98',
    'duration': 'Feb 15 - 20',
    'price': '$88',
    'isFav': 'Guest Favourite',
}
</script>