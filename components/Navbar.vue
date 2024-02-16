<template>
    <div class="w-full sticky top-0 bg-white z-[999]">
        <div :class="[!scrollAtStart ? 'shadow-sm shadow-gray-400' : '']"  class="mx-auto max-w-[2520px] pb-5">
            <div class="px-10 py-3 space-y-4 border-b">
                <header class="flex items-center justify-between">
                    <img src="/download.png" class="h-10"/>

                <div class="absolute left-[50%] translate-x-[-50%] top-">                    
                    <Transition v-if="!scrollAtStart">                     
                        <nav class="relative flex items-center px-10 m-auto rounded-full shadow-sm shadow-gray-500 w-fit text-nowrap">
                            <div v-for="(value, index) in listsArray" :class="{'w-[30%]' : index === 0 || index === 1 , 'w-[40%]' : index === 2, 'border-r' : index !== 2}" class=" hover:bg-gray-100 hover:rounded-full w-fit">
                                    <div :class="[index === 2 ? 'pr-20' :  '']" class="px-4 py-4 rounded-full">                                
                                        <p class="text-gray-500 w-fit">{{ value }}</p>
                                    </div>
                                </div>
        
                                <div class="absolute px-2 top-[50%] translate-y-[-50%] right-1">                            
                                    <div class="flex items-center justify-center bg-pink-600 rounded-full w-9 h-9">
                                        <Icon name="uil:search" color="white" />
                                    </div>
                                </div>
                        </nav>
                    </Transition>
                        
                        <div v-else class="flex self-center text-gray-500">
                            <div   class="p-2 rounded-full hover:bg-gray-100" v-for="(experience, index) in experiences" :key="index">{{ experience }}</div>
                        </div>
                </div>
                    
                    <div class="flex items-center gap-3">
                        <div class="p-1 px-2 rounded-full hover:bg-gray-100">Airbnb your home</div>
                        <Icon name="uil:globe" size="22px" />
                        <div class="flex items-center gap-4 p-1 px-2 border border-gray-400 rounded-full">
                            <Icon name="uil:home" color="black" size="20px"/>
                            <Icon name="uil:user" color="black" size="30px"/>
                        </div>
                    </div>
                </header>
        
                <Transition v-if="scrollAtStart">
                    <nav class="rounded-full  max-w-[950px] flex shadow-sm shadow-gray-500 m-auto items-center relative">
                            <div v-for="(value, key, index) in lists" :class="{'w-[50%]' : index === 0 || index === 3, 'w-[25%]' : index === 1 || index === 2, 'border-r' : index !== 3}" class=" hover:bg-gray-100 hover:rounded-full">
                                <div class="px-5 py-2 rounded-full">                                
                                    <p>{{ key }}</p>
                                    <p class="text-gray-500">{{ value }}</p>
                                </div>
                            </div>
                            
                            <div class="absolute px-[2px] top-[50%] translate-y-[-50%] right-2">                            
                                <div class="flex items-center justify-center w-[50px] h-[50px] bg-red-400 rounded-full">
                                    <Icon name="uil:search" color="white" size="18px"/>
                                </div>
                            </div>
                    </nav>
                </Transition>

            </div>
            
            <div class="px-10 pt-2">
                <div class="relative">
                    <div class="flex gap-8 overflow-x-scroll scroller">                
                        <div @click="selectIndex = index" v-for="(icon, name, index) in scrollerNav" :key="index" class="space-y-2 text-center border-b border-b-transparent">
                            <Icon :name="icon" size="25px" color="gray"/>
                            <div :class="[selectIndex === index ? 'underline text-black': ''] " class="text-gray-800 text-nowrap">{{name}}</div>
                        </div>
                    </div>
        
                    <div class="absolute top-0 right-0 flex items-center gap-2 py-1 pl-1 bg-white">
                        <div class="bg-gradient-to-r from-white via-white to-white px-1 right-[100%] absolute py-4">                            
                            <div class="flex items-center justify-center w-8 h-8 mr-3 text-center border border-gray-500 rounded-full ">
                                <Icon name="uil:arrow-right" />
                            </div>
                        </div>
                        <div class="p-3 space-x-3 bg-white border border-gray-300 rounded-md h-fit w-fit">
                            <Icon name="uil:filter" />
                            <span>Filters</span>
                        </div>
                        <div class="p-3 space-x-3 bg-white border border-gray-300 rounded-md">
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

</script>


<style scoped>
.scroller::-webkit-scrollbar {
  display: none;
}

.scroller {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>