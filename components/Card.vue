<template>
    <div class="rounded-[13px]">
        <div class="relative">
            <img class="rounded-[13px]" height="120%" width="100%"  src="/img.jpg" alt="">
            <div class="absolute top-3 right-3">like</div>
            <div class="absolute top-3 left-3">guest tag</div>
           <div v-for="(img, index) in imgs" :key="index" :class=[index === 2 ? "bg-blue": ""] :style="{height: index + 1 + 'px'; width: index + 1 + 'px'}" class="rounded-full absolute bottom-3 left-[50%] translate-x-[-50%]"></div>
        </div>
        <div class="space-y-1">
            <div class="flex justify-between">
                <div class="font-bold">Torino, italy</div>
                <div>4.88</div>
            </div>
            <p>Stay with Carmela - Hosting for 8 years</p>
            <p>Feb 14 - 19</p>
            <p><span class="font-bold pt-1">75</span> night</p>
        </div>
    </div>
</template>

<script setup>
const imgs = 5
</script>

<style lang="scss" scoped>

</style>