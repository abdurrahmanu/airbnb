<template>
    <div class="w-full fixed top-0 bg-white z-[999]">
        <div class="mx-auto max-w-[2520px] px-10 pb-2">
            <div class="space-y-4 border-b py-3">
                <header class="flex justify-between items-center">
                    <div class="text-lg">
                        <Icon />
                        airbnb
                    </div>
                    <div class="flex gap-2 text-gray-500">
                        <div class="hover:bg-gray-100 rounded-full p-2" v-for="(experience, index) in experiences" :key="index">{{ experience }}</div>
                    </div>
                    <div class="flex gap-2 items-center">
                        <div class="hover:bg-gray-100 p-1">Airbnb your home</div>
                        <div class="w-3 h-3 rounded-full bg-black"></div>
                        <div class="p-[5px] px-2 flex  rounded-full items-center gap-2 border border-gray-400">
                            <div class="w-3 h-3 bg-gray-400"></div>
                            <div class="h-5 w-5 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </header>
        
                <nav class="rounded-full    py-2 max-w-[850px] w-[90%] flex px-2 shadow-sm shadow-gray-500 m-auto basis-full items-center ">
                        <div v-for="(value, key, index) in lists" class="p-2 py-1 basis-full hover:rounded-full border-r hover:bg-gray-200">
                            <div class=" px-3">
                                <p>{{ key }}</p>
                                <p class="text-gray-400">{{ value }}</p>
                            </div>
                        </div>
    
                    <div class=" ml-3 p-2 bg-red-300 rounded-full">
                        <Icon />
                    </div>
                </nav>
    
                <nav class="rounded-full  flex p-1 shadow-sm shadow-gray-500 w-fit m-auto items-center py-2">
                    <div v-for="(item, index) in listsArray" :key="index" class="text-gray-500 p-2 py-1 border-r border-r-gray-400 hover:bg-gray-200 hover:rounded-full">
                        <div class="px-4">
                            {{ item }}
                        </div>
                    </div>    

                    <div class=" ml-3 p-1 bg-red-300 rounded-full">
                        <Icon />
                    </div>
                </nav>
            </div>
            
            <div class="py-3">
                <div class="relative">
                    <div class="flex overflow-x-scroll gap-5">                
                        <div v-for="i in 40" :key="i">
                            <Icon />
                            <div :class="[true ? 'border-b border-b-black' : '']" class="text-gray-400">{{name}} name</div>
                        </div>
                    </div>
        
                    <div class="flex items-center gap-2 py-1 absolute right-0 top-0 bg-white pl-3">
                        <div class="border border-gray-300 rounded-md p-2 h-fit w-fit">
                            <Icon />
                            <span>Filters</span>
                        </div>
                        <div class="border border-gray-300 rounded-md p-2">
                            <span>Display total before taxes</span>
                            <Icon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const experiences = ['Stays', 'Experiences', 'Online Experiences']

const lists = {
    'where': 'Search Destinations',
    'Check in': 'Add dates',
    'Check out': 'Add dates',
    'Who': 'Add guests'
}

const listsArray = ['Anywhere', 'Any week', 'Add guests']
</script>
