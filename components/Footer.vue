<template>
    <div class="pt-14 bg-zinc-100">
        <p class="px-10 pb-10 text-2xl font-semibold">Inspiration for future gateways</p>
        
        <div class="px-10 border-b border-b-gray-300">            
            <div class="flex items-center space-x-6 overflow-x-scroll border-b flex-nowrap border-b-gray-300 no-scrollbar">       
                <!-- <Icon name="uil:arrow-left" />      -->
                <div @click="selectedIndex = index" :class="[selectedIndex === index ? 'border-b-black' : 'border-b-transparent']" v-for="(option, index) in options" :key="index" class="pb-4 font-semibold text-gray-700 border-b text-nowrap">{{ option }}</div>
                <!-- <Icon name="uil:arrow-right"/> -->
            </div>
            
            <div class="grid grid-cols-1 gap-4 py-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">                
                <div v-for="i in 24" class="space-y-[2px]">                    
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

        <div class="flex justify-between px-10 py-7">
            <div class="flex space-x-3">                
                <p>&copy; 2024 Airbnb, inc.</p>.
                <p>Terms</p>.
                <p>Sitemap</p>.
                <p>Privacy</p>.
                <p>Your privacy Cookies</p>
            </div>
            
            <div class="flex items-center space-x-6">
                <p class="flex items-center space-x-2"><Icon name="uil:globe"  size="25px"/> English (US)</p>
                <p clas="flex items-center space-x-2"><Icon name="uil:facebook" size="25px"/> <span>USD</span></p>
                <div class="space-x-2">                    
                    <Icon name="uil:facebook"  size="25px"/>
                    <Icon name="uil:twitter"  size="25px"/>
                    <Icon name="uil:instagram"   size="25px"/>
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