<template>
    <div class="top">
        <div class="logo">{{login}}</div>
        <nav>
           <router-link to="/documentMain">公文</router-link>
           <a>邮件内容</a>
           <a>配置内容</a>
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
