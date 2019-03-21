<template>
    <div class="emailMain bottomBox posA allBox">
        <div class="leftBox posA allBox">
            <router-link active-class="on" :to="{name:'inboxe'}">收件箱</router-link>
            <router-link active-class="on" :to="{name:'outboxe'}">发件箱</router-link>
            <router-link active-class="on" :to="{name:'draftse'}">草稿箱</router-link>
        </div>
        <div class="rightBox posA allBox">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
