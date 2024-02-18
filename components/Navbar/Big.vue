<template>
    <div class="w-full sticky top-0 bg-white z-[999] screen-md:block hidden">
        <div :class="[!scrollAtStart ? 'shadow-sm shadow-gray-400' : '']"  class="mx-auto max-w-[2520px] pb-1">
            <div class="px-10 pt-6 pb-5 space-y-8 border-b screen-lg:h-fit screen-lg:space-y-[-40px]">
                <header class="flex items-center justify-between">
                    <img src="/download.png" class="hidden h-10 screen-lg:block"/>
                    <img src="/download (1).png" class="h-10 screen-lg:hidden" />
                    <div class="absolute left-[50%] translate-x-[-50%] screen-md:block hidden">                    
                    </div>
                    
                    <div class="flex items-center gap-3">
                        <div class="p-1 px-2 font-semibold rounded-full hover:bg-gray-100">Airbnb your home</div>
                        <Icon name="uil:globe" size="22px" />
                        <div class="flex items-center gap-4 p-1 px-2 border border-gray-400 rounded-full">
                            <Icon name="uil:home" color="black" size="20px"/>
                            <Icon name="uil:user" color="black" size="30px"/>
                        </div>
                    </div>
                </header>
        
                <Transition v-if="scrollAtStart">
                    <div class="relative space-y-6">
                        <div class="flex m-auto text-center text-gray-500 w-fit">
                            <div   class="p-2 text-lg rounded-full hover:bg-gray-100" v-for="(experience, index) in experiences" :key="index">{{ experience }}</div>
                        </div>
                    
                    <nav class="rounded-full  max-w-[950px] shadow-sm shadow-gray-500 m-auto items-center relative flex">
                            <div v-for="(value, key, index) in lists" :class="{'w-[50%]' : index === 0 || index === 3, 'w-[25%]' : index === 1 || index === 2,}" class="p-2 hover:bg-gray-100 hover:rounded-full group peer">
                                <div :class="[index === 0 ? 'border-l-0' : '']"   class="px-3 border-l group-hover:border-l-0 whitespace-nowrap peer-hover:border-l-5">                                
                                    <p class="whitespace-nowrap">{{ key }}</p>
                                    <p class="text-gray-500 whitespace-nowrap">{{ value }}</p>
                                </div>
                            </div>
                            
                            <div class="absolute px-[2px] top-[50%] translate-y-[-50%] right-2">                            
                                <div class="flex items-center justify-center w-[50px] h-[50px] bg-red-400 rounded-full">
                                    <Icon name="uil:search" color="white" size="18px"/>
                                </div>
                            </div>
                    </nav>
                    </div>
                </Transition>

                <Transition v-else>                     
                            <nav class="relative flex items-center m-auto rounded-full shadow-sm shadow-gray-500 w-fit text-nowrap">
                                <div v-for="(value, index) in listsArray" :key="index" :class="{'w-[30%]' : index === 0 || index === 1 , 'w-[40%]' : index === 2}" class="p-3 hover:bg-gray-100 hover:rounded-full w-fit">
                                        <div :class="[index === 2 ? 'pr-20' :  '']" class="px-2 rounded-full">                                
                                            <p class="text-gray-500 whitespace-nowrap w-fit">{{ value }}</p>
                                        </div>
                                    </div>

                                    <div class="absolute px-1 top-[50%] translate-y-[-50%] right-1">                            
                                        <div class="flex items-center justify-center bg-pink-600 rounded-full w-9 h-9">
                                            <Icon name="uil:search" color="white" />
                                        </div>
                                    </div>
                            </nav>
                        </Transition>
            </div>

            <div class="relative px-10 py-2 sm:px-6">
                    <div class="px-10">       
                        <Icon v-if="!disableLeftArrow" @click="scroll('left')" name="uil:arrow-circle-left"  size="26px" color="gray" class="absolute top-[50%] translate-y-[-50%]"/>
                        <div ref="scrollEl" class="flex items-center gap-5 overflow-x-scroll no-scrollbar w-[80%] scroll-smooth">                       
                            <div @click="selectIndex = index" v-for="(icon, name, index) in scrollerNav" :key="index" class="space-y-[5px] text-center border-b border-b-transparent">
                                <Icon :name="icon" size="22px" color="gray"/>
                                <div :class="[selectIndex === index ? 'underline text-black': ''] " class="text-gray-800 whitespace-nowrap text-[14px] text-nowrap">{{name}}</div>
                            </div>
                        </div>
                        
                        <div class="absolute top-0 bottom-0 flex items-center gap-2 pl-3 bg-white right-10 w-fit">
                            <div class="absolute top-0 bottom-0 right-[100%] w-10 bg-gradient-to-r from-transparent via-white to-white">
                                <Icon v-if="!disableRightArrow" @click="scroll('right')" name="uil:arrow-circle-right"  size="26px" color="gray" class="absolute top-[50%] translate-y-[-50%]"/>
                            </div>
                            <div class="hidden p-3 space-x-3 bg-white border border-gray-300 rounded-md h-fit w-fit screen-md:block">
                                <Icon name="uil:filter" />
                                <span>Filters</span>
                            </div>
                            <div class="hidden p-3 space-x-3 bg-white border border-gray-300 rounded-md screen-md:block">
                                <span>Display total before taxes</span>
                                <Icon name="uil:filter" />
                            </div>
                    </div>
                    </div>
                        
            </div>
        </div>
    </div>
</template>


<script setup>
const disableLeftArrow = ref(false)
const disableRightArrow = ref(false)
const scrollEl = ref(null)
const experiences = ['Stays', 'Experiences', 'Online Experiences']
const selectIndex = ref(0)

watchEffect(() => console.log(selectIndex.value))

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

const scrollAtStart = ref(true)
const scrollItems = {
    'home': 'uil:home'
};

const lists = {
    'where': 'Search Destinations',
    'Check in': 'Add dates',
    'Check out': 'Add dates',
    'Who': 'Add guests'
}

const listsArray = ['Anywhere', 'Any week', 'Add guests']

onMounted(() => {
    window.addEventListener('scroll' , (event) => {
        if (scrollY === 0) {
            scrollAtStart.value = true
        } else {
            scrollAtStart.value = false
        }
    })
})



function scroll (direction) {    
    if (direction === 'left') {
        if (scrollEl.value.scrollWidth - scrollEl.value.scrollLeft === scrollEl.value.clientLeft){
            disableRightArrow.value = true
        }
        disableRightArrow.value = false
        scrollEl.value.scrollLeft -= 500
    } 
    else {
        if (scrollEl.value.scrollWidth - scrollEl.value.scrollLeft === scrollEl.value.clientWidth){
            disableLeftArrow.value = true
        }
        disableLeftArrow.value = false
        scrollEl.value.scrollLeft += 500
    }
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