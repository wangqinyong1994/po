# 项目说明

taro3-h5 版本，转成小程序 antd-mobile 组件不生效

## 启动

- `npm run dev:h5` 开发环境
- `npm run build:h5` 正式环境

## 注意事项

### 页面开发

taro3 + 页面为 class 开发模式 + 组件可自定义类型

### 组件开发使用

1. 基础组件使用`@tarojs/components`，如

```javascript
import { View, Text, Image } from '@tarojs/components';
```

2. UI 组件使用`antd-mobie`， 如

```javascript
import { Button, Picker, List } from 'antd-mobile';
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
