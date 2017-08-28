<template lang="pug">
title {{title}}
</template>

<script>
export default {
    props: ['bus'],
    data() {
        return {
            title: ''
        }
    },
    created () {
        this.bus.$on('title', (title) => {
            this.title = title
        })
    }
}
</script>
