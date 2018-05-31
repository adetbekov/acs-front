<template lang="jade">
.store-layout
	el-container
		Navbar
			Logo(slot="left", logo="webcampus")
	nuxt
</template>

<script>
import Navbar from "~/components/navbar/Navbar"
import Locale from "~/components/navbar/Locale"
import Logo from "~/components/navbar/Logo"

export default {
  components: {
    Navbar,
    Locale,
    Logo
  }
}
</script>

<style lang="sass">
.store-layout
  color: $color-text-dark
  background-color: $color-background-gray
  height: 100%
  padding: 8px

  // <ul style="position: relative; left: -50%;" v-if="$route.path.split('/')[1] == 'webcampus'" class="list-unstyled d-flex align-items-center text-gray m-0 p-0 hidden-sm-down">
  //       <li class="pr-2">
  //         <router-link :to="{ name: 'dashboard' }" class="d-flex flex-column align-items-center" :class="{ 'active': $route.name == 'dashboard'}">
  //           <icon name="dashboard" scale="1.2"></icon>
  //           <small style='line-height:0.8'><span class="small">Основная</span></small>
  //         </router-link>
  //       </li>
  //       <li class="px-3">
  //       <router-link :to="{ name: 'webcampus' }" class="d-flex flex-column align-items-center" :class="{ 'active': $route.name == 'webcampus'}">
  //           <icon name="store" scale="1.2"></icon>
  //           <small style='line-height:0.8'><span class="small">Магазин курсов</span></small>
  //         </router-link>
  //     </li>
  //     <li class="pl-2">
  //         <router-link :to="{ name: 'webcampus' }" class="d-flex flex-column align-items-center" :class="{ 'active': $route.name == 'purchased'}">
  //           <icon name="purchased" scale="1.2"></icon>
  //           <small style='line-height:0.8'><span class="small">Мои курсы</span></small>
  //         </router-link>
  //       </li>
  //     </ul>
</style>
