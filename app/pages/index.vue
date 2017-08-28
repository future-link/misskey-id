<template lang="pug">
p hoge
</template>

<script>
export default {
    props: ['bus'],
    mounted() {
        this.bus.$emit('title', 'this is hoge!')
    }
}
</script>

