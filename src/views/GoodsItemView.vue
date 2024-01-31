<script setup>
import { ref, computed, onBeforeMount, onDeactivated } from 'vue';
import { useRoute } from 'vue-router';
import NavBarComponent from '../components/NavBarComponent.vue'


const product = ref({})
const route = useRoute()


const pageName = computed(() => {
    return route.name
})


onBeforeMount(() => {
    fetch(`http://localhost:4545/${pageName.value}/${route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
          product.value = data
          
      });

  });

onDeactivated(() => {
    product.value = ''
})

</script>








<template>
     <main>
    <div class="banner" :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <NavBarComponent/>
                </div>
            </div>
            <h1 class="title-big" v-if="product">{{ product.name }}</h1>
        </div>
    </div>

    <section class="shop" v-if="product">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-1">
                    <img class="shop__girl" :src="product.url" :alt="product.url">
                </div>
                <div class="col-lg-4">
                    <div class="title">About it</div>
                    <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                    <div class="shop__point" v-if="product.country">
                        <span>Country:</span>
                        {{ product.country }}
                    </div>
                    <div class="shop__point" v-if="product.description">
                        <span>Description:</span>
                        {{ product.description }}
                    </div>
                    <div class="shop__point">
                        <span>Price: </span>
                        <span class="shop__point-price">{{ product.price }}</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

   </main>
</template>
