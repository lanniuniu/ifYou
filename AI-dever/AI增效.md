以下是 2026 年最热门的 **AI 全栈开发 CLI 工具**，按场景分类：

---

## 一、AI 编程助手（核心代码开发）

| 工具 | 定位 | 特点 | 适用场景 |
|------|------|------|---------|
| **Claude Code** | 终端 AI 程序员 | 深度项目上下文理解，可执行文件操作、运行命令，支持 Skill 和 MCP | 大型项目重构、复杂功能开发 |
| **Cursor** | AI 原生 IDE | 实时补全 + 聊天 + Composer 多文件编辑，支持任意模型 | 日常编码、快速原型 |
| **Windsurf** | 协作式 AI 编码 | Cascade 智能体模式，自动规划多步任务，上下文感知强 | 全栈开发、前后端联调 |
| **Aider** | 终端多文件编辑 | Git 集成极好，支持多模型切换，适合批量修改 | 功能迭代、代码迁移 |
| **GitHub Copilot CLI** | GitHub 生态 AI | 与 Copilot 订阅打通，命令行自然语言转 Shell | 快速执行 GitHub 操作 |
| **Codeium** | 免费替代方案 | 个人免费，支持 70+ 语言，IDE 插件 + CLI | 预算有限的团队 |

**Claude Code vs Cursor vs Aider：**

```
Claude Code：终端交互，项目级理解，适合"指挥 AI 干大活"
    │
    ├── 优势：上下文窗口大，能读整个项目，执行复杂工作流
    └── 劣势：没有 GUI，不适合可视化调试

Cursor：IDE 内嵌 AI，实时感知光标位置
    │
    ├── 优势：编码体验流畅，Tab 补全极快，可视化好
    └── 劣势：大型重构时上下文管理不如 Claude Code

Aider：轻量级终端工具，Git 原生
    │
    ├── 优势：成本低，Git 提交清晰，多模型灵活切换
    └── 劣势：功能相对简单，没有 Skill/MCP 生态
```

---

## 二、AI 全栈框架（快速构建应用）

| 工具 | 定位 | 技术栈 | 特点 |
|------|------|--------|------|
| **Lovable** | AI 全栈生成器 | React + Supabase + Tailwind | 自然语言生成完整应用，可视化编辑 |
| **v0.dev** | UI 组件生成 | React + Tailwind + shadcn | Vercel 出品，设计系统级组件 |
| **Bolt.new** | 浏览器内全栈开发 | 任意框架 | StackBlitz 出品，浏览器即 IDE，一键部署 |
| **Replit Agent** | 云端 AI 开发环境 | 多语言支持 | 从需求到部署一条龙，云端运行 |
| **Tempo** | AI 前端开发 | React | 专注前端，设计稿转代码能力强 |

**使用场景：**

```bash
# Lovable：5 分钟生成一个 SaaS 后台
"创建一个用户管理后台，有登录、列表、增删改查，用深色主题"

# v0：生成可复用的 UI 组件
"一个带搜索和分页的数据表格，支持行内编辑"

# Bolt.new：浏览器里完成全栈开发
"用 Next.js + Prisma 做一个博客系统，部署到 Vercel"
```

---

## 三、AI 基础设施 / DevOps

| 工具 | 定位 | 场景 |
|------|------|------|
| **Kubectl + AI 插件** | K8s AI 助手 | 自然语言管理集群：`"扩容 frontend 到 3 个副本"` |
| **Terraform AI** | 基础设施即代码 | 自动生成/审查 Terraform 配置 |
| **GitHub Copilot for Docs** | 文档 AI | 自动生成 API 文档、README |
| **Snyk AI** | 安全 AI | 自动修复漏洞，生成安全报告 |
| **Datadog AI** | 可观测性 AI | 异常检测、根因分析、自动告警 |
| **Spec Kit (GitHub)** | 规范驱动开发 | AI 辅助的 Spec-Driven 工作流 |

---

## 四、AI 模型调用与调试

| 工具 | 定位 | 特点 |
|------|------|------|
| **Ollama** | 本地模型运行 | 一行命令运行 Llama、DeepSeek 等开源模型，完全离线 |
| **LM Studio** | 本地模型 GUI | 图形化管理本地模型，适合调试 |
| **aichat** | 多模型 CLI 聊天 | 统一接口调用 OpenAI、Claude、Gemini、本地模型 |
| **llm (Simon Willison)** | 数据科学家工具 | 管道式处理，与 SQLite 深度集成 |
| **OpenRouter CLI** | 模型路由 | 统一 API 访问 100+ 模型，自动 failover |

```bash
# Ollama：本地运行 DeepSeek
ollama run deepseek-r1:14b

# aichat：多模型对话
aichat -m claude -s "你是架构师" -f src/ "审查这段代码"

# llm：管道处理
cat data.csv | llm -m gpt-4 "分析数据趋势并生成图表代码"
```

---

## 五、AI 测试与质量保障

| 工具 | 定位 | 场景 |
|------|------|------|
| **Cypress AI** | E2E 测试生成 | 自然语言生成测试用例，自动修复选择器 |
| **Playwright AI** | 浏览器自动化 | AI 辅助定位元素，生成测试脚本 |
| **Applitools** | 视觉回归 AI | AI 比对 UI 截图，忽略非预期差异 |
| **Testim** | 智能测试维护 | 自动适应 UI 变更，减少测试脆弱性 |
| **Qodo (原 Codium)** | 代码质量 AI | 自动生成测试、找 Bug、解释代码 |

---

## 六、AI 文档与协作

| 工具 | 定位 | 场景 |
|------|------|------|
| **Mintlify** | AI 文档生成 | 从代码注释自动生成 API 文档 |
| **Notion AI** | 知识库 AI | 团队文档智能问答、内容生成 |
| **Linear** | AI 项目管理 | 自然语言创建任务、自动关联 PR |
| **Slack AI** | 团队沟通 AI | 总结长对话、提取 Action Items |

---

## 推荐组合（按团队规模）

### 个人开发者 / 小团队

```
Cursor（主力 IDE）
  + Claude Code（复杂重构）
  + Ollama（本地模型，隐私敏感场景）
  + v0（快速 UI 原型）
  + Bolt.new（快速全栈原型）
```

### 中型团队（5-20人）

```
Claude Code（规范驱动，Skill + MCP）
  + Cursor/Windsurf（日常编码）
  + GitHub Copilot（全员补全）
  + Spec Kit（规范管理）
  + Cypress AI（测试生成）
```

### 大型企业

```
Claude Code Enterprise（SSO、审计）
  + Harness AIDA（DevOps AI）
  + Snyk AI（安全）
  + Datadog AI（可观测性）
  + 自研 MCP Server（内部系统集成）
```

---

## 2026 年新趋势

| 趋势 | 说明 |
|------|------|
| **Agent 模式普及** | 从"补全代码"到"自主完成任务"，Claude Code、Windsurf Cascade 代表方向 |
| **MCP 生态爆发** | 标准化工具连接，AI 能操作的数据库、API、文件系统越来越多 |
| **本地模型可用** | Ollama + 量化模型让 70B 参数模型在笔记本流畅运行 |
| **多模型协作** | 不同任务用不同模型（思考用 DeepSeek，生成用 Claude，快速响应用 GPT-4o-mini） |
| **AI 原生 Git 工作流** | 自动生成 PR 描述、审查代码、修复冲突、合并前验证 |

---

## 方法论
Vibe Coding
Agentic Engineering
BMAD
Spec-Driven Development：重点。他的核心工作流是什么？
Harness Engineering
多智能体团队模式

## 一句话总结

> **AI 全栈 CLI 工具正从"辅助编码"进化到"自主开发"**——Claude Code 和 Windsurf 引领 Agent 模式，Cursor 守住 IDE 体验，Ollama 解决隐私和成本，MCP 打通生态壁垒。
