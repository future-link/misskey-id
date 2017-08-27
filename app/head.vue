<template lang="pug">
title {{name}}
</template>

<script>
export default {
    data () {
        return {
            name: `yo app ${Math.round(Math.random() * 1000)}`
        }
    }
}
</script>
