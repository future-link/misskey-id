<template lang="pug">
h1 OMG! there are no contents...
</template>

<script>
export default {
    props: ['bus'],
    mounted() {
        this.bus.$emit('title', 'THE 404...')
    }
}
</script>

