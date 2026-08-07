# Arm-based Linux operating system booting process
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


## 🌐 Read and Download
[![](https://img.shields.io/badge/GitHub%20Pages-Read%20Online-2EA44F?style=flat-square&logo=github)](https://hailiu88.github.io/linux-booting-process/)
[![](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat-square&logo=vercel)](https://linux-booting-process.vercel.app)
[![](https://img.shields.io/badge/PDF-PDF%20Download-EA4335?style=flat-square&logo=adobeacrobatreader&logoColor=white)](https://github.com/hailiu88/-ARM-Linux-/releases/tag/v1.0.0)
[![](https://img.shields.io/badge/Baidu%20Netdisk-Access%20Code%203e8h-1677FF?style=flat-square)](https://pan.baidu.com/s/1HrnW9BvAXStC7CPZxlUWfA?pwd=3e8h)

---

Welcome to Deep Dive: ARM Linux Operating System Booting Process, a textbook-grade, source-level engineering guide that tracks the execution lifecycle of an embedded Linux system from the exact moment of power-on to the user-space interface.Spanning 31 comprehensive chapters, this open-source book bridges the gap between hardware architecture manuals and the vast, complex labyrinth of the Linux kernel source code.

## 🗺️ Architecture & Core Roadmap

Phase 1: Bootloaders & Hardware Abstraction (Ch. 1–5): Deep dive into the U-Boot bootloader mechanics, multi-stage booting, and Device Tree (DTB) structures.

Phase 2: Kernel Entry & Assembly Setup (Ch. 6–10): Low-level initialization preparations, runtime configurations, and multi-core CPU initialization under Symmetric Multiprocessing (SMP) boot mode.

Phase 3: Core Subsystems Mechanics (Ch. 11–20): Granular source code analysis of early kernel memory nodes/zones, command-line parameter parsing, exception handlers, task schedulers, RCU mechanisms, and the GIC interrupt system.

Phase 4: Runtime Foundation (Ch. 21–30): Time subsystems, security hardening vaults, multi-core communication, console binding, process creation basics, and container capability hooks leading into the normal kernel runtime phase.
Phase 5: Production Porting & Deployment (Ch. 31): Practical engineering blueprints for porting U-Boot, the Linux OS, and secure environments like OP-TEE onto custom ARM platforms.

## 🎯 Who This Is For

Built with mdBook for a distraction-free, high-density reading experience, this guide is crafted specifically for embedded software engineers, Linux kernel developers, SoC verification engineers, and OS enthusiasts mastering bare-metal ARM systems.Contributions, code syntax corrections, and documentation pull requests are welcome!

---

### Open Source License

This project's text and code are licensed under the **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike 4.0 International) License. This means you are free to share and adapt this book, provided that you give appropriate credit to the original author and distribute your contributions under the same license.

[![](https://img.shields.io/badge/License-CC%20BY--SA%204.0-ef9421?style=flat-square&logo=creativecommons&logoColor=white)](https://creativecommons.org/licenses/by-sa/4.0/)
[![](https://img.shields.io/badge/Powered%20by-mdBook-000000?style=flat-square)](https://github.com/rust-lang/mdBook)
