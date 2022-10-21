<template>
  <header>
    
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        class="pa-4"
        color="#ab92b3"
        v-if="isUserLoggedIn"
      >
          <div>
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

        <v-list-item
        class="d-flex d-sm-none"
        >
          <v-text-field
            :append-icon-cb="() => {}"
            v-model="search"
            placeholder="Search..."
            single-line
            append-icon="mdi-magnify"
            color="white"
            hide-details
            class="mr-4 mt-6"
          ></v-text-field>
        </v-list-item>

        <v-list-item
        class="d-flex d-sm-none"
        >
        <v-btn
        @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        color="#ab92b3"
        icon
        >
        <v-icon v-if="!$vuetify.theme.dark">
          mdi-moon-waning-crescent
        </v-icon>

        <v-icon v-if="$vuetify.theme.dark">
          mdi-white-balance-sunny
        </v-icon>
        </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

   <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
<!-- -->
      <v-toolbar-title
              @click="redirection()"
              class="display-1"
              style="cursor:pointer"
              ><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 72"><path fill="#ab92b3" d="M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"/><path fill="#fff" d="M30.05 44.65L45.256 36L30.05 27.35Z"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path d="M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"/><path stroke-linecap="round" stroke-linejoin="round" d="M30.05 44.65L45.256 36L30.05 27.35Z"/></g></svg></v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-row  
        style="max-width: 650px"
        class="d-none d-sm-flex"
        >
          <v-text-field
            :append-icon-cb="() => {}"
            v-model="search"
            placeholder="Search..."
            single-line
            append-icon="mdi-magnify"
            color="white"
            hide-details
            class="mr-4 mt-6"
          ></v-text-field>
          <v-btn
        @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        color="#ab92b3"
        icon
        >
        <v-icon v-if="!$vuetify.theme.dark">
          mdi-moon-waning-crescent
        </v-icon>

        <v-icon v-if="$vuetify.theme.dark">
          mdi-white-balance-sunny
        </v-icon>
        </v-btn>
      </v-row>
      </v-toolbar-items>
    </v-app-bar> 
  </header>
</template>

<script src="../scripts/HeadCompScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.v-list .v-list-item:hover{
color:#ab92b3
}
</style>
