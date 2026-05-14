<template>
    <Loading :loading="loading"></Loading>
    <div style="width: 90vw;margin: auto;" v-if="!loading" :style="isMobile ? { marginTop: '5vh' } : {}">
        <!-- 卡片網格 -->
        <el-row :gutter="20">
            <el-col :span="isMobile ? 24 : 12" v-for="(project, index) in projects" :key="index">
                <el-card class="project-card" shadow="hover">
                    <img :src="getImageUrl(project.image)" class="project-img"
                        :class="{ portrait: isPortrait(project.image) }" alt="project preview" v-if="project.image" />

                    <div class="project-content">
                        <span style="display: flex;justify-content: space-between;align-items: baseline;">
                            <h3 class="project-title">{{ project.name }}</h3>
                            <p class="project-role">{{ project.role }}</p>
                        </span>

                        <p class="description">{{ project.description }}</p>

                        <p class="unit" v-if="project.unit">單位：{{ project.unit }}</p>

                        <ProjectTags :tags="project.tech"></ProjectTags>

                        <!-- 連結按鈕 -->
                        <div class="links">
                            <el-button type="primary" size="small" @click="openLink(project.demo)" v-if="project.demo">
                                查看
                            </el-button>
                            <el-button type="success" size="small" @click="openLink(project.github)"
                                v-if="project.github">
                                GitHub
                            </el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<script setup>
import ProjectTags from './ProjectTags.vue';
import { useDevice } from '@/composables/useDevice';
import { getImageUrl } from '@/composables/useImages';
import { getProjects } from '@/composables/useProjects';
import { onMounted, ref } from 'vue';

import Loading from './Loading.vue';

const projects = ref([])

const loading = ref(true)

const { isMobile } = useDevice();

const openLink = (url) => {
    window.open(url, "_blank")
}

const isPortrait = (image) => {
    const img = new Image();
    img.src = getImageUrl(image);
    return img.height > img.width;
};

onMounted(async () => {
    loading.value = true
    try {
        const data = await getProjects()
        projects.value = Array.isArray(data) ? data : []
    } catch {
        projects.value = []
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
.project-card {
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
    margin-bottom: 2vh;
    color: var(--text-main);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.4);
    background: var(--card-hover);
}

.project-img {
    width: 100%;
    max-height: 40vh;
    object-fit: cover;
    border-bottom: 1px solid #eee;
}

.project-img.portrait {
    height: auto;
    max-height: 40vh;
    object-fit: contain;
}

.project-title {
    font-size: 4rem;
}

.project-role {
    font-size: 2.5rem;
}

.project-content {
    padding: 1rem;
    text-align: left;
}

.description {
    font-size: 2.5rem;
    margin: 0.5rem 0 1rem;
    white-space: pre-line;
}

.unit {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.links {
    display: flex;
    gap: 0.5rem;
}

@media (min-width:769px) {
    .project-title {
        font-size: 1.5rem;
    }

    .project-role {
        font-size: 1rem;
    }

    .description {
        font-size: 1rem;
        margin: 0.5rem 0 1rem;
    }

    .unit {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
}
</style>