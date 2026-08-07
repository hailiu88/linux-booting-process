// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="preface.html">Preface</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_1.html"><strong aria-hidden="true">1.</strong> Chapter 1 Introduction to Linux</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.1 The Evolutionary History of Linux.html"><strong aria-hidden="true">1.1.</strong> The Evolutionary History of Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.2 Linux Architecture.html"><strong aria-hidden="true">1.2.</strong> Linux Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.3 Advantages and Limitations of Linux.html"><strong aria-hidden="true">1.3.</strong> Advantages and Limitations of Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.4 eSmart-6 Multifunctional Linux Development System.html"><strong aria-hidden="true">1.4.</strong> eSmart-6 Multifunctional Linux Development System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.5 Linux Command Structure.html"><strong aria-hidden="true">1.5.</strong> Linux Command Structure</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.6 Command Help and Query Mechanisms.html"><strong aria-hidden="true">1.6.</strong> Command Help and Query Mechanisms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.7 File and Directory Operation Commands.html"><strong aria-hidden="true">1.7.</strong> File and Directory Operation Commands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.8 File Viewing Commands.html"><strong aria-hidden="true">1.8.</strong> File Viewing Commands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.9 Permission and Attribute Management.html"><strong aria-hidden="true">1.9.</strong> Permission and Attribute Management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.10 Search and Discovery Utilities.html"><strong aria-hidden="true">1.10.</strong> Search and Discovery Utilities</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.11 Compression and Decompression.html"><strong aria-hidden="true">1.11.</strong> Compression and Decompression</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.12 Process Management.html"><strong aria-hidden="true">1.12.</strong> Process Management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.13 Disk and System Information.html"><strong aria-hidden="true">1.13.</strong> Disk and System Information</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.14 Pipes and Redirection.html"><strong aria-hidden="true">1.14.</strong> Pipes and Redirection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.15 Other Common Utilities.html"><strong aria-hidden="true">1.15.</strong> Other Common Utilities</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.16 Wildcards.html"><strong aria-hidden="true">1.16.</strong> Wildcards</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1.17 Linux Directory Structure.html"><strong aria-hidden="true">1.17.</strong> Linux Directory Structure</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_2.html"><strong aria-hidden="true">2.</strong> Chapter 2 The U-BOOT Bootloader</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2.1 U-BOOT Commands.html"><strong aria-hidden="true">2.1.</strong> U-BOOT Commands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2.2 Environment Variables.html"><strong aria-hidden="true">2.2.</strong> Environment Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2.3 U-BOOT Scripting.html"><strong aria-hidden="true">2.3.</strong> U-BOOT Scripting</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_3.html"><strong aria-hidden="true">3.</strong> Chapter 3 Device Tree</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.1 Device Tree Architecture.html"><strong aria-hidden="true">3.1.</strong> Device Tree Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.2 Standard Properties.html"><strong aria-hidden="true">3.2.</strong> Standard Properties</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.3 Device Tree Nodes.html"><strong aria-hidden="true">3.3.</strong> Device Tree Nodes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.4 Property Bindings.html"><strong aria-hidden="true">3.4.</strong> Property Bindings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.5 Flattened Device Tree (DTB) Format.html"><strong aria-hidden="true">3.5.</strong> Flattened Device Tree (DTB) Format</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3.6 Device Tree Source (.dts) File Format.html"><strong aria-hidden="true">3.6.</strong> Device Tree Source (.dts) File Format</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_4.html"><strong aria-hidden="true">4.</strong> Chapter 4 The Boot Process of the Operating System</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4.1 The Operating System Boot Process.html"><strong aria-hidden="true">4.1.</strong> The Operating System Boot Process</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4.2 Operating System and Hardware Interfaces for Desktops and Laptops.html"><strong aria-hidden="true">4.2.</strong> Operating System and Hardware Interfaces for Desktops and Laptops</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4.3 Embedded System Hardware and Operating System Interfaces.html"><strong aria-hidden="true">4.3.</strong> Embedded System Hardware and Operating System Interfaces</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4.4 Bootloaders.html"><strong aria-hidden="true">4.4.</strong> Bootloaders</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_5.html"><strong aria-hidden="true">5.</strong> Chapter 5 U-BOOT Booting</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.1 U-BOOT Boot Flow.html"><strong aria-hidden="true">5.1.</strong> U-BOOT Boot Flow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.2 System Startup.html"><strong aria-hidden="true">5.2.</strong> System Startup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.3 Initializing the C Runtime Environment.html"><strong aria-hidden="true">5.3.</strong> Initializing the C Runtime Environment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.4 Post-Relocation Initialization (board_init_r).html"><strong aria-hidden="true">5.4.</strong> Post-Relocation Initialization (board_init_r)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.5 Running of U-BOOT .html"><strong aria-hidden="true">5.5.</strong> Running of U-BOOT</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5.6 Booting the Linux Kernel.html"><strong aria-hidden="true">5.6.</strong> Booting the Linux Kernel</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_6.html"><strong aria-hidden="true">6.</strong> Chapter 6 Linux Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6.1 Configuring the CPU Mode.html"><strong aria-hidden="true">6.1.</strong> Configuring the CPU Mode</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6.2 Modifying the Address Translation Routines.html"><strong aria-hidden="true">6.2.</strong> Modifying the Address Translation Routines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6.3 Initializing the Address Translation Page Tables.html"><strong aria-hidden="true">6.3.</strong> Initializing the Address Translation Page Tables</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_7.html"><strong aria-hidden="true">7.</strong> Chapter 7 Kernel Booting — Initialization Preparations</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.1 Setting the Initialization Task Stack-End Magic Number.html"><strong aria-hidden="true">7.1.</strong> Setting the Initialization Task Stack-End Magic Number</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.2 Initializing the SMP Logical-to-Physical CPU Core Mapping Table.html"><strong aria-hidden="true">7.2.</strong> Initializing the SMP Logical-to-Physical CPU Core Mapping Table</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.3 Early Initialization of the Debug Objects Infrastructure.html"><strong aria-hidden="true">7.3.</strong> Early Initialization of the Debug Objects Infrastructure</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.4 Early Initialization of Control Groups.html"><strong aria-hidden="true">7.4.</strong> Early Initialization of Control Groups</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.6 Initializing the Primary Boot CPU.html"><strong aria-hidden="true">7.5.</strong> Disabling Local Interrupts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.7 High-Memory Page Address Translation Initialization.html"><strong aria-hidden="true">7.6.</strong> High-Memory Page Address Translation Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7.8 Early Initialization of the Linux Security Modules (LSM).html"><strong aria-hidden="true">7.7.</strong> Early Initialization of the Linux Security Modules (LSM)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_8.html"><strong aria-hidden="true">8.</strong> Chapter 8 Kernel Booting — Framework-Based Hardware Configuration</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8.1 Foundational Architectural Concepts.html"><strong aria-hidden="true">8.1.</strong> Foundational Architectural Concepts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8.2 Architecture-Specific Initialization Function (setup_arch).html"><strong aria-hidden="true">8.2.</strong> Architecture-Specific Initialization Function (setup_arch)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_9.html"><strong aria-hidden="true">9.</strong> Chapter 9 Kernel Boot - Boot Configuration</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9.1 Bootconfig File.html"><strong aria-hidden="true">9.1.</strong> Bootconfig File</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9.2 Parsing the Bootconfig File.html"><strong aria-hidden="true">9.2.</strong> Parsing the Bootconfig File</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9.3 Command-Line Parameter Merging.html"><strong aria-hidden="true">9.3.</strong> Command-Line Parameter Merging</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_10.html"><strong aria-hidden="true">10.</strong> Chapter 10 CPU Configuration under Symmetric Multiprocessing (SMP) Boot Mode</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10.1 Configuring the Number of CPU Cores.html"><strong aria-hidden="true">10.1.</strong> Configuring the Number of CPU Cores</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10.2 Allocating a Private Memory Block for Each Core.html"><strong aria-hidden="true">10.2.</strong> Allocating a Private Memory Block for Each Core</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10.3 Preparing the Boot CPU.html"><strong aria-hidden="true">10.3.</strong> Preparing the Boot CPU</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10.4 CPU Hotplug State Initialization.html"><strong aria-hidden="true">10.4.</strong> CPU Hotplug State Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_11.html"><strong aria-hidden="true">11.</strong> Chapter 11 Memory Node and Zone Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11.1 Nodes and Zones.html"><strong aria-hidden="true">11.1.</strong> Nodes and Zones</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11.2 Zone Structure Initialization.html"><strong aria-hidden="true">11.2.</strong> Zone Structure Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11.3 Memory Hotplug Management Initialization.html"><strong aria-hidden="true">11.3.</strong> Memory Hotplug Management Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_12.html"><strong aria-hidden="true">12.</strong> chapter 12 Jump Label Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12.1 Jump Label Modification.html"><strong aria-hidden="true">12.1.</strong> Jump Label Modification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12.2 Foundational Principles of Optimizing Program Performance via Label Modification.html"><strong aria-hidden="true">12.2.</strong> Foundational Principles of Optimizing Program Performance via Label Modification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12.3 Generation of the jump_entry.html"><strong aria-hidden="true">12.3.</strong> Generation of the jump_entry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12.4 Usage Methodology of Static Keys.html"><strong aria-hidden="true">12.4.</strong> Usage Methodology of Static Keys</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12.5 Initializing the Jump Table.html"><strong aria-hidden="true">12.5.</strong> Initializing the Jump Table</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_13.html"><strong aria-hidden="true">13.</strong> Chapter 13 Command-Line Parameter Parsing</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="13.1 Kernel Command-Line Parameters.html"><strong aria-hidden="true">13.1.</strong> Kernel Command-Line Parameters</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="13.2 Early Option Parsing.html"><strong aria-hidden="true">13.2.</strong> Early Option Parsing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="13.3 Separation of Command-Line Options and Environment Variables.html"><strong aria-hidden="true">13.3.</strong> Separation of Command-Line Options and Environment Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="13.4 Option Processing for the Init Process.html"><strong aria-hidden="true">13.4.</strong> Option Processing for the Init Process</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_14.html"><strong aria-hidden="true">14.</strong> Chapter 14 Buffer and Exception Handler Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="14.1 Log Buffer Configuration.html"><strong aria-hidden="true">14.1.</strong> Log Buffer Configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="14.2 Virtual File System Buffer Initialization.html"><strong aria-hidden="true">14.2.</strong> Virtual File System Buffer Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="14.3 Exception Handler Queueing.html"><strong aria-hidden="true">14.3.</strong> Exception Handler Queueing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="14.4 Trap Initialization.html"><strong aria-hidden="true">14.4.</strong> Trap Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_15.html"><strong aria-hidden="true">15.</strong> Chapter 15 Linux Memory Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.1 Fundamental Concepts.html"><strong aria-hidden="true">15.1.</strong> Fundamental Concepts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.2 Memory Allocation Algorithms.html"><strong aria-hidden="true">15.2.</strong> Memory Allocation Algorithms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.3 Red-Black Trees.html"><strong aria-hidden="true">15.3.</strong> Red-Black Trees</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.4 Page Swapping and Virtual Memory Mapping.html"><strong aria-hidden="true">15.4.</strong> Page Swapping and Virtual Memory Mapping</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.5 Page Migration.html"><strong aria-hidden="true">15.5.</strong> Page Migration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.6 Memory Reclamation.html"><strong aria-hidden="true">15.6.</strong> Memory Reclamation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.7 Memory Compaction.html"><strong aria-hidden="true">15.7.</strong> Memory Compaction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.8 Kernel Same-Page Merging.html"><strong aria-hidden="true">15.8.</strong> Kernel Same-Page Merging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.9 Page Extension.html"><strong aria-hidden="true">15.9.</strong> Page Extension</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.10 Bounce Buffers.html"><strong aria-hidden="true">15.10.</strong> Bounce Buffers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.11 Kernel Memory Leak Detector Subsystem.html"><strong aria-hidden="true">15.11.</strong> Kernel Memory Leak Detector Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.12 Debug Objects Subsystem.html"><strong aria-hidden="true">15.12.</strong> Debug Objects Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.13 Memory Resource Controller.html"><strong aria-hidden="true">15.13.</strong> Memory Resource Controller</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="15.14 Memory Initialization Function.html"><strong aria-hidden="true">15.14.</strong> Memory Initialization Function</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_16.html"><strong aria-hidden="true">16.</strong> Chapter 16 Kernel Function Runtime Tracking Module Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="16.1 Introduction to the Function Tracer Subsystem.html"><strong aria-hidden="true">16.1.</strong> Introduction to the Function Tracer Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="16.2 Function Tracer Module Initialization.html"><strong aria-hidden="true">16.2.</strong> Function Tracer Module Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="16.3 Early Tracing Framework Configuration.html"><strong aria-hidden="true">16.3.</strong> Early Tracing Framework Configuration</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_17.html"><strong aria-hidden="true">17.</strong> Chapter 17 Task Scheduler Module Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.1 Introduction to the Task Scheduler.html"><strong aria-hidden="true">17.1.</strong> Introduction to the Task Scheduler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.2 Wait Queue Initialization.html"><strong aria-hidden="true">17.2.</strong> Wait Queue Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.3 Initialization of Different Scheduling Group Categories.html"><strong aria-hidden="true">17.3.</strong> Initialization of Different Scheduling Group Categories</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.4 Runqueue Initialization.html"><strong aria-hidden="true">17.4.</strong> Runqueue Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.5 Task Weight and Context Switching Mechanism Configuration.html"><strong aria-hidden="true">17.5.</strong> Task Weight and Context Switching Mechanism Configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.6 Idle Process Configuration.html"><strong aria-hidden="true">17.6.</strong> Idle Process Configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.7 Fair Scheduling Policy Infrastructure Setup.html"><strong aria-hidden="true">17.7.</strong> Fair Scheduling Policy Infrastructure Setup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.8 Clock Tick Mechanism Configuration.html"><strong aria-hidden="true">17.8.</strong> Clock Tick Mechanism Configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.9 Scheduling Task Statistics and Pressure Stall Information Function Configuration.html"><strong aria-hidden="true">17.9.</strong> Scheduling Task Statistics and Pressure Stall Information Function Configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="17.10 Utilization Clamping Configuration.html"><strong aria-hidden="true">17.10.</strong> Utilization Clamping Configuration</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_18.html"><strong aria-hidden="true">18.</strong> Chapter 18 Radix Tree, Kernel Isolation, and Task Queue Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="18.1 Introduction to Radix Trees.html"><strong aria-hidden="true">18.1.</strong> Introduction to Radix Trees</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="18.2 Radix Tree Initialization.html"><strong aria-hidden="true">18.2.</strong> Radix Tree Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="18.3 Kernel Isolation.html"><strong aria-hidden="true">18.3.</strong> Kernel Isolation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="18.4 Early Workqueue Initialization.html"><strong aria-hidden="true">18.4.</strong> Early Workqueue Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_19.html"><strong aria-hidden="true">19.</strong> Chapter 19 RCU Mechanism and Event Tracing Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.1 Introduction to RCU.html"><strong aria-hidden="true">19.1.</strong> Introduction to RCU</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.2 RCU Initialization.html"><strong aria-hidden="true">19.2.</strong> RCU Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.3 Event Tracing.html"><strong aria-hidden="true">19.3.</strong> Event Tracing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.4 Event Tracing Subsystem Initialization.html"><strong aria-hidden="true">19.4.</strong> Event Tracing Subsystem Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.5 Enabling Initialization Call Event Tracing.html"><strong aria-hidden="true">19.5.</strong> Enabling Initialization Call Event Tracing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="19.6 Context Tracking Initialization.html"><strong aria-hidden="true">19.6.</strong> Context Tracking Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_20.html"><strong aria-hidden="true">20.</strong> Chapter 20 Interrupt System Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20.1 Generic IRQ Subsystem.html"><strong aria-hidden="true">20.1.</strong> Generic IRQ Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20.4 Accommodating Architecture-Specific Interrupt Requirements.html"><strong aria-hidden="true">20.2.</strong> Accommodating Architecture-Specific Interrupt Requirements</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20.5 Framework-Level Interrupt Initialization.html"><strong aria-hidden="true">20.3.</strong> Framework-Level Interrupt Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Chapter_21.html"><strong aria-hidden="true">21.</strong> Chapter 21 Time Subsystem Kernel Framework Layer Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.1 Introduction to the Time Subsystem.html"><strong aria-hidden="true">21.1.</strong> Introduction to the Time Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.2 Establishing the Clock Tick and Broadcast Framework.html"><strong aria-hidden="true">21.2.</strong> Establishing the Clock Tick and Broadcast Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.3 Offloading RCU Callbacks.html"><strong aria-hidden="true">21.3.</strong> Offloading RCU Callbacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.4 Establishing the Timer Framework.html"><strong aria-hidden="true">21.4.</strong> Establishing the Timer Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.5 Establishing the High-Resolution Timer Subsystem.html"><strong aria-hidden="true">21.5.</strong> Establishing the High-Resolution Timer Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.6 Establishing the Softirq Framework.html"><strong aria-hidden="true">21.6.</strong> Establishing the Softirq Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="21.7 Establishing the Kernel Timekeeping System.html"><strong aria-hidden="true">21.7.</strong> Establishing the Kernel Timekeeping System</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_22.html"><strong aria-hidden="true">22.</strong> Chapter 22 Security Hardening Vault</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="22.1 The Critical Importance of Computer Security.html"><strong aria-hidden="true">22.1.</strong> The Critical Importance of Computer Security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="22.2 Initializing the Random Number Generator Entropy Sources.html"><strong aria-hidden="true">22.2.</strong> Initializing the Random Number Generator Entropy Sources</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="22.3 Harvesting Latent Entropy.html"><strong aria-hidden="true">22.3.</strong> Harvesting Latent Entropy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="22.4 Fine-Tuning via Device Specifics.html"><strong aria-hidden="true">22.4.</strong> Fine-Tuning via Device Specifics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="22.5 Initializing the Stack Canary Subsystem.html"><strong aria-hidden="true">22.5.</strong> Initializing the Stack Canary Subsystem</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_23.html"><strong aria-hidden="true">23.</strong> Chapter 23 Time Base and Multi-Core Communication</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="23.1 Time Base Initialization.html"><strong aria-hidden="true">23.1.</strong> Time Base Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="23.2 Performance Monitoring Initialization.html"><strong aria-hidden="true">23.2.</strong> Performance Monitoring Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="23.3 Legacy Profiling Subsystem Initialization.html"><strong aria-hidden="true">23.3.</strong> Legacy Profiling Subsystem Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="23.4 Establishing the Multi-Core Communication Mechanism.html"><strong aria-hidden="true">23.4.</strong> Establishing the Multi-Core Communication Mechanism</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_24.html"><strong aria-hidden="true">24.</strong> Chapter 24 Console Enabling and Lock Self-Testing</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="24.1 The Linux Console.html"><strong aria-hidden="true">24.1.</strong> The Linux Console</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="24.2 Entering the Interactive Phase.html"><strong aria-hidden="true">24.2.</strong> Entering the Interactive Phase</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="24.3 Memory Pool Finalization.html"><strong aria-hidden="true">24.3.</strong> Memory Pool Finalization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="24.4 Establishing the Real-Time Console Infrastructure.html"><strong aria-hidden="true">24.4.</strong> Establishing the Real-Time Console Infrastructure</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_25.html"><strong aria-hidden="true">25.</strong> Chapter 25 Memory and Time Initialization Finalization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.1 Establishing the Memory Encryption Mechanism.html"><strong aria-hidden="true">25.1.</strong> Establishing the Memory Encryption Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.2 Initrd Structural Validation and Security Auditing.html"><strong aria-hidden="true">25.2.</strong> Initrd Structural Validation and Security Auditing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.3 Configuring Per-CPU Page Sets.html"><strong aria-hidden="true">25.3.</strong> Configuring Per-CPU Page Sets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.4 Initializing the NUMA Policy Framework.html"><strong aria-hidden="true">25.4.</strong> Initializing the NUMA Policy Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.5 Initializing the Advanced Configuration and Power Interface.html"><strong aria-hidden="true">25.5.</strong> Initializing the Advanced Configuration and Power Interface</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.6 Timer Initialization Finalization.html"><strong aria-hidden="true">25.6.</strong> Timer Initialization Finalization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.7 Initializing the Scheduler Clock Infrastructure.html"><strong aria-hidden="true">25.7.</strong> Initializing the Scheduler Clock Infrastructure</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="25.8 Calibrating the Delay Loop.html"><strong aria-hidden="true">25.8.</strong> Calibrating the Delay Loop</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_26.html"><strong aria-hidden="true">26.</strong> Chapter 26 Establishing the Foundation for Process Creation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.1 Process ID (PID) Management Mechanism Initialization.html"><strong aria-hidden="true">26.1.</strong> Process ID (PID) Management Mechanism Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.2 Establishing the Anonymous Memory Management Mechanism.html"><strong aria-hidden="true">26.2.</strong> Establishing the Anonymous Memory Management Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.3 Transitioning EFI Firmware to Virtual Address Maps.html"><strong aria-hidden="true">26.3.</strong> Transitioning EFI Firmware to Virtual Address Maps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.4 Configuring the Thread Stack Cache Pool.html"><strong aria-hidden="true">26.4.</strong> Configuring the Thread Stack Cache Pool</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.5 Establishing the Credentials Management Mechanism.html"><strong aria-hidden="true">26.5.</strong> Establishing the Credentials Management Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.6 Preparing Resources for Process Replication.html"><strong aria-hidden="true">26.6.</strong> Preparing Resources for Process Replication</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="26.7 Establishing Resources for Process Execution.html"><strong aria-hidden="true">26.7.</strong> Establishing Resources for Process Execution</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_27.html"><strong aria-hidden="true">27.</strong> Chapter 27 Core Kernel Functional Subsystem Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.1 Establishing the UTS Namespace Subsystem.html"><strong aria-hidden="true">27.1.</strong> Establishing the UTS Namespace Subsystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.2 Establishing the Filesystem Buffer Management Mechanism.html"><strong aria-hidden="true">27.2.</strong> Establishing the Filesystem Buffer Management Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.3 Establishing the Key Retention Service.html"><strong aria-hidden="true">27.3.</strong> Establishing the Key Retention Service</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.4 Establishing the Security Subsystem Architecture.html"><strong aria-hidden="true">27.4.</strong> Establishing the Security Subsystem Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.5 Transitioning the Debugging Modality.html"><strong aria-hidden="true">27.5.</strong> Transitioning the Debugging Modality</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.6 Establishing Filesystem Caches.html"><strong aria-hidden="true">27.6.</strong> Establishing Filesystem Caches</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.7 Establishing the Page Cache Mechanism.html"><strong aria-hidden="true">27.7.</strong> Establishing the Page Cache Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.8 Establishing the Signal Handling Mechanism.html"><strong aria-hidden="true">27.8.</strong> Establishing the Signal Handling Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="27.9 Sequence File Subsystem Initialization.html"><strong aria-hidden="true">27.9.</strong> Sequence File Subsystem Initialization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_28.html"><strong aria-hidden="true">28.</strong> Chapter 28 28 Establishing the User Interface and Container Capabilities</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="28.1 Process Information Pseudo-Filesystem Root Directory Initialization.html"><strong aria-hidden="true">28.1.</strong> Process Information Pseudo-Filesystem Root Directory Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="28.2 Initializing the Namespace Virtual Filesystem.html"><strong aria-hidden="true">28.2.</strong> Initializing the Namespace Virtual Filesystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="28.3 Initializing the cpuset Mechanism.html"><strong aria-hidden="true">28.3.</strong> Initializing the cpuset Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="28.4 Constructing the Comprehensive System Resource Management Framework.html"><strong aria-hidden="true">28.4.</strong> Constructing the Comprehensive System Resource Management Framework</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_29.html"><strong aria-hidden="true">29.</strong> Chapter 29 Platform and Architecture Late Initialization</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.1 Initializing the Kernel Code Hot-Patching Mechanism.html"><strong aria-hidden="true">29.1.</strong> Initializing the Kernel Code Hot-Patching Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.2 Auditing and Mitigating Discovered CPU Defects.html"><strong aria-hidden="true">29.2.</strong> Auditing and Mitigating Discovered CPU Defects</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.3 Transitioning to Active ACPI Operational Mode.html"><strong aria-hidden="true">29.3.</strong> Transitioning to Active ACPI Operational Mode</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.4 Low-Level ACPI Hardware Configuration Architecture.html"><strong aria-hidden="true">29.4.</strong> Low-Level ACPI Hardware Configuration Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.5 Supplementing Platform Device or Hardware Description Information.html"><strong aria-hidden="true">29.5.</strong> Supplementing Platform Device or Hardware Description Information</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="29.6 Establishing the Data Concurrency Error Detection Mechanism.html"><strong aria-hidden="true">29.6.</strong> Establishing the Data Concurrency Error Detection Mechanism</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_30.html"><strong aria-hidden="true">30.</strong> Chapter 30 Stepping Into the Normal Kernel Runtime Phase</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.1 Activating the Multi-Tasking Execution Mechanism.html"><strong aria-hidden="true">30.1.</strong> Activating the Multi-Tasking Execution Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.2 Transitioning to User Space.html"><strong aria-hidden="true">30.2.</strong> Transitioning to User Space</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.3 Processing Deferrable Post-Initialization Tasks.html"><strong aria-hidden="true">30.3.</strong> Processing Deferrable Post-Initialization Tasks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.4 Introduction to the initcall Mechanism.html"><strong aria-hidden="true">30.4.</strong> Introduction to the initcall Mechanism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.5 Peripheral and Subsystem Initialization.html"><strong aria-hidden="true">30.5.</strong> Peripheral and Subsystem Initialization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.6 Reclaiming Boot-Stage Resources and Finalizing Kernel Mappings.html"><strong aria-hidden="true">30.6.</strong> Reclaiming Boot-Stage Resources and Finalizing Kernel Mappings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.7 Marking the System as Officially Operational.html"><strong aria-hidden="true">30.7.</strong> Marking the System as Officially Operational</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.8 Launching the User-Space init Program.html"><strong aria-hidden="true">30.8.</strong> Launching the User-Space init Program</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="30.9 Preventing Compiler Optimization.html"><strong aria-hidden="true">30.9.</strong> Preventing Compiler Optimization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_31.html"><strong aria-hidden="true">31.</strong> Chapter 31 Linux Operating System Porting</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.1 The Significance of Linux Porting.html"><strong aria-hidden="true">31.1.</strong> The Significance of Linux Porting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.2 Building the Development Environment.html"><strong aria-hidden="true">31.2.</strong> Building the Development Environment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.3 Building the Yocto Development Environment.html"><strong aria-hidden="true">31.3.</strong> Building the Yocto Development Environment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.4 U-Boot Bootloader Porting.html"><strong aria-hidden="true">31.4.</strong> U-Boot Bootloader Porting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.5 Linux Operating System Porting.html"><strong aria-hidden="true">31.5.</strong> Linux Operating System Porting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="31.6 OP-TEE Porting.html"><strong aria-hidden="true">31.6.</strong> OP-TEE Porting</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concluding remarks.html"><strong aria-hidden="true">32.</strong> Concluding Remarks</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

