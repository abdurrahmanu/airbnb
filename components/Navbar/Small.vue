<template>
    <div class="sticky top-0 left-0 w-full screen-md:hidden bg-white z-[999] shadow-sm shadow-gray-400 pb-2">
        <div class="relative flex items-center px-4 py-5 space-x-3 sm:px-6 md:px-10 md:hidden">
                <div class="p-2 px-4 rounded-full shadow-sm shadow-gray-600 w-[93%] relative flex items-center space-x-5">
                    <div><Icon name="uil:search" size="20px"/></div>
                    <div class="space-y-[2px]">
                        <div>Anywhere</div>
                        <div class="space-x-1 text-xs text-gray-500"><span>Any week</span>.<span>Add guest</span></div>
                    </div>
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded-full shadow-sm shadow-black">
                    <Icon name="uil:filter" size="20px"/>
                </div>
            </div>
            <div class="relative flex w-full px-3 space-x-8 overflow-x-scroll no-scrollbar">                
                <div @click="selectIndex = index" v-for="(icon, name, index) in scrollerNav" :key="index" class="space-y-2 text-center border-b border-b-transparent ">
                    <Icon :name="icon" size="25px" color="gray"/>
                    <div :class="[selectIndex === index ? 'underline text-black': ''] " class="text-gray-800 text-nowrap whitespace-nowrap text-[14px]">{{name}}</div>
                </div>
            </div>
    </div>
</template>

<script setup>
const selectIndex = ref(0)

const scrollerNav = {
    'Amazing views': 'uil:home',
    'Castles': 'uil:home',
    'New': 'uil:home',
    'National Parks':'uil:home',
    'Earth Homes': 'uil:home',
    'Boats': 'uil:home',
    'Trending': 'uil:home',
    'Rooms': 'uil:home',
    'Beach': 'uil:home',
    'Tiny homes': 'uil:home',
    'Design': 'uil:home',
    'Bed and Breakfasts': 'uil:home',
    'Cabins': 'uil:home',
    'Arctic': 'uil:home',
    'Campers': 'uil:home',
    'Island': 'uil:home',
    'Amazing pools': 'uil:home',
    'OMG!' : 'uil:home',
    'Surfing': 'uil:home',
    'Caves': 'uil:home',
    'Tropical': 'uil:home',
    'Iconic cities': 'uil:home',
    'Countryside': 'uil:home',
    'Lake front': 'uil:home',
    'Lake': 'uil:home',
    'A frames': 'uil:home',
    'Mansions': 'uil:home',
    'Farms': 'uil:home',
    'Camping': 'uil:home',
    'Vineyards': 'uil:home',
    'Historical homes': 'uil:home',
    'Luxe': 'uil:home',
    'Golfing': 'uil:home',
    'Hanoks': 'uil:home',
    'Top of the world': 'uil:home',
    'Skiing': 'uil:home',
    'Cycladic homes': 'uil:home',
    'Windmills': 'uil:home',
    'Chefs chiken': 'uil:home',
}

</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>