<template>
<div>
    <g-image alt="Logo" :src="node.hero" width="200" class="w-full block" />
    <div class="absolute w-full h-full inset-0 bg-pink flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <div class="text-center font-body font-semibold text-xl">{{node.title}}</div>
    </div>
</div>
</template>

<script>
export default {
    props: [ 'node' ]
    
}
</script>