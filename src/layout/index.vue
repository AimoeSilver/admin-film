<template>
    <div>
        <el-container>
            <!-- aside part -->
            <el-aside width="100px">
                <aside-vue />
            </el-aside>

            <!-- main part -->
            <el-container>
                <el-header>
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
import tabViewsVue from './components/tabViews.vue'

export default {
    name: 'Layout',
    components: {
        asideVue,
        headerVue,
        mainVue,
        tabViewsVue
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
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 0px 43px 1px rgba(0,0,0,0.13);
}
.el-main {
    padding: 30px;
}

</style>