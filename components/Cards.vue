<template>
    <div class="grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-w-[2250px] m-auto px-10 py-1">
        <Card v-for="index in 50" :key="index" :roomDetails="roomDetails"/>
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