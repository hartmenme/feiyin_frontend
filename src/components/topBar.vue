<template>
    <div class="top-bar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <span>肺音xx项目</span>
        </div>
        <div class="navigation-bar">
            <!-- <el-menu  class="el-menu-demo" mode="horizontal" :ellipsis="false"
                @select="handleSelect"     text-color="#000000" active-text-color="#000000">
                <div class="flex-grow" />
                <el-menu-item index="register">注册</el-menu-item>
                <el-sub-menu index="login">
                    <template #title>登录</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-sub-menu>
            </el-menu> -->
            <span class="register">注册</span>
            <span class="login">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        登录<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="a">Action 1</el-dropdown-item>
                            <el-dropdown-item command="b">Action 2</el-dropdown-item>
                            <el-dropdown-item command="c">Action 3</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </span>

            <!-- <span class="login">登录 <el-icon>
                    <ArrowUp />
                </el-icon></span> -->
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.top-bar {
    position: absolute;
    /* 设置绝对定位 */
    top: 0;
    /* 将顶部导航栏固定在容器顶部 */
    left: 0;
    /* 将顶部导航栏固定在容器左侧 */
    width: 100%;
    /* 使导航栏宽度与容器相同 */
    z-index: 1;
    /* 设置顶部导航栏的层级高于背景图 */
    background-color: #fff;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid #ccc;

    .logo {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 80px;
            height: 80px;
        }
    }

    .navigation-bar {
        height: 100%;
        width: 30%;
        display: flex;
        align-items: flex-end;

        span {
            width: 30%;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2%;
            cursor: pointer;

            &:hover {
                background-color: #ccc;
            }
        }

    }
}
</style>