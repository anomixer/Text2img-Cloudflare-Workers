<p align="center">
 <a href="https://text-to-image-template.templates.workers.dev/" target="_blank" rel="noopener">
 <img alt="text-to-image" src="public/cat0.png" width="120" height="120" />
 </a>
</p>

<div align="center"></br></div>

<div align="center">
 <h1>
 ✨ 基於 Cloudflare AI & Workers 的免費線上文生圖服務 </br>
 </h1>
</div>

<div align="center">

[專案簡介](#📚-專案簡介) |
[主要特性](#✨-主要特性) |
[快速開始](#🚀-快速開始) |
[使用指南](#📝-使用指南) |
[配置選項](#⚙️-配置選項) |
[模型限制](#📊-模型限制) |
[專案範例](https://txt2img.johantw.workers.dev/)

</div>

<div align="center"></br></div>

<picture>
 <source media="(prefers-color-scheme: dark)" srcset="public/top-dark.png">
 <img alt="應用截圖" src="public/top.png">
</picture>

<div align="center"></br></div>

##

Text2img-Cloudflare-Workers 是基於 Cloudflare Workers AI 服務搭建的線上文字產生圖像視覺化網頁，完全建構在 Cloudflare Workers 上。此專案為透過簡單呼叫 Cloudflare 官方提供的 [文生圖 - Text-to-Image](https://developers.cloudflare.com/workers-ai/models/) 模型，可以快速實現隨時隨地無需登入的影像產生需求。

### 體驗網址：[https://text2img.huarzone.com/](https://text2img.huarzone.com/)

## ✨ 主要特性

- 🚀 完全基於 Cloudflare Workers，無需伺服器部署
- 🎨 利用 Cloudflare AI 提供免費高品質文生圖模型
- 🐳 支援 FLUX/SDXL 等多個文生圖模型
- ⚙️ 支援影像產生的進階選項設置
- 🤗 支援設定存取密碼，私有化部署友好
- ⚡ 反應速度快，全球邊緣網路加速
- 🌐 簡潔的使用者介面，易於使用
- 🌓 支援深色和淺色模式之間切換
- 📱 行動端友好，支援各種設備訪問

## 🚀 快速開始

### 部署你自己的文生圖實例

1. **建立新的 Worker**：在 Cloudflare 控制面板中找到 "Workers 和 Pages" 選單，點擊 "建立應用程式"，選擇 "建立 Worker"，輸入標識名稱後點選 "部署"。

![建立專案](public/create.png)

2. **編輯並部署程式碼**：點擊 "編輯程式碼" 按鈕，將 `src/worker.js` 內容複製到左側程式碼框，再建立 `index.html` 檔案並複製 `src/index.html` 內容，然後點擊 "儲存並部署"。

![編輯程式碼](public/edit.png)

3. **新增 Workers AI 綁定**：返回 Worker 專案面板頁，進入 "設定" -> "綁定"，點擊 "新增綁定"，選擇 `Workers AI` 類型，變數名稱填寫 `AI`，儲存並部署。

![新增綁定](public/ai.png)

4. **設定自訂網域名稱（可選）**：在 Worker 的 "設定"-> "網域和路由" 中選擇 "新增自訂網域"，輸入你的網域並完成 DNS 設定。

🎉 部署完成後，即可透過 Cloudflare 分配的網域或自訂網域存取你的文生圖服務！

## 📝 使用指南

1. 存取應用程式網址，預設分配的網域為 `https://<your-worker-name>.<your-subdomain>.workers.dev/`。

2. **輸入存取密碼**：如果設定密碼，則需要在頁面頂部"存取密碼"區域輸入存取密碼。

2. **填寫提示詞**：在 "正向提示詞" 文字方塊中描述你想要產生的圖像內容，可使用 "隨機提示詞" 按鈕獲取靈感；在 "反向提示詞" 中添加你想避免的元素。

3. **選擇模型**：從下拉式選單中選擇想要使用的文生圖模型，根據需求選擇合適的模型。

4. **調整參數**（可選）：點擊"進階選項"中的"顯示/隱藏"按鈕，可調整影像尺寸、迭代步數、引導係數和隨機種子等參數。

5. **生成圖像**：點擊底部的"生成圖像"按鈕，等待幾秒鐘至幾十秒不等，系統會在右側顯示生成結果。

7. **管理結果**：圖像生成後，可以使用"複製參數"保存當前設置，或點擊"下載圖像"保存生成的圖片。

8. **切換主題**：透過頁面右上角的月亮/太陽圖示按鈕在深色和淺色模式之間切換。

## ⚙️ 配置選項

1. **模型設定**：在 `src/worker.js` 的 `AVAILABLE_MODELS` 中可新增、刪除或修改模型及其介紹。

2. **隨機提示詞**：編輯 `src/worker.js` 中的 `RANDOM_PROMPTS` 陣列可自訂隨機出現的創意提示詞庫。

3. **存取權限控制**：透過在 `src/worker.js` 的 `PASSWORDS` 陣列中新增密碼來啟用存取保護，支援多重密碼並行，留空則允許無密碼存取。

> **注意**：所有設定修改都需要重新部署應用程式後才能生效。

## 📊 模型限制

- Cloudflare Workers 免費版每天有請求數量限制，建議私有化部署使用。
- 影像生成通常需要 3-20 秒左右，與模型選擇、迭代步數和影像解析度有關。
- 不同文生圖模型參數的限制有差異，請查閱官方提供的 [文生圖 - Text-to-Image](https://developers.cloudflare.com/workers-ai/models/) 模型詳情頁。


## 🙏 致謝

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare AI](https://developers.cloudflare.com/workers-ai/)
