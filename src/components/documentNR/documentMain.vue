<template>
    <div class="documentMain bottomBox posA allBox">
        <div class="leftBox posA allBox">
            <router-link active-class="on" :to="{name:'inbox'}">收件箱</router-link>
            <router-link active-class="on" :to="{name:'outbox'}">发件箱</router-link>
            <router-link active-class="on" :to="{name:'drafts'}">草稿箱</router-link>
        </div>
        <div class="rightBox posA allBox">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'documentMain',
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>

<style>

</style>
