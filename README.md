# 基于 ARM 的 Linux 操作系统启动详解：从电信号到 init 进程
<!-- ========================================================= -->
<!-- Platform -->
<!-- ========================================================= -->

![](https://img.shields.io/badge/SOC-NXP%20i.MX6Solo-74B743?style=flat-square)
![](https://img.shields.io/badge/CPU-ARM%20Cortex--A9-D97C2B?style=flat-square&logo=arm&logoColor=white)
![](https://img.shields.io/badge/Linux-5.10-1E88E5?style=flat-square&logo=linux&logoColor=FCC624)
![](https://img.shields.io/badge/Yocto-4.0-8E24AA?style=flat-square)
![](https://img.shields.io/badge/Qt-6.6-62B233?style=flat-square&logo=qt&logoColor=white)

<!-- ========================================================= -->
<!-- Wireless -->
<!-- ========================================================= -->

![](https://img.shields.io/badge/Wireless-IEEE802.15.4-1976D2?style=flat-square)
![](https://img.shields.io/badge/WiFi-802.11-1E88E5?style=flat-square)
![](https://img.shields.io/badge/Bluetooth-5.0-1976D2?style=flat-square&logo=bluetooth&logoColor=white)
![](https://img.shields.io/badge/IoT-Platform-7CB342?style=flat-square)

<!-- ========================================================= -->
<!-- License -->
<!-- ========================================================= -->

![](https://img.shields.io/badge/License-CC--BY--SA%204.0-1E88E5?style=flat-square)

<!-- ========================================================= -->
<!-- Powered By -->
<!-- ========================================================= -->

![](https://img.shields.io/badge/Powered%20by-mdBook-F28C28?style=flat-square)


## 🌐 快速阅读与下载
[![](https://img.shields.io/badge/GitHub%20Pages-在线阅读-2EA44F?style=flat-square&logo=github)](https://hailiu88.github.io/-ARM-Linux-/)

[![](https://img.shields.io/badge/Vercel-国内镜像-000000?style=flat-square&logo=vercel)](https://arm-linux.vercel.app)

[![](https://img.shields.io/badge/PDF-离线下载-EA4335?style=flat-square&logo=adobeacrobatreader&logoColor=white)](https://github.com/hailiu88/-ARM-Linux-/releases/tag/v1.0.0)

[![](https://img.shields.io/badge/百度网盘-提取码%203e8h-1677FF?style=flat-square)](https://pan.baidu.com/s/1HrnW9BvAXStC7CPZxlUWfA?pwd=3e8h)

[![License: CC BY-SA 4.0](https://shields.io)](https://creativecommons.org)

[![Powered by mdBook](https://shields.io)](https://github.com)

---

本开源书籍专注于 **ARM 架构下的 Linux 操作系统启动全流程**。我们不谈抽象的概念，而是从硬件上电的第一秒开始，逐行代码、逐个阶段剖析，直击内核底层，直到用户态第一个进程 `init` 成功运行。

## 🗺️ 本书核心知识地图

本书带您系统梳理从引导程序到内核启动的完整脉络，包含以下四大硬核部分：

1. **🛠️ 环境构建与预备（第1-3章）**：详解 ARM Linux 体系结构、U-BOOT 引导及设备树。
2. **🌅 内核引导破晓（第4-14章）**：深入 CPU 模式、页表初始化、SMP 及命令行参数。
3. **🧠 核心子系统构建（第15-25章）**：剖析内存管理、CFS 任务调度、RCU、中断及内核安全。
4. **🏁 系统运行与闭环（第26-31章）**：探索多任务状态、命名空间、容器能力及 init 进程生命周期。

---

## 🎯 适合谁读？

*   **嵌入式 Linux 开发人员**：需要解决系统启动优化、裁剪及板级移植的工程师。
*   **Linux 内核爱好者**：对操作系统底层原理、内存管理、进程创建感兴趣的学生或研究者。
*   **ARM 架构研究员**：想探究 ARM 汇编、异常级别（EL）切换及软硬件交互的硬核玩家。

---

## 🛠️ 本书项目结构

本项目基于 `mdBook` 构建，源码结构如下：

*   `src/`：存放书籍的 Markdown 源码章节。
*   `book.toml`：mdBook 的配置文件。
*   `book/`：编译后生成的静态 HTML 网页（用于在线发布）。
*   `artifacts/`：本书的最新版静态 PDF 文档（提供离线下载）。

---

## 🤝 如何参与贡献与反馈

本书完全开源，如果您在阅读过程中发现：
*   代码解析有误或不够精准
*   存在错别字或排版问题
*   有更优雅的图解或表述方式

欢迎直接提交 **Issue** 或发起 **Pull Request**！让我们一起完善这本 ARM Linux 启动指南。

---

## 📄 开源许可证

本项目文字与代码内容采用 **[CC BY-SA 4.0 (知识共享署名-相同方式共享 4.0 国际许可协议)](https://creativecommons.orgdeed.zh)** 进行许可。这意味着您可以自由地分享、修改本书，但必须署名原作者，且修改后的作品必须采用相同的许可协议发布。
