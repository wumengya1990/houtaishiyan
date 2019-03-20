<template>
    <div class="top">
        <div class="logo">{{login}}</div>
        <nav>
            <router-link>栏目一</router-link>
            <router-link>栏目二</router-link>
            <router-link>栏目三</router-link>
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
