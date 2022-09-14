<template>
  <v-layout column>
    <v-layout>
      <v-container>
        <v-flex xs12>
          <v-card>
            <div>
              <iframe 
              id="widgetApi" 
              :src="`https://convert2mp3s.com/api/widget?url=https://
              www.youtube.com/watch?v=${youtubeId}`"
              width="100%" 
              height="800" 
              allowtransparency="true" 
              scrolling="yes" 
              style="border:3px solid #ab92b3;">
              </iframe>
            </div>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
  </v-layout>
</template>

<script src="../scripts/DownloadCompScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
