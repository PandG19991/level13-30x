# 发布到 GitHub Pages

## 新建仓库

在 https://github.com/new 新建名为 `level13-30x` 的仓库。使用 GitHub 免费账号时选 Public（公开）；不要预先添加 README、.gitignore 或许可证，本部署包已包含这些文件。

## 上传文件

把部署包解压到本地文件夹。`index.html`、`src`、`LICENSE` 和 `.github` 应位于仓库根目录，不要把 zip 文件本身上传成网页。

文件较多，建议使用 Git 或 GitHub Desktop 上传。使用 Git 时，在解压后的文件夹打开终端，先将下面的 `你的用户名` 替换成真实 GitHub 用户名，再执行：

```powershell
git init -b main
git add .
git commit -m "Publish Level 13 with native 30x speed"
git remote add origin https://github.com/你的用户名/level13-30x.git
git push -u origin main
```

首次使用 Git 时可能需要先设置自己的提交者姓名和邮箱；推送时按照 Git 的提示登录 GitHub。

## 开启网页托管

1. 仓库 → Settings → Pages。
2. Build and deployment 下的 Source 选择 **Deploy from a branch**。
3. Branch 选择 **main**，目录选择 **/ (root)**，点击 Save。
4. 自动发布成功后，从 Settings → Pages 或 Actions 的 `pages build and deployment` 结果打开实际网址。

默认地址形式为 `https://你的用户名.github.io/level13-30x/`。这是地址示例，只有 GitHub 实际部署成功后才可访问。

后续推送到 main 会自动更新网站。GitHub 使用内置的 Pages 发布流程，`.nojekyll` 让它直接使用已有的 HTML/CSS/JS；无需自定义工作流或 Node.js 构建步骤，也不需要配置 SSH 密钥或云服务器密码。

## 游戏设置与验证范围

- 原生营地和探索倍率固定为 30；刷新和重新打开仍保持此默认值。
- 已验证本地开局、探索、拾取、保存／重新加载；探索冷却为 0.3 秒。
- 倍率仅影响调用原生倍率配置的游戏系统；没有验证所有后期内容或完整通关。
- 通用油猴加速脚本在此站点应关闭，避免叠加。
- 存档留在浏览器 localStorage；GitHub Pages 不提供存档同步。
- 原版的导出／导入功能可用于迁移存档。尽量为本游戏使用独立域名；同一 GitHub 用户下的多个 Pages 项目共享浏览器源，相同存档键可能互相影响。
- 保留 Apache-2.0 LICENSE、原作者信息和第三方版权声明。

## 官方参考

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
