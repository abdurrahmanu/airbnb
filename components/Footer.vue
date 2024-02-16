<template>
    <div class="pt-14 bg-zinc-100">
        <p class="px-20 pb-10 text-2xl font-semibold">Inspiration for future gateways</p>
        
        <div class="px-20 border-b border-b-gray-300">            
            <div class="flex space-x-6 border-b border-b-gray-300">            
                <div @click="selectedIndex = index" :class="[selectedIndex === index ? 'border-b-black' : 'border-b-transparent']" v-for="(option, index) in options" :key="index" class="pb-4 font-semibold text-gray-700 border-b">{{ option }}</div>
            </div>
            
            <div class="flex space-x-28 py-14">                
                <div v-for="i in 6" class="space-y-4">
                    <div class="space-y-4">                    
                        <div v-for="i in 3" :key="i" class="">
                            <p class="font-semibold">Canmore</p>
                            <p class="text-gray-600">Condo rentals</p>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        
        <div class="flex gap-20 px-20 py-10 border-b space-x-28 border-b-gray-300">
            <div v-for="(options, value, index) in settings" :key="index" class="space-y-4">
                <div class="font-semibold">{{ value }}</div>
                <div v-for="(option, index) in options" :key="index" class="hover:underline">{{ option }}</div>
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