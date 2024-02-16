<template>
    <div class="rounded-[13px] max-w-[300px] m-auto">
        <div class="relative group">
            <img class="rounded-[13px] h-[250px]" width="100%"  src="/img.jpg" alt="">
            <Icon class="absolute top-3 right-3" name="uil:heart" />
            <div class="absolute p-1 px-2 bg-white rounded-full top-3 left-3">{{ roomDetails.isFav }}</div>
            <div v-for="index in 5" :key="index">                
                <Icon class="absolute bottom-3 left-[50%] translate-x-[-50%]" name="uil:circle"  color="white"/>
            </div>
            <Icon name="uil:arrow-circle-right" class="absolute top-[50%] right-4 translate-y-[-50%] group-hover:opacity-100 opacity-0" size="35px"  color="black" />
        </div>
        
        <div class="space-y-[2px]">
            <div class="flex justify-between">
                <div class="font-semibold">{{ roomDetails.location }}</div>
                <div><Icon name="uil:star" color="black" />{{ roomDetails.star }}</div>
            </div>
            <p class="text-gray-500">{{ roomDetails.stay }}</p>
            <p class="text-gray-500">{{ roomDetails.duration }}</p>
            <p><span class="pt-1 font-semibold">{{ roomDetails.price }}</span>night</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    roomDetails: Object,
})
</script>

<style lang="scss" scoped>

</style>