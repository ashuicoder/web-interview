import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import path from 'node:path'

import navbarConfig from './config/navbarConfig'

import sideBarConfig from './config/sidebarConfig'

const config = defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '阿水前端面试题库',
  description: '一个前端面试题库',
  head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: navbarConfig,
    sidebar: sideBarConfig
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          HomeContent: path.resolve(__dirname, './components/HomeContent.vue')
        }
      }
    ]
  ]
})

export default config
