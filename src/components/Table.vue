<template>
    <el-table :data="filterTableData" table-layout="fixed">
        <el-table-column prop="name" :label="tableLable" width="200" />
        <el-table-column align="right">
            <template #header>
                <div style="display: flex; justify-content: flex-end;">
                    <el-input v-model="search" size="small" placeholder="Type to search" class="search-bar" />
                </div>
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.row)" class="edit-btn">
                    Edit
                </el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.row)">
                    Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <EditDialog v-model:dialogVisible="dialogVisible" :data="data" @change="changeData" :updateImage="updateImage" :type="type"></EditDialog>
</template>

<script setup>
import { editSkill, deleteSkill } from '@/composables/useSkills';
import { computed, ref } from 'vue';
import EditDialog from './EditDialog.vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { editProject, deleteProject } from '@/composables/useProjects';

const props = defineProps({
    tableData: Object,
    type: String
})

const emit = defineEmits(['updateData', 'updating'])

const updateImage = ref(false)

const tableLable = computed(() => {
    if (props.type === "skills") return "技能名稱"
    if (props.type === "projects") return "項目名稱"
    return ''
})

const search = ref('')
const filterTableData = computed(() =>
    props.tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const dialogVisible = ref(false)

const data = ref(null)

const handleEdit = (row) => {
    dialogVisible.value = true
    data.value = row
}
const handleDelete = (row) => {
    ElMessageBox.confirm(
        '是否確定刪除' + (props.type==='skills'? '技能':'項目') + row.name + '?',
        'Warning',
        {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'warning',
            confirmButtonClass: 'danger-btn',
        }
    )
        .then(async () => {
            let res;
            if(props.type==='skills'){
                res = await deleteSkill(row.id)
            }else if (props.type==='projects') {
                res = await deleteProject(row.id)
            }
            
            if (res.success) {
                ElMessage({
                    message: '成功刪除' + row.name + '.',
                    type: 'success',
                })
                emit('updateData')
            }
        })

}

const changeData = async (val) => {
    emit('updating')
    let res;
    if (props.type === "skills") {
        res = await editSkill(val.id, val.name)
        
    }else if (props.type === "projects") {
        res = await editProject(val)
    }
    if (res.success) emit('updateData')
}



</script>

<style>
.danger-btn {
    background-color: #f56c6c !important;
    /* 紅色 */
    border-color: #f56c6c !important;
    color: #fff !important;
}
</style>

<style scoped>
.el-table {
    width: 80%;
    --el-table-bg-color: transparent;
    --el-table-header-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-header-text-color: #ffffff;
    --el-table-text-color: #ffffff;
}

::v-deep(.el-table__row:hover) {
    color: #1E3A8A;
}

/* 行內按鈕 hover 深色 */
::v-deep(.el-table__row:hover .edit-btn) {
    color: #ffffff;
    background-color: #1f2a38;
    border-color: #1f2a38;
}

/* 按鈕自身 hover 效果 */
::v-deep(.edit-btn:hover) {
    filter: brightness(85%);
}

::v-deep(.edit-btn) {
    margin-bottom: 2rem;
}

.search-bar {
    width: 100%;
}



@media (min-width: 769px) {
    .el-table {
        width: 50%;
    }

    ::v-deep(.edit-btn) {
        margin-bottom: 0rem;
    }

    .search-bar {
        width: 50%;
    }
}
</style>
