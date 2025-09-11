<template>
    <el-dialog :model-value="addDialogVisible" :title="type === 'skills' ? '新增技能' : '新增項目'" :width="dialogWidth"
        @close="close" @open="open">

        <el-row v-if="localData" class="row" :gutter="20">
            <el-col :span="4">
                <p>{{ type === 'skills' ? '技能名稱:' : '項目名稱:' }}</p>
            </el-col>
            <el-col :span="20">
                <el-input v-model="localData.name" :placeholder="type === 'skills' ? '請輸入技能名稱...' : '請輸入項目名稱...'" />
            </el-col>
        </el-row>

        <el-row v-if="localData && type === 'projects'" class="row" :gutter="20">
            <el-col :span="4">
                <p>角色：</p>
            </el-col>
            <el-col :span="20">
                <el-input v-model="localData.role" placeholder="請輸入項目角色..." />
            </el-col>
        </el-row>

        <el-row v-if="localData && type === 'projects'" class="row" :gutter="20">
            <el-col :span="4" style="align-self: self-start;">
                <p>描述：</p>
            </el-col>
            <el-col :span="20">
                <el-input v-model="localData.description" :autosize="{ minRows: 2, maxRows: 6 }" type="textarea"
                    placeholder="請輸入描述..." />
            </el-col>
        </el-row>

        <el-row v-if="localData && type === 'projects'" class="row" :gutter="20">
            <el-col :span="4" style="align-self: self-start;">
                <p>標籤：</p>
            </el-col>
            <el-col :span="20">
                <div class="tagRow">
                    <el-tag v-for="tag in localData.tech" :key="tag" closable :disable-transitions="false"
                        @close="handleTagClose(tag)">
                        {{ tag }}
                    </el-tag>
                    <el-input v-if="tagInputVisible" ref="InputRef" v-model="tagInputVal" class="tag-input" size="small"
                        @keyup.enter="handleInputConfirm" @blur="handleInputConfirm">
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">
                        + New Tag
                    </el-button>
                </div>
            </el-col>
        </el-row>

        <el-row v-if="localData && type === 'projects'" class="row" :gutter="20">
            <el-col :span="4" style="align-self: self-start;">
                <p>圖片：</p>
            </el-col>
            <el-col :span="20">
                <ImageUpload v-model:fileList="localData.fileList" @update:file-list="chagnedImage"></ImageUpload>
            </el-col>
        </el-row>

        <el-row v-if="localData && type === 'projects'" class="row" :gutter="20">
            <el-col :span="4">
                <p>Demo網址：</p>
            </el-col>
            <el-col :span="20">
                <el-input v-model="localData.demo" placeholder="請輸入項目網址..." />
            </el-col>
        </el-row>

        <el-row v-if="localData && type === 'projects'" class="row" :gutter="20">
            <el-col :span="4">
                <p>Github網址：</p>
            </el-col>
            <el-col :span="20">
                <el-input v-model="localData.github" placeholder="請輸入項目Github網址..." />
            </el-col>
        </el-row>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="addData">
                    確定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useDialog } from '@/composables/useDialog'
import ImageUpload from './ImageUpload.vue'

const props = defineProps({
    addDialogVisible: Boolean,
    type: String,
})

const { dialogWidth } = useDialog()

const initialData = {
    name: "",
    role: "",
    description: "",
    tech: [],
    fileList: [],
    demo: "",
    github: ""
}

const localData = ref({})

const emit = defineEmits(['update:addDialogVisible', 'add'])

const open = () => {
    localData.value = JSON.parse(JSON.stringify(initialData))
}

const close = () => {
    emit('update:addDialogVisible', false)
}

const chagnedImage = () => {
    localData.value.image = localData.value.fileList.length != 0 ? localData.value.fileList[0].name : ""
}

const addData = () => {
    if (!localData.value.name) {
        ElMessage.error(type === 'skills' ? '技能名稱禁止為空' : '項目名稱禁止為空')
        return
    }
    emit('add', { ...localData.value })
    close()
}

//tags
const tagInputVal = ref('')
const tagInputVisible = ref(false)
const InputRef = ref()

const handleTagClose = (tag) => {
    localData.value.tech.splice(localData.value.tech.indexOf(tag), 1)
}

const showInput = () => {
    tagInputVisible.value = true
    nextTick(() => {
        InputRef.value?.input?.focus()
    })
}

const handleInputConfirm = () => {
    if (tagInputVal.value) {
        localData.value.tech.push(tagInputVal.value)
    }
    tagInputVisible.value = false
    tagInputVal.value = ''
}

</script>

<style scoped>
.dialog-body {
    display: flex;
    align-items: center;
}

.row {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.tagRow {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
}

.tag-input {
    min-width: 20%;
    max-width: 30%;
    flex: 1;
}

@media (min-width: 769px) {
    .tagRow {
        margin-top: 0;
    }
}
</style>
