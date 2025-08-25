<template>
    <div style="width: 90vw;margin: auto;">
        <!-- 卡片網格 -->
        <el-row :gutter="20">
            <el-col :span="isMobile ? 24 : 12" v-for="(project, index) in projects" :key="index">
                <el-card class="project-card" shadow="hover">
                    <img :src="project.image" class="project-img" alt="project preview" v-if="project.image" />

                    <div class="project-content">
                        <span style="display: flex;justify-content: space-between;align-items: baseline;">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <p class="project-role">{{ project.role }}</p>
                        </span>

                        <p class="description">{{ project.description }}</p>

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
import projects from '@/assets/data/projects.json';

const { isMobile } = useDevice();

const openLink = (url) => {
    window.open(url, "_blank")
}
</script>

<style scoped>
.project-card {
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: 1rem;
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
    height: 160px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
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
}
</style>