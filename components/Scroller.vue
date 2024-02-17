<script setup>
const scrollEl = ref(null)
const disableLeftArrow = ref(true)
const disableRightArrow = ref(true)
const props = defineProps({    
    distance : String
})

function scroll (direction) {
    
    if (direction === 'left') {
        if (scrollEl.value.scrollHeight - scrollEl.value.scrollTop === scrollEl.value.clientHeight){
            disableLeftArrow.value = true
        }
        scrollEl.value.scrollLeft + 100
    } else {
        if (element.scrollHeight - element.scrollTop === element.clientHeight){
            disableRightArrow.value = true
        }
        scrollEl.value.scrollLeft - 100
    }
}
</script>

<template>
    <div class="flex items-center space-x-3 w-fit scroll-smooth">
        <div :class="[disableLeftArrow ? 'opacity-0' : 'opacity-100']" class="hidden w-fit h-fit hover:block">            
            <Icon @click="scroll('left')" name="uil:arrow-circle-left" />
        </div>
        <div ref="scrollEl">
            <slot />
        </div>
        <div :class="[disableRightArrow ? 'opacity-0' : 'opacity-100']" class="hidden hover:block h-fit w-fit">            
            <Icon @click="scroll('right')" name="uil:arrow-circle-down" />
        </div>
    </div>
</template>