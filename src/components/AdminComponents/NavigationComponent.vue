<template>
    <v-navigation-drawer
          expand-on-hover
          rail
          color="red-accent-1"
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-widgets" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Profiling" value="profiling" to="/profiling"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar" title="Attendance Tracking" value="attendance"></v-list-item>
            <v-list-item prepend-icon="mdi-gavel" title="Monitoring" value="monitoring"></v-list-item>
            <v-list-item prepend-icon="mdi-heart" title="Health Visit" value="health_visit"></v-list-item>
            <v-list-item prepend-icon="mdi-file" title="Reports" value="reports></v-list-item"></v-list-item>
          </v-list>
  </v-navigation-drawer>
</template>