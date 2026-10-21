# Changelog

## v2.2.0（2026-10-21）— 6 问 + 双层映射（Harness² 对照 P1）

### ✨ 变更（SKILL.md 元认知自问）
- 5 问 → **6 问**：新增 ④ 我改了什么（对象+位置）⑤ 证据是什么（改前改后对照）⑥ 副作用是什么（连带影响+回滚点）
- **落盘判据（硬规则）**：4/5/6 三问必须有落盘答案（corrections.md / lessons.md / SELF_STATE，带时间戳+可 diff 位置）；只在对话里回答不算；**任一空答 = 本次自问未通过**
- 原第 4 问「我需要改进什么」被 4–6 取代（空泛问法是空答温床）；层级突破自问移入双层映射作附加问

### ✨ 新增：双层映射（MC0–MC3 × 任务级/优化级）
- 任务级（MC1–MC2 改任务内做法）：答案可只进任务日志
- 优化级（MC3 改方法本身）：三问必须全落盘（对应 EXPERIENCE 层语义），空答判定落在优化级

### 📝 来源
- Harness² 对照表 v2 §3 P1：「6 问中『我改了什么/证据/副作用』三问必须有落盘答案，空答 = 未通过」（`csb-aep/docs/harness2-csb-map-v2.md`）


## v2.1.0（2026-10-04）— 版本基建：VERSION + package.json 补齐

### ✨ 新增
- `VERSION`（2.1.0）+ `package.json`（2.1.0）：补本仓**版本基建**（此前无 package.json/VERSION）
- 与 `SKILL.md` metadata（2.1.0）+ 本 CHANGELOG 对齐

### 📝 说明
- 本次仅补版本载体，**未改任何运行逻辑**


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
