# 🎮 SMS RPG - AI驱动的文字冒险游戏引擎

> 让AI为你编织独一无二的江湖传奇，每一次对话都是新的冒险

[English](README_en.md) | 简体中文

---

## ✨ 特色功能

### 🎯 智能剧情生成
- 基于 Moonshot/Kimi 大语言模型驱动的动态剧情
- 武侠修仙、江湖门派、朝廷暗斗...任意世界观
- 每个选择都会影响故事走向

### 💾 完善的数据持久化
- 本地存档系统，随时保存/读取进度
- 支持多存档槽位
- 进度自动保存

### 🎭 个性化定制
- 支持自定义主角名和背景故事
- 可选的个性化世界（读取 memory.md）
- 多种叙事风格可选

### 🔓 灵活的授权体系
- 免费版：基础功能
- 完整版：解锁更多精彩内容
- 支持授权码激活

---

## 🚀 快速开始

### 环境要求
- Node.js >= 18

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/JayShna/sms-rpg.git
cd sms-rpg

# 设置 Moonshot API Key（必须）
export MOONSHOT_API_KEY="your_api_key_here"

# 启动游戏
npm run dialog -- --user your-user-id --input "开始新游戏"
```

### 首次游戏流程

```
开始新游戏
  ↓
输入主角名（如：云游子）
  ↓
输入世界观设定（如：武侠修仙，江湖门派与朝廷暗斗）
  ↓
选择叙事风格（输入 默认 或自定义风格）
  ↓
选择存档槽位
  ↓
开始冒险！
```

### 常用指令

| 指令 | 说明 |
|------|------|
| `开始新游戏` | 创建新存档 |
| `继续游戏` | 继续上次进度 |
| `存档列表` | 查看所有存档 |
| `授权状态` | 查看授权信息 |
| `解锁 xxx` | 使用授权码解锁 |

---

## 📁 项目结构

```
sms-rpg/
├── SKILL.md          # OpenClaw Skill 配置文件
├── package.json      # NPM 包配置
├── dist/             # 编译后的运行时（可直接执行）
│   └── dialog_engine.js  # 游戏引擎主程序
├── code/             # TypeScript 源代码
├── prompts/          # AI 提示词模板
└── tsconfig.json     # TypeScript 配置
```

---

## ⚙️ 高级配置

### 环境变量

| 变量名 | 必填 | 说明 |
|--------|------|------|
| `MOONSHOT_API_KEY` | ✅ | Moonshot API 密钥 |
| `MOONSHOT_BASE_URL` | ❌ | API 地址（默认官方） |
| `MOONSHOT_MODEL` | ❌ | 模型名称 |
| `MOONSHOT_TIMEOUT_MS` | ❌ | 请求超时（毫秒） |
| `SMS_DATA_DIR` | ❌ | 数据目录（默认本地） |
| `SMS_LICENSE_VERIFY_URL` | ❌ | 授权验证接口 |

### 自定义世界（可选）

在游戏目录下创建 `memory.md` 文件，可以让AI根据你的设定生成个性化世界：

```markdown
# 我的武侠世界

这是一个架空的武侠世界...
```

---

## 🛠️ 开发指南

### 从源码构建

```bash
# 安装依赖
npm install

# 运行开发版本
npm run dialog -- --user demo --input "开始新游戏"

# 或直接执行
node dist/dialog_engine.js --user demo --input "开始新游戏"
```

### 运行测试

```bash
# 直接执行引擎
node dist/dialog_engine.js --user test-user --input "测试内容"
```

---

## 📝 游戏世界观示例

```
主角：云游子
背景：武侠修仙，江湖门派与朝廷暗斗

【开场引子】
华山之巅，雾气缭绕。云游子立于悬崖边，
手中握着一封来自师门的加急密信。
信上只有八个字："速归，门派有变。"
...
```

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

---

## 📄 许可证

本项目基于 [CC BY-NC-SA 4.0](LICENSE) 许可证开源。

**版权声明**: Copyright © 2026 SMS-Generate Team. 保留所有权利。

---

## 🔗 相关链接

- [ClawHub 技能市场](https://clawhub.ai)
- [OpenClaw 框架](https://github.com)
- [Moonshot AI](https://www.moonshot.cn/)

---

如果你觉得这个项目有帮助，欢迎 ⭐ Star 支持！
