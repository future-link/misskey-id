<template lang="pug">
title {{stitle}}
</template>

<script>
export default {
    props: ['title', 'bus'],
    data() {
        return {
            stitle: this.title
        }
    },
    created () {
        this.bus.$on('title', (title) => {
            this.stitle = title
        })
    }
}
</script>
