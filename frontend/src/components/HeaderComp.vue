<template>
  <header>
    
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        class="pa-4"
        color="#ab92b3"
      >
         <v-avatar
            class="mb-4"
            size="64">
          <v-img
          v-if="isUserLoggedIn"
          src='../assets/logo.png'>
        </v-img>
        </v-avatar>

          <div v-if="isUserLoggedIn">
            <p style="font-size:x-large;">
            {{user.name}}</p>
            <p>{{user.email}}</p>
          </div>
      </v-sheet>

    <v-divider></v-divider>

      <v-list>
        <v-list-item
        to="/profile"
        v-if="isUserLoggedIn"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-cog-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Edit Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

        <v-list-item 
        href="https://en.wikipedia.org/wiki/Documentary_film"
        target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-alpha-w-circle-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Wiki Documentaries</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
        <v-list-item
        to="/docs"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        to="/about"
        >
          <v-list-item-icon>
            <v-icon>mdi-alert-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        to="/contact"
        >
          <v-list-item-icon>
            <v-icon>mdi-email-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item
        to="/admin-dashboard"
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Admin Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        <v-list-item
        v-if="isUserLoggedIn"
        @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

   <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
              @click="$router.push('/docs')"
              class="display-1"
              style="cursor:pointer">FREE DOCS</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-row  
        align="center"
        style="max-width: 650px"
        >
          <v-text-field
            :append-icon-cb="() => {}"
            v-model="search"
            placeholder="Search..."
            single-line
            append-icon="mdi-magnify"
            color="white"
            hide-details
            class="mr-4"
          ></v-text-field>
        <v-switch
        v-model="$vuetify.theme.dark"
        label="change theme"
        class="mt-4"
        color="#ab92b3"
        >
        </v-switch>
      </v-row>
      </v-toolbar-items>
    </v-app-bar> 
  </header>
</template>

<script src="../scripts/HeadCompScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
