<template>
    <div class="pt-6 sm:pt-14 bg-zinc-100">
        <p class="px-10 pb-10 text-2xl font-semibold">Inspiration for future gateways</p>
        
        <div class="px-10 border-b border-b-gray-300">            
            <div class="flex items-center space-x-6 overflow-x-scroll border-b flex-nowrap border-b-gray-300 no-scrollbar">       
                <!-- <Icon name="uil:arrow-left" />      -->
                <div @click="selectedIndex = index" :class="[selectedIndex === index ? 'border-b-black' : 'border-b-transparent']" v-for="(option, index) in options" :key="index" class="pb-4 font-semibold text-gray-700 border-b text-nowrap whitespace-nowrap">{{ option }}</div>
                <!-- <Icon name="uil:arrow-right"/> -->
            </div>
            
            <div class="grid grid-cols-1 gap-4 py-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">                
                <div v-for="i in 8" class="space-y-[2px]">                    
                        <p class="font-semibold">Canmore</p>
                        <p class="text-gray-600">Condo rentals</p>
                </div>            
                <div v-for="i in 4" class="space-y-[2px] screen-md:block hidden">                    
                        <p class="font-semibold">Canmore</p>
                        <p class="text-gray-600">Condo rentals</p>
                </div>             
                <div v-for="i in 4" class="space-y-[2px] screen-lg:block hidden">                    
                        <p class="font-semibold">Canmore</p>
                        <p class="text-gray-600">Condo rentals</p>
                </div>         
            </div>
        </div>
        
        <div class="flex-row px-10 border-b border-b-transparent md:flex py-7 md:space-x-28 md:border-b-gray-300">
            <div v-for="(options, value, index) in settings" :key="index" class="py-5 space-y-4 border-b border-b-gray-300 md:border-b-0 ">
                <div class="font-semibold">{{ value }}</div>
                <div v-for="(option, index) in options" :key="index" class="hover:underline w-fit">{{ option }}</div>
            </div>
        </div>

        <div class="flex-row-reverse items-center px-10 py-2 md:py-5 screen-lg:justify-between screen-lg:flex text-[15px] space-y-4">
            <div class="flex items-center space-x-3 md:m-auto screen-lg:space-x-8 screen-lg:m-0 w-fit">                    
                <p>
                    <Icon name="uil:globe"  size="20px"/> 
                    <span class="px-2">English (US)</span>
                </p>
                <p>
                    <Icon name="uil:home" size="20px"/>
                    <span class="px-2">USD</span>
                </p>
                <div class="flex gap-x-3">                    
                    <Icon name="uil:facebook"  size="20px"/>
                    <Icon name="uil:twitter"  size="20px"/>
                    <Icon name="uil:instagram"   size="20px"/>
                </div>
            </div>
            
            <div class="md:m-auto screen-lg:m-0 space-y-[2px] w-fit screen-lg:flex items-center">    
                <p class="pr-2 text-center md:mx-auto w-fit">&copy; 2024 Airbnb, inc.</p>
                <div class="gap-4 screen-sm:flex">                    
                    <p>Terms</p>
                    <p>Sitemap</p>
                    <p>Privacy</p>
                    <p>Your privacy Cookies <span class="inline-block h-4 bg-blue-400 rounded-full w-9"></span></p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const selectedIndex  = ref(0)

const options = ['Popular', 'Arts and Cultures', 'Outdoors', 'Mountains', 'Beach', 'Unique Stays', 'Categories', 'Things to do', 'Airbnb friendly apartments']

const use = {
    'Canmore': 'Condo rentals'
}

const settings = {
    'Support': ['Help center', 'Aircover', 'Anti-discrimination', 'Disability support', 'Cancellation Options', 'Report neighbourhood concern'],
    'Hosting': ['Airbnb your home', 'Aircover for hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly', 'Airbnb-friendly apartments'],
    'Airbnb': ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift Cards', 'Airbnb.org emergency stays']
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