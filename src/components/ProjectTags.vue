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
    display: flex;
    gap: 1vw;
}

.tags .el-tag {
    margin-bottom: 1rem;
    font-size: 2rem;
    padding: 0.7rem 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width:769px) {
    .tags .el-tag {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
}
</style>