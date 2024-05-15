<template>
    <div id="header">
        <div id="info">

            <div id="message" >
                <span id="message-num">
                    1
                </span>
            </div>
                
            <div id="user">
                <div id="head">
                    
                </div>
                <div id="name">
                    里斯特
                </div>
            </div>
        </div>
        <div id="tab">
            tab
        </div>

    </div>
</template>

<script>

export default {
    name: 'Header',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
#header {
    display: block;
    box-shadow: 0px 0px 43px 1px rgba(0, 0, 0, 0.13);

    #info {
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;
        height: 60px;

        #user {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 33px;
            padding-left: 31px;
            font-size: 16px;
            #head {
            width: 39px;
            height: 39px;
            background-color: #999;
            border-radius: 50%;
            margin-right: 15px;
        }
        }

    }

    #message {
        display: block;
        position: relative;
        background-color: #333;
        width: 22px;
        height: 22px;

        #message-num {
            position: relative;
            width: 24px;
            height: 17px;
            border-radius: 9px;
            left: 9px;
            top: -8px;
            background-color: #F7AD1A;
            font-size: 12px;
            color: #000;
            
            align-content: center;
            display: inline-block;
        }
    }

    #tab {
        height: 39px;

    }

}
</style>