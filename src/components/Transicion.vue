<template>
    <div id=transicion>
        <transition name="bounce">
            <router-view :key="$route.fullPath"></router-view>
        </transition>
    </div>
</template>