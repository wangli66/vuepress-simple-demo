const nav = require('./config/nav.js');
const sidebar = require('./config/sidebar.js');

module.exports = {
    title: "vuepress-simple-demo 快速搭建说明文档、知识库",
    description: "vuepress-simple-demo 快速搭建说明文档、知识库",
    dest: 'dist',
    // 如果不想将文档的小标题移到右侧，请去掉plugins中的vuepress-theme-vdoing，注释掉theme: "vdoing",
    plugins: ["demo-container", "vuepress-theme-vdoing"],
    theme: "vdoing",
    base: "/",
    themeConfig: {
        logo: "https://vuejs.org/images/logo.png",
        // 最近更新栏
        updateBar: {
            showToArticle: false, // 显示到文章页底部，默认true
        },
        sidebar: 'structuring',
        category: false,
        tag: false,
        archive: false,
        nav,
        sidebar
    },
};