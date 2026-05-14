import { ElMessage } from 'element-plus'

export function getImageUrl(imageName) {
  if (!imageName) {
    return ''
  }
  if (/^https?:\/\//i.test(imageName)) {
    return imageName
  }
  return new URL(`../assets/data/project-images/${imageName}`, import.meta.url).href
}

export async function uploadImage() {
  ElMessage.warning('靜態站台不支援圖片上傳')
  return { success: false }
}
