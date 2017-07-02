<template>
    <div class="links">
        <router-link to="/dtmf">DTMF</router-link> |
        <router-link to="/bluebox">BlueBox</router-link>
    </div>
</template>

<script>
export default {
    name: "links",
    data() {
        return {

        };
    }
}
</script>

<style lang="scss" scoped>
.links {
    background: grey;
    color: white;
    height: 1em;
    line-height: 1em;
    padding: 0.5em;
    padding-left: 1em;
    a {
        font-weight: bold;
    }
}
</style>