<template>
  <footer class="bg-zinc-200 mx-auto py-8 px-10 space-y-4">
    <div class="border-b">
      <p class="font-bold py-2">Inspiration for future gateways</p>
     <div class="space-x-1 flex justify-between border-b border-b-gray-300">
     <span class="pb-2 text-gray-500" v-for="(section, index) in sections">{{section}}</span>
     </div>
   </div>
 
   <!-- First section -->
  <div>
    <div class="flex justify-center align-center">
      <div v-for="(option, key, index) in lists" :key="index">
      <div>{{key}}</div>
      <p>{{option}}</p>
      </div>
    </div>
  </div>

    <!-- Second Section -->
    <div class="border-b border-b-gray-300 flex justify-betweem">
        <div class="flex justify-between align-center">
      <div v-for="(options,key index) in opts" :key="index" class="w-fit">
      <div>{{key}}</div>
      <p v-for="(option, i) in options" :key="i">{{option}}</p>
      </div>
    </div>
    </div>

  <!-- Fourth Section -->
 <div>
  <div class="margin-auto">
   <p>
     <span><Icon /> English US</span>>
     <span><Icon/> USD</span>
     <Icon />
     <Icon />
     <Icon />
   </p>
   <p>
     <span>2024</span>>
     <span>Airbnb. inc</span>
     <Icon />
   </p>
    <p>
     <span>Terms</span>>
     <span>Privacy</span>
     <span>Sitemap</span>
     <span>Your Privavy Choices</span>
     <Icon />
   </p>
  </div>
 </div>
</footer>

</template>

<script setup>
const options = ['Popular','Arts and culture', 'Outdoors','Mountains','Beach','Uniwue Stays', 'Categories', 'Things to do', 'Airbnb friendly apartments']

const opts = {
'Supports':['Help Centre', 'Air Cover', 'Anti-discrimination', 'Disability Support', 'Cancelation Options', 'Report neighborhood concern'],
'Hosts':['Help Centre', 'Air Cover', 'Anti-discrimination', 'Disability Support', 'Cancelation Options', 'Report neighborhood concern'],
'Airbnb':['Help Centre', 'Air Cover', 'Anti-discrimination', 'Disability Support', 'Cancelation Options', 'Report neighborhood concern']
}

const lists = {
 1 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
2 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
3 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
 4 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
5 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
6 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
7 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
8 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
9 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
10 : {
   1 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
2 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
 }
 3 : {
   'Lake Martin': 'Apartment rentals',
   'Greer': 'Cabin rentals',
   'Norh rim': 'Vacation rentals',
   'Red rock': 'Vacation rentals'
  }
 }
}

</script>

<style lang="scss" scoped>
</style>