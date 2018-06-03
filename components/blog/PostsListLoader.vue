<template>
  <ul class="list-unstyled mt-4">
    <li>
      <div class="animated-background w-100">
        <div class="background-masker after-date"/>
        <div class="background-masker bottom-date"/>
        <div class="background-masker between-headers"/>
        <div class="background-masker after-header-1"/>
        <div class="background-masker after-header-2"/>
      </div>
    </li>
    <li>
      <div class="animated-background animated-background-thin w-100">
        <div class="background-masker after-date"/>
        <div class="background-masker between-headers"/>
        <div class="background-masker after-header-1"/>
      </div>
    </li>
    <li>
      <div class="animated-background animated-background-3 w-100">
        <div class="background-masker after-date"/>
        <div class="background-masker bottom-date"/>
        <div class="background-masker between-headers"/>
        <div class="background-masker after-header-1"/>
        <div class="background-masker after-header-2"/>
      </div>
    </li>
  <!-- <li>
    <div class="animated-background animated-background-thin animated-background-thin-2 w-100">
        <div class="background-masker after-date"></div>
        <div class="background-masker between-headers"></div>
        <div class="background-masker after-header-1"></div>
    </div>
  </li>
  <li></li>
  <li></li> -->
  </ul>
</template>

<style scoped>
.w-100 {
  width: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
}

.animated-background {
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeHolderShimmer;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 44px;
  position: relative;
}
.animated-background {
  margin-bottom: 35px;
}

.animated-background-thin {
  height: 17px;
}

.background-masker {
  background: #fff;
  position: absolute;
}

/* Every thing below this is just positioning */
.background-masker.after-date {
  left: 95px;
  top: 0px;
  width: 30px;
  height: 44px;
}
.background-masker.bottom-date {
  top: 17px;
  left: 0;
  width: 95px;
  height: 27px;
}
.background-masker.between-headers {
  top: 17px;
  left: 95px;
  width: calc(100% - 95px);
  height: 10px;
}
.background-masker.after-header-1 {
  width: auto;
  left: 90%;
  right: 0;
  height: 17px;
}
.background-masker.after-header-2 {
  width: auto;
  top: 27px;
  left: 60%;
  right: 0;
  height: 17px;
}
.animated-background-thin .after-header-1 {
  left: 80%;
}

.animated-background-3 .after-header-1 {
  left: 85%;
}
.animated-background-3 .after-header-2 {
  left: 50%;
}
.animated-background-thin-2 .after-header-1 {
  left: 87%;
}
</style>
