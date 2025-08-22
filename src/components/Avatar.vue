<template>
    <div class="avatar-wrapper">
        <img src="@/assets/image/icon.jpg" alt="My Avatar" class="avatar" />
    </div>
</template>
<style scoped>
.avatar-wrapper {
    position: relative;
}

.avatar {
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    border: 4px solid #1E3A8A;
    object-fit: cover;
    transition: all 0.3s ease;
}

.avatar:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 191, 255, 0.3), 0 0 60px rgba(139, 92, 246, 0.2);
}

@media (min-width: 769px) {
    .avatar {
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        border: 4px solid #1E3A8A;
        object-fit: cover;
        transition: all 0.3s ease;
    }
}
</style>