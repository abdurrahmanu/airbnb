<template>
    <!-- <div class="bg-blue-400 dark:bg-emerald-500" :class="[darkmodeStore.toggleDarkMode]">
        DarkMode toggle
    </div>

    <div @click="toggle">toggleDarkMode</div> -->
    <div class="pt-[260px] m-auto relative">        
        <Navbar />
        <Cards />
        <Footer />
    </div>
</template>

<script setup>
// const darkmodeStore = useDarkMode()

// const toggle = () => {
//     darkmodeStore.darkMode = !darkmodeStore.darkMode
//     localStorage.setItem('portfolioBgMode', darkmodeStore.darkMode)
// }

// onBeforeMount(() => {
//     darkmodeStore.checkLocalStorageForSavedBackground()
// })
</script>

