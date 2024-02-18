<template>
    <div class="rounded-[13px] m-auto w-[95%]">
        <div class="relative group h-[250px] screen-xs:h-[330px] screen-sm:h-[250px]">
            <img class="rounded-[13px] h-full" width="100%"  src="/img.jpg" alt="">
            <Icon class="absolute top-3 right-3" name="uil:heart" size="30px" color="white" />
            <div class="absolute p-1 px-2 text-sm font-semibold bg-white rounded-full top-3 left-3">{{ roomDetails.isFav }}</div>
            <Icon name="uil:arrow-circle-left" class="absolute top-[50%] left-4 translate-y-[-50%] group-hover:opacity-100 opacity-0" size="35px"  color="white" />
            <Icon name="uil:arrow-circle-right" class="absolute top-[50%] right-4 translate-y-[-50%] group-hover:opacity-100 opacity-0" size="35px"  color="white" />
        </div>
        
        <div class="space-y-[2px] pt-1">
            <div class="flex justify-between">
                <div class="font-semibold">{{ roomDetails.location }}</div>
                <div class="font-semibold"><Icon name="uil:star" color="gray" size="24px"/>{{ roomDetails.star }} 4.99</div>
            </div>
            <p class="text-gray-500">{{ roomDetails.stay }}</p>
            <p class="text-gray-500">{{ roomDetails.duration }}</p>
            <p class="pt-1"><span class="font-semibold ">{{ roomDetails.price }}</span>  night</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    roomDetails: Object,
})
</script>
