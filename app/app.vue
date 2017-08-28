<template lang="pug">
app
    h1 this is misskey-id
    ul
        li
            router-link(to="/foo") go to foo
        li
            router-link(to="/bar") go to bar
    router-view(:bus='bus')
</template>

<script>
export default {
    props: ['bus']
}
</script>
