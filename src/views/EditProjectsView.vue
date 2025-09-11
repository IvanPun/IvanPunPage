<template>
    <Loading :loading="loading"></Loading>
    <div class="main" v-show="!loading">
        <Table :tableData="tableData" @updateData="updateData" type="projects" @updating="loading = true"></Table>
        <div class="btn-wrapper">
            <CTABtn @click="addDialogVisible = true">Add Projects</CTABtn>
        </div>
        <AddDialog v-model:addDialogVisible="addDialogVisible" @add="submitAddProject" type="projects"></AddDialog>
    </div>

</template>
<script setup>
import AddDialog from '@/components/AddDialog.vue';
import CTABtn from '@/components/CTABtn.vue';
import Table from '@/components/Table.vue';
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import { addProject, getProjects } from '@/composables/useProjects';
import Loading from '@/components/Loading.vue';

const addDialogVisible = ref(false)

const tableData = ref([])

const loading = ref(true)

const submitAddProject = async (val) => {
    loading.value = true
    const res = await addProject(val)
    if (res.success) {
        await updateData()
    }
    loading.value = false
}

const updateData = async () => {
    loading.value = true
    const projects = await getProjects()
    tableData.value = projects || []
    loading.value = false
}

onMounted(async () => {
    await updateData();
    
})

</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-wrapper {
    align-self: flex-end;
    margin-top: 2rem;
    margin-right: 10%;
    margin-bottom: 2%;
}

@media (min-width: 769px) {
    .btn-wrapper {
        margin-top: 1rem;
        margin-right: 25%;
    }
}
</style>
