<template>
    <Loading :loading="loading"></Loading>
    <div class="main" v-show="!loading">
        <Table :tableData="tableData" @updateData="updateData" type="skills" @updating="loading = true"></Table>
        <div class="btn-wrapper">
            <CTABtn @click="addDialogVisible = true">Add Skill</CTABtn>
        </div>
        <AddDialog v-model:addDialogVisible="addDialogVisible" @add="submitAddSkill"></AddDialog>
    </div>

</template>
<script setup>
import AddDialog from '@/components/AddDialog.vue';
import CTABtn from '@/components/CTABtn.vue';
import Table from '@/components/Table.vue';
import { ref, onMounted } from 'vue';
import { addSkill, getSkills } from '@/composables/useSkills';
import { ElMessage } from 'element-plus'
import Loading from '@/components/Loading.vue';

const addDialogVisible = ref(false)

const tableData = ref([])

const loading = ref(true)

const submitAddSkill = async (val) => {
    loading.value = true
    const res = await addSkill(val.name)
    if (res.success) {
        ElMessage({
            message: '新增' + val.name + '成功.',
            type: 'success',
        })
        await updateData()
    }
    loading.value = false
}

const updateData = async () => {
    loading.value = true
    const skills = await getSkills()
    tableData.value = skills || []
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
