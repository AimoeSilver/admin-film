<template>
    <div id="aside-main">
        <h1 id="logo">
            <img :src="logo" alt="firm logo">
        </h1>

        <div id="aside-menu" class="hide-scrollbar">
            <ul>
                <li v-for="item in routers" :key="item.path" @click="handleJunp(item.path)">
                    <i></i>
                    <router-link id="span" :to="item.path">
                        <span>
                            {{ item.meta.title }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            logo: require('@/assets/logo_a.png'),
            routers: []
        }
    },
    mounted() {
        
        this.routers = this.$router.options.routes[0].children

    },
    methods: {
        // 带点脑子的 jump
        handleJunp(path) {
            const currentpath = this.$router.history.current.path
            if (currentpath !== path) {
                this.$router.push(path)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#aside-main {
    width: 100%;
    height: 100%;

    #logo {
        padding: 28px 25px 31px 27px;
        border-bottom: 1px solid #053852;

        img {
            width: 48px;
            height: 48px;
        }

    }

    #aside-menu {
        width: 100%;
        height: calc(100% - 109px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-sizing: border-box;

        i {
            background-color: #fff;
            width: 20px;
            height: 20px;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 113px;
            width: 100%;
            color: #fff;
            font-size: 15px;
            opacity: 0.8;

            #span {
                width: 100%;
                padding-top: 11px;
                color: #fff;
                text-decoration: none;
            }

            &:hover {
                background-color: #053852;
                opacity: 1;
            }
        }

    }
}

// other css
/* src/assets/css/styles.css 或其他 CSS 文件 */
.hide-scrollbar {
    overflow-y: scroll;
    /* 或 auto，根据需要调整 */
    -ms-overflow-style: none;
    /* IE 和 Edge */
    scrollbar-width: none;
    /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* 隐藏 WebKit 内核浏览器的滚动条 */
}
</style>