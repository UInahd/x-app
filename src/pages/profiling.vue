<script setup>
import adminLayout from '../layouts/AdminLayout.vue'
</script>

<template>
    <adminLayout/>
   <v-main>

    <div v-if="nodata">i am a profiling page </div>

    
    <div v-else> 
        <div>
            <v-row>
                <v-col cols="4" md="2 "  v-for="user in users" :key="user.id">
                    <v-card v-show="user.showCard">
                        <v-card-title>
                            {{ user.name }}
                        </v-card-title>
                        <v-card-subtitle>Age:{{user.age}}</v-card-subtitle>
                        <v-card-text>Email: {{user.email}}</v-card-text>
                        <v-card-action>
                            <v-btn class="ma-2" v-on:click="toggleCard(user)" variant="text">hide</v-btn>
                            
                        </v-card-action>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <v-table height="500px">
            <thead>
                <tr>
                    <th class="text-left">
                        ID
                    </th>
                    <th class="text-left">
                        NAME
                    </th>
                    <th class="text-left">
                        AGE
                    </th>
                    <th class="text-left">
                        EMAIL ADDRESS
                    </th>
                    <th>
                        <v-switch label="Show action"
                        v-model="showAction"></v-switch>
                    </th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="user in users" :key="user.id">
                    
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.email}}</td>
                    <td v-if="showAction"><v-btn >edit</v-btn> <v-btn >delete</v-btn> </td>
                </tr>
            </tbody>
        </v-table>
  </div>
   </v-main>
</template>
<script>
  export default {
 data () {
      return {
        nodata:false,
        showAction:false,

        users: [
          {id: 1,
            name: 'Frozen Yogurt',
            age: 19,
            email:'lorem@email.com',
            showCard:true,
          },
          {
            id: 2,
            name: 'Ice cream sandwich',
            age: 19,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 3,
            name: 'Eclair',
            age: 22,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 4,
            name: 'Cupcake',
            age: 32,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 5,
            name: 'Gingerbread',
            age: 42,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 6,
            name: 'Jelly bean',
            age: 18,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 7,
            name: 'Lollipop',
            age: 54,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 8,
            name: 'Honeycomb',
            age: 23,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 9,
            name: 'Donut',
            age: 12,
            email:'lorem@email.com',
            showCard:true,
          },
          {id: 10,
            name: 'KitKat',
            age: 78,
            email:'lorem@email.com',
            showCard:true,
          },
        ],
      }
    },
    methods:{
        toggleCard(user){
            user.showCard = !user.showCard;
        }
    }
    
  }
</script>