<script setup>
import adminLayout from '../layouts/AdminLayout.vue'
</script>
<template>
    <adminLayout/>
    <v-main>
        <v-container>
                <v-row>
                    <h1>Dashboard</h1>
                    
                </v-row>
                <v-row>
                    <v-col>
                       
                                <v-card
                                  class="mx-auto border-color "
                                 
                                  max-width="368"
                                >
                                  <v-card-item title="Florida">
                                    <template v-slot:subtitle>
                                      <v-icon
                                        icon="mdi-alert"
                                        size="18"
                                        color="error"
                                        class="me-1 pb-1"
                                      ></v-icon>
                              
                                      Extreme Weather Alert
                                    </template>
                                  </v-card-item>
                              
                                  <v-card-text class="py-0">
                                    <v-row align="center" no-gutters>
                                      <v-col
                                        class="text-h2"
                                        cols="6"
                                      >
                                        64&deg;F
                                      </v-col>
                              
                                      <v-col cols="6" class="text-right">
                                        <v-icon
                                          color="error"
                                          icon="mdi-weather-hurricane"
                                          size="88"
                                        ></v-icon>
                                      </v-col>
                                    </v-row>
                                  </v-card-text>
                              
                                  <div class="d-flex py-3 justify-space-between">
                                    <v-list-item
                                      density="compact"
                                      prepend-icon="mdi-weather-windy"
                                    >
                                      <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
                                    </v-list-item>
                              
                                    <v-list-item
                                      density="compact"
                                      prepend-icon="mdi-weather-pouring"
                                    >
                                      <v-list-item-subtitle>48%</v-list-item-subtitle>
                                    </v-list-item>
                                  </div>
                                </v-card>
                             
                    </v-col>
                    <v-col>
                        <v-card
                        class="mx-auto border-color"
                        max-width="368"
                      >
                        <v-card-item title="Florida">
                          <template v-slot:subtitle>
                            <v-icon
                              icon="mdi-alert"
                              size="18"
                              color="error"
                              class="me-1 pb-1"
                            ></v-icon>
                    
                            Extreme Weather Alert
                          </template>
                        </v-card-item>
                    
                        <v-card-text class="py-0">
                          <v-row align="center" no-gutters>
                            <v-col
                              class="text-h2"
                              cols="6"
                            >
                              64&deg;F
                            </v-col>
                    
                            <v-col cols="6" class="text-right">
                              <v-icon
                                color="error"
                                icon="mdi-weather-hurricane"
                                size="88"
                              ></v-icon>
                            </v-col>
                          </v-row>
                        </v-card-text>
                    
                        <div class="d-flex py-3 justify-space-between">
                          <v-list-item
                            density="compact"
                            prepend-icon="mdi-weather-windy"
                          >
                            <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
                          </v-list-item>
                    
                          <v-list-item
                            density="compact"
                            prepend-icon="mdi-weather-pouring"
                          >
                            <v-list-item-subtitle>48%</v-list-item-subtitle>
                          </v-list-item>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                        class="mx-auto border-color"
                        max-width="368"
                      >
                        <v-card-item title="Florida" >
                          <template v-slot:subtitle>
                            <v-icon
                              icon="mdi-alert"
                              size="18"
                              color="error"
                              class="me-1 pb-1"
                            ></v-icon>
                    
                            Extreme Weather Alert
                          </template>
                        </v-card-item>
                    
                        <v-card-text class="py-0">
                          <v-row align="center" no-gutters>
                            <v-col
                              class="text-h2"
                              cols="6"
                            >
                              64&deg;F
                            </v-col>
                    
                            <v-col cols="6" class="text-right">
                              <v-icon
                                color="error"
                                icon="mdi-weather-hurricane"
                                size="88"
                              ></v-icon>
                            </v-col>
                          </v-row>
                        </v-card-text>
                    
                        <div class="d-flex py-3 justify-space-between">
                          <v-list-item
                            density="compact"
                            prepend-icon="mdi-weather-windy"
                          >
                            <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
                          </v-list-item>
                    
                          <v-list-item
                            density="compact"
                            prepend-icon="mdi-weather-pouring"
                          >
                            <v-list-item-subtitle>48%</v-list-item-subtitle>
                          </v-list-item>
                        </div>
                      </v-card>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-card width="100%">
                        <v-card-item>
                            <v-card-title>Health Visit</v-card-title>
                        </v-card-item>  
                            <v-card-text> 
                                filter  
                                <v-row>
                                <v-col><v-card class="py-10 px-5"><v-row> 
                                    <v-col><p>Planned Visit</p></v-col> 
                                    <v-col><h1>9 </h1></v-col>
                                </v-row> </v-card> </v-col>
                                <v-col><v-card class="py-10 px-5"><v-row> 
                                    <v-col><p>On going Visit</p></v-col> 
                                    <v-col><h1>3 </h1></v-col>
                                </v-row> </v-card> </v-col>
                                <v-col><v-card class="py-10 px-5"><v-row> 
                                    <v-col><p>Completed visit</p></v-col> 
                                    <v-col><h1>1 </h1></v-col>
                                </v-row> </v-card> </v-col>
                                <v-col><v-card class="py-10 px-5"><v-row> 
                                    <v-col><p>Cancelled Visit</p></v-col> 
                                    <v-col><h1>3 </h1></v-col>
                                </v-row> </v-card> </v-col>
                            </v-row>
                            </v-card-text>
                    </v-card>
                </v-row>
                <v-row>
                    <v-card width="100%" class="mt-10" height="250px">
                        <v-card-item>
                            <v-card-title>Health Alerts</v-card-title>
                        </v-card-item>

                        
                            <v-table
                              fixed-header
                              height="300px"
                            >
                              <thead>
                                <tr>
                                  <th class="text-left">
                                    Name
                                  </th>
                                  <th class="text-left">
                                    Calories
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in desserts"
                                  :key="item.name"
                                >
                                  <td>{{ item.name }}</td>
                                  <td>{{ item.calories }}</td>
                                </tr>
                              </tbody>
                            </v-table>
                    
                    </v-card>
                </v-row>
    </v-container> 
    </v-main>
     
</template>
<script>
  export default {
 data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>