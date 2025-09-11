import { supabase } from "./supabase";
import { ElMessage } from 'element-plus'

export function getImageUrl(imageName) {
    const { data } = supabase
        .storage
        .from('images')
        .getPublicUrl(imageName)
    return data.publicUrl
}

export async function uploadImage(file, imageName) {
  // file: File 物件（<input type="file"> 或 el-upload 拿到的）
  const { data, error } = await supabase.storage
    .from('images') // bucket 名字
    .upload(imageName, file, {
      upsert: true  // 如果檔案已存在會覆蓋（用於修改）
    })

  if (error) {
    console.error("圖片上傳失敗",error)
    return {success: false}
  }

  return {success: true}
}