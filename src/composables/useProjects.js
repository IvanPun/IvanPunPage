import projectsJson from '@/assets/data/projects.json'
import { ElMessage } from 'element-plus'

function normalizeProjects(rawList) {
  return rawList.map((item) => ({
    ...item,
    name: item.name ?? item.title ?? '',
    id: item.id ?? item.name ?? item.title
  }))
}

const staticProjects = normalizeProjects(projectsJson)

export async function getProjects() {
  return staticProjects
}

export async function editProject() {
  ElMessage.warning('靜態站台不支援編輯專案')
  return { success: false }
}

export async function addProject() {
  ElMessage.warning('靜態站台不支援新增專案')
  return { success: false }
}

export async function deleteProject() {
  ElMessage.warning('靜態站台不支援刪除專案')
  return { success: false }
}
