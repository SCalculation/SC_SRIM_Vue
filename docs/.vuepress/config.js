module.exports = {
  title: '『SC』SRIM2013',
  description: 'Personal Blog Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
	
	 
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/SC_SRIM/', // 部署到github相关的配置,,,,,,这个好像影响我npm run build 出来的，是否显示层叠样式表
  markdown: {
    lineNumbers: true    // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
	  {text: '🔧SRIM2013安装', link: '/01.Install/'},
	  {text: '🐾官方文档翻译', link: '/02.DocumentTranslation/'},
	  {text: '⚛️材料计算碎碎念', link: '/03.Skills/'},
      {text: 'SCalculation', link: 'https://github.com/SCalculation'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  },
  plugins: [ 
		'vuepress-plugin-katex'
  ]
};

