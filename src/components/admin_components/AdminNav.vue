<script setup>
import UserTab from './adminNav_component/UserTab.vue';
</script>
<template>  
   <v-navigation-drawer
          expand-on-hover
          rail
          color="red-accent-1"
        >
          <UserTab/>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-widgets" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Profiling" value="profiling" to="/profiling"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar" title="Attendance Tracking" value="attendance" to="/tracking"></v-list-item>
            <v-list-item prepend-icon="mdi-gavel" title="Monitoring" value="monitoring" to="/monitoring"></v-list-item>
            <v-list-item prepend-icon="mdi-heart" title="Health Visit" value="health_visit" to="/health_visit"></v-list-item>
            <v-list-item prepend-icon="mdi-file" title="Reports" value="reports></v-list-item" to="/report"></v-list-item>
          </v-list>
        </v-navigation-drawer> 
</template>