# 个人作品集

一个无需构建、无需安装依赖的静态作品集。使用 HTML、CSS 和原生 JavaScript，适合直接部署到 GitHub Pages。

## 预览

双击 `index.html`，用 Chrome 或 Edge 打开即可。所有页面资源均保存在本地，无需联网加载字体、图片或第三方脚本。

如果希望通过本地服务器预览，在当前文件夹打开终端并执行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后访问 http://127.0.0.1:8000 ，按 Ctrl+C 停止服务器。

## 修改资料

- `content.js`：姓名、自我介绍、教育背景、实习安排、电话、邮箱、GitHub 地址和项目内容。项目源码与演示链接留空时不会跳到虚构地址。
- `index.html`：页面结构、技术工具箱等文字。
- `style.css`：颜色、字体、布局与移动端适配。
- `script.js`：主题切换、项目筛选、详情弹窗等交互。
- `assets/favicon.svg`：浏览器标签页图标。

当前内容根据朱禹豪的 AI Agent 实习简历初稿整理，包含旅游助手双 Agent 项目与物联网入侵检测论文。项目图形是流程示意，并非实际应用截图；项目测试数量与指标保留简历记录的阶段状态及实验范围。后续可在 `content.js` 更新成果与链接。

原始简历 PDF 保留在本地，未加入网页下载链接；`.gitignore` 排除了 PDF 和 `.preview/` 中的本地预览工具与截图。

## 发布到 GitHub Pages

1. 创建名为 `你的用户名.github.io` 的公开仓库。
2. 将 `index.html`、`style.css`、`script.js`、`content.js`、`assets/`、`.nojekyll` 上传到仓库根目录。原始简历 PDF 与 `.preview/` 不需要上传。
3. 打开仓库 Settings → Pages。
4. Source 选择 Deploy from a branch，Branch 选择 main，目录选择 / (root)，保存。
5. 部署完成后访问 `https://你的用户名.github.io/`。

本项目采用相对资源路径，也适用于 `https://用户名.github.io/仓库名/` 形式的项目站点。

## 页面功能

- 响应式布局，适配手机、平板和桌面。
- 深浅色主题，优先读取之前的选择，否则跟随系统；存储不可用时仍可切换。
- 按方向筛选项目，查看项目笔记，支持 Escape 关闭弹窗。
- 键盘焦点提示、跳转正文入口、减少动态效果偏好支持。
- 电话、邮箱和 GitHub 来自简历，支持拨号、邮件及主页链接。研究生经历注明已保研、待入学及预计就读时间；实习安排保留简历中的具体日期。
