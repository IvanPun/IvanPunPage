<template>
  <el-upload
    :file-list="fileList"
    @update:file-list="emit('update:fileList', $event)"
    class="upload-demo"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
  >
  <el-button type="primary" size="small">上傳項目圖片</el-button>
  </el-upload>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const props = defineProps({
  fileList: Array
})

const emit = defineEmits(['update:fileList'])

const handleRemove = (file, uploadFiles) => {
  props.fileList.pop()
}

const handleExceed= (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 1, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>