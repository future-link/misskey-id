<template lang="pug">
p hoge
</template>

<script>
export default {
    props: ['bus'],
    mounted() {
        setTimeout(() => {
            this.bus.$emit('title', 'gggggg')
        }, 1000)
    }
}
</script>

