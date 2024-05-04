<template>
    <div id="aside-main">
        <h1 id="logo">
            <img :src="logo" alt="firm logo">
        </h1>

        <div id="aside-menu">
            <ul>
                <li >
                    <i>

                    </i>
                    <span>控制台</span>
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
            logo: require('@/assets/logo_a.png')
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
            justify-content:center ;
            flex-direction: column;
            height: 113px;
            width: 100%;
            color: #fff;
            font-size: 15px;
            opacity: 0.8;
            span {
                padding-top: 11px;
            }

            &:hover {
                background-color: #053852;
                opacity: 1;
            }
        }

    }
}
</style>