import { supabase } from "./supabase";
import { ElMessage } from 'element-plus'

export async function getSkills() {
    const { data, error } = await supabase.rpc('get_skills')

    if (error) {
        return error
    } else {
        return data
    }

}

export async function editSkill(id, newName) {
  const { data, error } = await supabase.rpc('edit_skill', {
    skill_id: id,
    new_name: newName
  })

  if (error) {
    console.error('更新技能失敗:', error)
    ElMessage.error('更新技能失敗')
    return {success: false}
  }

  ElMessage({
    message: '更新項目成功',
    type: 'success',
  })
  return {success: true}
}

export async function addSkill(skillName){
  const { data, error } = await supabase.rpc('add_skill', {
    new_name: skillName
  })

  if (error) {
    console.error('新增技能失敗:', error)
    ElMessage.error('新增技能失敗')
    return {success: false}
  }
  return {success: true}
}

export async function deleteSkill(id){
  const { data, error } = await supabase.rpc('delete_skill_by_id', {
    del_id: id
  })

  if (error || !data) {
    // console.error('刪除技能失敗:', error)
    ElMessage.error('刪除技能失敗')
    return {success: false}
  }else if(data){
    return {success: true}
  }
}

