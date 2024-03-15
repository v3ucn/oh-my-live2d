import { MENUS_DEFAULT_STYLE, PRIMARY_COLOR, STATUS_BAR_DEFAULT_STYLE, STATUS_BAR_ERROR_COLOR, TIPS_DEFAULT_STYLE } from './style.js';
import type { DefaultOptions } from '../types/index.js';

// 第三方库服务地址
const libServicePath = 'https://lib.oml2d.com';

// 默认配置选项, 实例化时会与用户传进来的合并
export const DEFAULT_OPTIONS: DefaultOptions = {
  mobileDisplay: false,
  fixed: true,
  primaryColor: PRIMARY_COLOR,
  sayHello: true,
  transitionTime: 1000,
  parentElement: document.body,
  importType: 'complete',
  libraryUrls: {
    complete: `${libServicePath}/complete.js`,
    cubism2: `${libServicePath}/live2d.min.js`,
    cubism5: `${libServicePath}/live2dcubismcore.min.js`
  },
  models: [],
  statusBar: {
    errorColor: STATUS_BAR_ERROR_COLOR,
    style: STATUS_BAR_DEFAULT_STYLE
  },
  tips: {
    messageLine: 3,
    mobileStyle: TIPS_DEFAULT_STYLE,
    style: TIPS_DEFAULT_STYLE,
    idleTips: {
      wordTheDay: false,
      message: [],
      duration: 5000,
      interval: 10000,
      priority: 2
    },
    welcomeTips: {
      message: {
        daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
        morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
        noon: '中午了，工作了一个上午，现在是午餐时间！',
        afternoon: '午后很容易犯困呢，来杯咖啡吧~',
        dusk: '傍晚了！工作一天幸苦啦~',
        night: '晚上好，今天过得怎么样呢？',
        lateNight: '已经这么晚了呀，早点休息吧，晚安~',
        weeHours: '这么晚还不睡吗？当心熬夜秃头哦！'
      },
      duration: 6000,
      priority: 3
    },
    copyTips: {
      duration: 3000,
      priority: 3,
      message: ['你复制了什么内容呢?记得注明出处哦~']
    }
  },
  menus: {
    style: MENUS_DEFAULT_STYLE,
    itemStyle: {}
  }
};

/** 全局配置 */
export const ELEMENT_ID = {
  globalStyle: 'oml2d-global-style',
  stage: 'oml2d-stage',
  canvas: 'oml2d-canvas',
  statusBar: 'oml2d-statusBar',
  tips: 'oml2d-tips',
  menus: 'oml2d-menus',
  iconSvg: 'oml2d-icon-svg'
};

/** 菜单的配置 */
export const MENU_ITEMS = [
  {
    id: 'Rest',
    name: 'icon-bed',
    title: '休息'
  },
  {
    id: 'SwitchModel',
    name: 'icon-a-userswitch-fill',
    title: '切换模型'
  },
  // {
  //   id: 'Play',
  //   name: 'icon-skin-fill',
  //   title: '变装'
  // },
  {
    id: 'About',
    name: 'icon-info-circle-fill',
    title: '关于'
  }
];
