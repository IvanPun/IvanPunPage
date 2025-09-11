import { supabase } from "./supabase";
import { ElMessage } from 'element-plus'
import { uploadImage } from "./useImages";

export async function getProjects() {
  const { data, error } = await supabase.rpc('get_projects')

  if (error) {
    return error
  } else {
    return data
  }

}

export async function editProject(info) {
  const { data: old_data_pack } = await supabase.rpc('get_project_by_id', { target_id: info.id })
  const old_data = old_data_pack[0]

  const { data: infoRes, error } = await supabase.rpc('edit_project', {
    p_id: info.id,
    new_name: info.name,
    new_role: info.role,
    new_description: info.description,
    new_tech: info.tech,
    new_image: info.image,
    new_demo: info.demo,
    new_github: info.github
  })

  if (error) {
    console.error('更新項目失敗:', error)
    ElMessage.error('更新項目失敗')
    return { success: false }
  }

  if (info.updatedImage && info.fileList.length) {
    const imageSuccess = await uploadImage(info.fileList[0].raw, info.fileList[0].name).success

    if (!imageSuccess) {
      const { data: backRes, error: backErr } = await supabase.rpc('edit_project', {
        p_id: info.id,
        new_image: old_data.image
      })
      ElMessage.error('圖片上傳失敗，請重新上傳')
      if (backErr) {
        alert("請立刻前往supabase進行修復！")
      }
    }
  }

  ElMessage({
    message: '更新項目成功',
    type: 'success',
  })

  return {success: true}
}

export async function addProject(info) {
  const { data, error } = await supabase.rpc('add_project', {
    name: info.name,
    description: info.description,
    role: info.role,
    tech: info.tech,
    image: info.image,
    demo: info.demo,
    github: info.github
  })

  if (error) {
    console.error('新增項目失敗:', error)
    ElMessage.error('新增項目失敗')
    return { success: false }
  }

  if (info.image) {
    const imageSuccess = (await uploadImage(info.fileList[0].raw, info.fileList[0].name)).success
    
    if (!imageSuccess) {
      const projects = await getProjects()
      const target_id = projects[projects.length-1].id
      const { data: imageRes, error: imageErr } = await supabase.rpc('edit_project', {
        p_id: target_id,
        new_image: ""
      })
      ElMessage.error('圖片上傳失敗，請重新上傳')
      if (imageErr) {
        alert("請立刻前往supabase進行修復！")
      }
    }
  }

  ElMessage({
    message: '新增項目' + info.name + '成功',
    type: 'success',
  })

  return {success: true}
}

export async function deleteProject(id) {
  const { data, error } = await supabase.rpc('delete_project', {
    target_id: id
  })

  if (error || !data) {
    console.error('刪除項目失敗:', error)
    ElMessage.error('刪除項目失敗')
    return { success: false }
  } else if (data) {
    return { success: true }
  }
}

