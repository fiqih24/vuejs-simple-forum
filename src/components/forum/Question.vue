<template>
  <v-card>
    
      <v-card-title>
          <h3 class="headline mb-0">
            <router-link :to="{ name:'question-detail',params: { slug:data.slug } }">
              {{ data.title }}
            </router-link>
          </h3>          
            
      </v-card-title>
        <div class="grey--text" style="margin-left:20px">{{ data.created_at }}</div>
        <v-card-text>
            {{ data.body }}
        </v-card-text>
  </v-card>
</template>

<script>

export default {
    props:['data']
}
</script>

<style>

</style>
