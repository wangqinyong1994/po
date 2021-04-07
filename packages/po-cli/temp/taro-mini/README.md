# 项目说明

taro3-wxmini 版本，taro生态 + taro-ui

目前可编译成h5, 注意`taro-ui`版本，版本问题导致会有h5的模块未找到报错提醒。

同时编译开发，需要自行区别h5与小程序差异。

## 启动

- `npm run dev:weapp` 开发环境
- `npm run build:weapp` 正式环境

## 注意事项

### 页面开发

taro3 + 页面为 class 开发模式 + 组件可自定义类型

### 组件开发使用

1. 基础组件使用`@tarojs/components`，如

```javascript
import { View, Text, Image } from '@tarojs/components';
```

2. UI 组件使用`taro-ui`， 如

```javascript
import { AtButton } from 'taro-ui';
```

3. 自定义公共组件，放到 components 目录下

4. 自定义业务组件，放到 common 目录下

### 文件目录

```text
.
├── api                         // 请求相关文件
│   ├── index.js
│   └── request.js
├── app.config.js               // 见taro文档
├── app.jsx
├── app.less
├── assets                      // 静态资源
│   └── images
│       └── weixin.png
├── common                      // 业务组件
│   ├── Layout
│   │   ├── FormLayout
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── index.js
│   └── index.js
├── components                  // 基础公共组件
│   ├── HelloWorld
│   │   ├── index.jsx
│   │   └── index.less
│   └── index.js
├── index.html
├── pages                       // 页面
│   ├── demo1
│   │   ├── index.config.js
│   │   ├── index.jsx
│   │   └── index.module.less
│   ├── index
│   │   ├── index.config.js
│   │   ├── index.jsx
│   │   └── index.module.less
│   └── login
│       ├── index.config.js
│       ├── index.jsx
│       └── index.module.less
├── store                       // redux
│   ├── actions
│   │   ├── counter.js
│   │   └── user.js
│   ├── constants
│   │   └── index.js
│   ├── index.js
│   └── reducers
│       ├── counter.js
│       ├── counterPersist.js
│       ├── index.js
│       └── user.js
└── utils                       // 工具方法
    └── index.js
```

### 其他

- 工具包自行安装 如 `lodash、dayjs ...`
