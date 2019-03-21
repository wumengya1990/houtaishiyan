<template>
    <div class="top">
        <div class="logo">{{login}}</div>
        <nav>
           <router-link to="/documentMain" active-class="on">公文</router-link>
           <router-link to="/emailMain" active-class="on">邮件</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name:'top',
    data(){
        return{
            login:'后台演示'
        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>
