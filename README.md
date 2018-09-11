# react-template

> A React project

## Usage

```bash
# install all this dependencies.
npm install

# development, default port: 8080
npm run dev

# production
npm run build

# build with report
npm run build --report

# lint the files
npm run lint

# fix eslint errors
npm run lint-fix
```
# 目录结构
```
build                       webpack构建时用到的相关设置
config                      构建相关配置
dist                        前端代码压缩后放置的文件夹
src                         源码文件夹
  assets                    静态文件（公共css及图片等）
    images                  图片
  components                组件
    common                  公共组件（多个页面可复用的组件）
  config                    源码内的各类配置
  redux                     redux相关内容
  routes                    路由配置
  services                  所有的ajax接口
  utils                     公共工具函数
  views                     视图类组件（各类页面）
static                      静态文件（打包时不会被压缩）
  Config                    所有ajax的url
```

# 注意事项
- 所有文件夹命名：全小写英文，用"-"分隔词汇；组件文件命名：大驼峰，与组件名完全相同

- 公共组件目录：放在src/components/common下；页面内组件：放在src/components/[页面名称]，

- 组件样式文件，跟组件相同目录、名称的scss文件作为组件的样式

- 组件需用一个与组件名相同（由大驼峰改为：全部使用小写，多个单词用‘-’连接的形式）的className包裹，在scss文件中，所有的样式都要写在这个class下（防止css污染全局）

- 所有className、路由路径，全部使用小写，多个单词用‘-’连接的形式

- js代码风格，使用的是[standard](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style)及 [standard-react](https://github.com/feross/eslint-config-standard-react)风格。

- vscode用户可安装eslint插件，并添加`"eslint.autoFixOnSave": true,`到配置项中，即可实现保存文件时，自动修复代码风格错误

- idea用户可以使用右键手动修复eslint错误

# vscode调试
- 需要安装[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)调试工具

- 确保已经开启本地服务(npm run dev)，之后F5开始调试

- [官方教程](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
