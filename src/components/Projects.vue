<template>
    <div style="width: 90vw;margin: auto;">
        <!-- 卡片網格 -->
        <el-row :gutter="20">
            <el-col :span="12" v-for="(project, index) in projects" :key="index">
                <el-card class="project-card" shadow="hover">
                    <img :src="project.image" class="project-img" alt="project preview" v-if="project.image" />

                    <div class="project-content">
                        <span style="display: flex;justify-content: space-between;align-items: center;">
                            <h3 style="font-size: 1.5vw;">{{ project.title }}</h3>
                            <p style="font-size: 1vw;">{{ project.role }}</p>
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

const projects = [
    {
        title: "IvanPun Page",
        description: "使用 Vue3 + Element Plus 打造的個人展示平台。",
        role: "項目負責人",
        tech: ["Vue3", "Element Plus", "Vite"],
        image: new URL("@/assets/image/website.png", import.meta.url).href,
        demo: "ivanpunpage.netlify.app",
        github: "https://github.com/IvanPun/IvanPunPage"
    },
    {
        title: "24款工業軟件優化及部署",
        description: `針對公司24款基於既有網頁框架開發的工業應用軟體進行統一優化，重點根據各系統的業務需求，調整頁面內容與功能功能表結構，提升操作邏輯與使用效率。項目旨在在不改動底層架構的前提下，改善使用者介面的一致性與易用性，為後續系統整合與升級奠定基礎。\n
        我主要負責根據現有網頁框架和各系統的業務需求，對頁面內容與功能功能表進行調整與優化。工作內容包括：梳理原有頁面結構與展示邏輯，根據不同模組的實際功能重新設計資訊排布與交互流程；在不改動後端邏輯的前提下，使用HTML、CSS、TypeScript、Vue等技術對介面樣式與結構進行微調；同時，參與制定統一的設計風格規範，並與產品使用部門持續溝通，根據使用者回饋調整細節，確保優化效果符合業務需求。`,
        role: "前端開發工程師",
        tech: ["Vue3"],
        image: "",
        demo: "",
        github: ""
    },
    {
        title: "華實創賽中心的web端平臺",
        description: `在構建學校創新創業教育的資訊化平臺，整合資源，提升數位化管理水準。平臺涵蓋創業專案管理、課程學習、資訊獲取等功能，助力學校高效組織競賽、孵化團隊，促進師生創新合作。\n
        本人主要負責前端開發，包括頁面設計、佈局優化、交互實現及用戶體驗提升。採用 HTML、CSS、JavaScript 及 Vue 框架，實現回應式設計與良好相容性，並完成前後端資料交互優化，提高系統流暢度與穩定性。\n
        本項目最終以“市創”成績結項，順利達成預期目標。`,
        role: "前端開發工程師",
        tech: ["Vue3", "HTML", "CSS", "JS"],
        image: "",
        demo: "",
        github: ""
    },
    {
        title: "吃貨小花獅",
        description: `本項目為在校大學生提供便捷的食堂食物記錄功能，支援記錄餐品、查看歷史飲食，並基於資料分析提供飲食建議。平臺內置討論區，便於學生交流餐品評價，推薦優質菜品，同時集成營養分析功能，幫助用戶科學規劃膳食。\n
        作為項目負責人，我統籌開發進度與團隊協作，並主要負責前端開發，包括餐品記錄、討論區及營養分析頁面的設計與實現。使用 HTML、CSS、JavaScript 及 Vue 框架，確保良好用戶體驗，並優化前後端資料交互，提高系統性能。\n
        本項目最終以“校創”成績結項，順利達成預期目標。`,
        role: "前端開發工程師",
        tech: ["Vue3", "HTML", "CSS", "JS"],
        image: "",
        demo: "",
        github: ""
    },
    {
        title: "兒童能力檢測小程序",
        description: `社團委託的外包開發專案。目標是設計並實現一款微信小程式，旨在對兒童在認知、語言、運動、社交等多方面的能力進行測評，協助家長全面瞭解孩子的成長發展狀況，為後續的教育與干預提供依據。該小程式已完成核心功能開發並通過內部測試，具備良好的可拓展性與實用價值。\n
        本人在項目中負責整體前端的設計與實現工作，涵蓋使用者介面設計、頁面配置規劃、交互邏輯實現及視覺化資料展示等模組。基於微信小程式平臺，採用回應式設計方法，確保系統在多種設備上均具備良好的操作體驗與視覺一致性。同時，通過調用後端API介面，完成使用者資料、測評結果等資料的即時獲取與展示，並針對使用者操作流程進行多輪優化，提升系統整體的易用性與穩定性。`,
        role: "前端開發工程師",
        tech: ["微信小程序"],
        image: "",
        demo: "",
        github: ""
    },
]

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

.project-content {
    padding: 1rem;
    text-align: left;
}

.description {
    font-size: 1vw;
    margin: 0.5rem 0 1rem;
    white-space: pre-line;
}

.links {
    display: flex;
    gap: 0.5rem;
}
</style>