<template>
    <div class="mainPage">
        <top></top>
        <router-view></router-view>
    </div>
</template>

<script>
import top from '@/components/top'
export default {
    name:'mainPage',
    components:{
        top
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>

<style>

</style>
