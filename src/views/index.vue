<template>
  <a-layout class="app-wrapper">
    <!-- sideBar -->
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo">
          <img src="../assets/logo.png" class="img"/>
          <span v-show="!collapsed">myProduct</span>
        </div>
        <Menu />
    </a-layout-sider>

    <a-layout>
      <!-- header -->
      <a-layout-header style="background: #fff; padding: 0">
        <!-- 显示隐藏sideBar -->
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <breadcrumb />
      </a-layout-header>

      <!-- content -->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view v-slot="{ Component }">
            <component
              :is="Component"
            />
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import Menu from './menu/index.vue';
import breadcrumb from './breadcrumb/index.vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    TeamOutlined,
    FileOutlined,
    Menu,
    breadcrumb
  },

  setup() {
    return {
    };
  },
});
</script>
<style lang="less" scope>
.app-wrapper {
  height: 100%;
  .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

  .logo {
    height: 32px;
    margin: 16px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    .img {
      width: 32px;
      height: 32px;
      margin-right: 9px;
      border-radius: 50%;
    }
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #0c2135;
    color: rgba(255, 255, 255, 0.7);
  }
  .ant-layout-sider-collapsed {
    min-width: 63px!important;
    width: 63px!important;
    flex: 0 0 63px!important;
  }
  .anticon-menu-fold,
  .anticon-menu-unfold {
    svg{
      font-size: 16px;
    }
  }
}
</style>
