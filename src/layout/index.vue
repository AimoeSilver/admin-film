<template>
    <div>
        <el-container>
            <!-- aside part -->
            <el-aside width="100px">
                <aside-vue />
            </el-aside>

            <!-- main part -->
            <el-container>
                <el-header >
                    <header-vue />
                </el-header>
                <el-main>
                    <main-vue />
                </el-main>
            </el-container>

        </el-container>
    </div>

</template>

<script>
import asideVue from './components/aside.vue'
import headerVue from './components/header.vue'
import mainVue from './components/main.vue'


export default {
    name: 'Layout',
    components: {
        asideVue,
        headerVue,
        mainVue,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    created() {

    },
    filters: {

    },
    computed: {

    },
    watch: {

    },
    directives: {

    }
}
</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
}
.el-aside {
    background-color: #063F5C;
}
.el-header {
    height: 100px !important;
    padding: 0px;
    background: #FFFFFF;
    
}
.el-main {
    display: block;
    padding: 30px;
}

</style>