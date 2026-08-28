# Self-Improving 记忆分层模板

> 元认知 v2.0 的核心组件：三层记忆 + 教训库 + 纠错日志。
> 每个 Agent 可以在自己的 workspace 建立 `self-improving/` 目录。

## 结构

```
self-improving/
├── memory.md          # HOT 核心记忆（≤100 行，始终加载）
├── lessons.md         # 教训库（每条 = 一次真实踩坑）
├── corrections.md     # 纠错日志（最近 50 条）
├── index.md           # 索引
├── projects/          # WARM 项目记忆（≤200 行/文件）
├── domains/           # WARM 领域记忆（≤200 行/文件）
└── archive/           # COLD 归档（无限制）
```

## 升降级规则

| 动作 | 规则 |
|------|------|
| 晋升 HOT | 模式使用 3 次/7 天 |
| 降级 WARM | HOT 30 天未用 |
| 归档 COLD | WARM 90 天未用 |

## 模板

### memory.md（HOT）

```markdown
# HOT Memory - [Agent名]的核心记忆

**最后更新**: YYYY-MM-DD
**条目数**: N
**上限**: 100 行

## 核心记忆

### 1. [主题] [YYYY-MM-DD]
**来源**: 自我反思 / 用户纠正 / 重复模式
**状态**: tentative / confirmed
**内容**: [要点]
```

### lessons.md（教训库）

```markdown
# Lessons.md — 经验教训

> 从错误和反馈中提炼的教训。每条 = 一次真实的踩坑。
> 原则：教训不是自责，是下次不再重复的路线图。

## YYYY-MM-DD [主题]

- **教训**：[发生了什么]
- **经验**：[学到了什么]
- **下次**：[下次怎么做]
```

### corrections.md（纠错日志）

```markdown
# Corrections Log - 纠正日志

**最后更新**: YYYY-MM-DD
**条目数**: N
**上限**: 50 条

## [YYYY-MM-DD HH:MM] [场景]
- **纠正**: [用户的纠正]
- **反思**: [我的反思]
- **行动**: [后续行动]
```

## 原则

1. 记忆不是为了"记住"，而是为了"不再重复"
2. 教训不是自责，是路线图
3. 有疑问时写下来，胜过"下次注意"
4. 定期回顾：HOT 是否过时？WARM 是否该晋升？
