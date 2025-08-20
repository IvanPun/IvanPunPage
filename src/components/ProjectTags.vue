<template>
    <!-- 技術標籤 -->
    <div class="tags">
        <el-tag v-for="(tech, i) in tags" :key="i" type="info" size="small" effect="dark">
            {{ tech }}
        </el-tag>
    </div>
</template>

<script setup>
const progs = defineProps({
    tags: Array
})
</script>

<style scoped>
.tags {
    margin-bottom: 1rem;
}

.tags .el-tag {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9vw;
}
</style>