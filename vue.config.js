const { defineConfig } = require('@vue/cli-service')
const Timestamp = new Date().getTime()

const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// 复制文件到指定目录
const copyFiles = [
  {
    from: path.resolve("src/plugins/manifest.json"),
    to: `${path.resolve("dist")}/manifest.json`
  },
  {
    from: path.resolve("src/assets"),
    to: path.resolve("dist/assets")
  },
  {
    from: path.resolve("src/plugins/inject.js"),
    to: path.resolve("dist/js")
  },
  {
    from: path.resolve("src/plugins/jquery-3.5.1.min.js"),
    to: path.resolve("dist/js")
  }
];

// 复制插件
const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles
  })
];

// 页面文件
const pages = {};
// 配置 popup.html 页面
const chromeName = ["popup"];

chromeName.forEach(name => {
  pages[name] = {
    entry: `src/${name}/main.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`
  };
});

module.exports = defineConfig({

  chainWebpack(config) {
    config.optimization.minimize(false);
  }
  ,
  css: {
    loaderOptions: {
      // 你的基础样式 因为没有我就注释了
      // sass: {
      //     data: `
      // 		@import "@/assets/style/base.scss";
      // 	`,
      // },
      //这只主题样式，修改此文件后需要重新启动，
      less: {
        lessOptions: {
          modifyVars: {
            //这是配置css主题色
            'primary-color': '#007AFF',
          },
          javascriptEnabled: true,
        },
      },
    },
    // 每次打包后生成的css携带时间戳
    extract: {
      filename: `css/[name].${Timestamp}.css`,
      chunkFilename: `css/[name].${Timestamp}.css`,
    },
  },
  //打包后相对目录
  // publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
  configureWebpack: {
    //每次打包后生成的js携带时间戳
    output: {
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`,
    },
  },
  //修改Webpack配置
  configureWebpack:{

resolve: {
  // 配置路径别名
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
},
  },
  transpileDependencies: true,
  pages,
  productionSourceMap: false,
  // 配置 content.js background.js
  configureWebpack: {
    entry: {
      background: "./src/background/main.js"
    },
    output: {
      filename: "js/[name].js"
    },
    plugins
  },
  // 配置 content.css
  css: {
    extract: {
      filename: "css/[name].css"
    }
  }
});
