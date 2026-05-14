import skillsJson from '@/assets/data/skills.json'
import { ElMessage } from 'element-plus'

export async function getSkills() {
  const list = skillsJson.skills ?? []
  return list.map((name) => (typeof name === 'string' ? { name } : name))
}

export async function editSkill() {
  ElMessage.warning('靜態站台不支援編輯技能')
  return { success: false }
}

export async function addSkill() {
  ElMessage.warning('靜態站台不支援新增技能')
  return { success: false }
}

export async function deleteSkill() {
  ElMessage.warning('靜態站台不支援刪除技能')
  return { success: false }
}
