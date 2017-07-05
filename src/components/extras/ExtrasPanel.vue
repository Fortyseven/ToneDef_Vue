<template>
    <div id="ExtrasPanel">
        <ul>
            <li>
                <router-link to="/extras/us" tag="button">
                    <div class="flag-icon flag-icon-us"></div> US</router-link>
            </li>
        </ul>
    </div>
</template>

<!-- ----------------------- -->
<script>
require("../../assets/images/flags/1x1/us.svg");
require("../../assets/images/flags/4x3/us.svg");

import Icon from 'vue-awesome';

export default {
    name: "ExtrasPanel",
    components: {
        Icon
    },
    data() {
        return {

        }
    }
};
</script>


<style>
.flag-icon-background {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
}

.flag-icon {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    width: 1.33333333em;
    line-height: 1em;
}

.flag-icon:before {
    content: "\00a0";
}

.flag-icon.flag-icon-squared {
    width: 1em;
}

.flag-icon-us {
  background-image: url(../../assets/images/flags/4x3/us.svg);
}
.flag-icon-us.flag-icon-squared {
  background-image: url(../../assets/images/flags/1x1/us.svg);
}


</style>