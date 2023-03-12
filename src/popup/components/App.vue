

<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo">
                <img src="@/assets/logo/logo256.png" alt="">
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">脚本</a-menu-item>
                <a-menu-item key="2">监控</a-menu-item>
                <a-menu-item key="3">报表</a-menu-item>
                <a-menu-item key="3">工具</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item>脚本</a-breadcrumb-item>
                <a-breadcrumb-item>chrome插件</a-breadcrumb-item>
            </a-breadcrumb>
            <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
                <a-button type="primary">脚本测试</a-button>
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            <!-- 雀鹰 ©2023 夏继业 -->
            希望你永远年轻，永远热泪盈眶
        </a-layout-footer>
    </a-layout>
</template>
  
<script>
export default {

}
</script>
  
<style scoped lang="scss"> 

.logo {
     height: 64px;
     width: 34px;
     float: left;
     margin: 0px 20px;
     img {
         display: inline-block;
         width: 34px;
         height: 34px;
     }

 }
</style>
  