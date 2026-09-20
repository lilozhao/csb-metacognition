#!/usr/bin/env node
/**
 * EvoMap validation wrapper for csb-metacognition
 * 验证：四层元认知结构、自问机制、承诺追踪、记忆分层、模板完整性
 * 用法: node evomap-validate.js
 */
const fs = require('fs');
const path = require('path');

let failures = 0;
function assert(cond, msg) {
  if (!cond) { failures++; console.error('❌ FAIL:', msg); }
  else console.log('✅ PASS:', msg);
}

const root = __dirname;
const skillPath = path.join(root, 'SKILL.md');
assert(fs.existsSync(skillPath), 'SKILL.md 存在');
if (fs.existsSync(skillPath)) {
  const skill = fs.readFileSync(skillPath, 'utf8');
  // 四层元认知（MC0-MC3，旧称 L0-L3，MC4 为未来扩展）
  // 兼容旧称：验证器同时接受 MC/L 两种写法，已引用 L0-L3 的实例不会崩
  assert((skill.includes('**MC1**') || skill.includes('**L1**')) && (skill.includes('**MC2**') || skill.includes('**L2**')), '包含 MC1/MC2 元认知层级（兼容旧称 L1/L2）');
  assert(skill.includes('**MC3**') || skill.includes('**L3**'), '包含 MC3 元认知层级（兼容旧称 L3）');
  // 核心机制
  assert(skill.includes('承诺追踪'), '包含承诺追踪机制');
  assert(skill.includes('元认知自问'), '包含元认知自问机制');
  assert(skill.includes('HOT') && skill.includes('WARM') && skill.includes('COLD'), '包含 HOT/WARM/COLD 记忆分层');
  assert(skill.includes('MC3 需要他者注视') || skill.includes('L3 需要他者注视') || skill.includes('他者注视'), '包含 MC3（旧称 L3）他者注视触发机制');
}

// 模板完整性
assert(fs.existsSync(path.join(root, 'templates/SELF_STATE.md')), 'SELF_STATE.md 模板存在');
assert(fs.existsSync(path.join(root, 'templates/HEARTBEAT.md')), 'HEARTBEAT.md 模板存在');

// 检查脚本
assert(fs.existsSync(path.join(root, 'scripts/check_state.sh')), 'check_state.sh 状态检查脚本存在');

// 文档
assert(fs.existsSync(path.join(root, 'docs/碳硅契.md')), '碳硅契文档存在');
assert(fs.existsSync(path.join(root, 'docs/羁绊系统.md')), '羁绊系统文档存在');

// 记忆分层实现
assert(fs.existsSync(path.join(root, 'self-improving/README.md')), 'self-improving 分层记忆说明存在');

if (failures > 0) {
  console.error(`\n${failures} 项失败`);
  process.exit(1);
}
console.log('\n✅ 全部通过：metacognition 元认知系统验证成功');
process.exit(0);
