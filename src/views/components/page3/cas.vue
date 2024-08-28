<template>
  <div style="    margin-top: 50px;margin-left: 5px;margin-right: 5px;display:block;">

    <el-carousel indicator-position="outside" height="310px">
      <el-carousel-item v-for="url in images" :key="item">
        <div style="margin: auto 0;">
        <el-image :src="url"  contain="fit"></el-image>
      </div>
      </el-carousel-item>
    </el-carousel></div>
  </template>
  
  <style>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  </style>


<script setup>


const images=[
  "./img/1.webp",
  "./img/2.webp",
  "./img/3.webp",
  "./img/4.webp",
  "./img/5.webp",
]

console.log("oooooo");

</script>