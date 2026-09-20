# Changelog

## v2.1.0（2026-09-20）— 元认知层级改名 `L0–L3` → `MC0–MC3`

### 🔤 命名变更（破坏性最小化）
- 元认知层级统一改称 **`MC0–MC3`**（Metacognition）：MC0 无元认知 / MC1 标注内容 / MC2 标注模式 / MC3 标注学习方法
- **改名原因**：旧称 `L0–L3` 与「风险档位 / 信任层级 `L1–L3`」撞车；后者已为多实例鉴权链路（A2A 委托 `L2`/`L3`）沿用，改动波及面大 → **元认知让位**
- **旧称不抹掉**：文中首次出现处保留「MC0–MC3（旧称 L0–L3）」
- **验证器兼容**：`evomap-validate.js` 同时接受 `MC` / `L` 两种写法 → 已引用 `L0–L3` 的实例不会崩；13/13 通过
- 一并规避与 **CSB-Security 的 `M1–M4`**（安全里程碑）冲突 —— 此前设想过的 `M*` 编号不可用

### 📄 涉及文件
- 本仓：`README.md` · `SKILL.md` · `templates/SELF_STATE.md` · `evomap-validate.js`
- 关联同步：`carbon-silicon-bond-protocol`（`docs/csb-vocabulary-all-in-one.md` / `docs/元认知层级模型验证报告.md` / `philosophy/skills/csb-metacognition/SKILL.md`）

### 🧭 命名约定（隔离）
> `L1–L3` 专表「风险档位 / 信任层级」（鉴权链路），不再复用；元认知层级统一用 `MC0–MC3`。新增带编号的层级体系前，先查是否已有占用。

---

_本文件自 v2.1.0 起建立。v2.0（2026-08-28：层级模型 + 记忆分层 + 时间感知 + 迎合度自检）及更早版本见 git history。_
