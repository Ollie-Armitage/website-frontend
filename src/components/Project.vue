<template>
  <div>
    <div v-if="project">
      <v-img
          ref="background"
          dark
          src="@/assets/train_station.jpg"
          :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"

      >
        <v-sheet
            color="transparent"
            class="overflow-y-auto"
            :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        >
          <v-container>
            <v-row class="justify-center">
              <v-col xl="6">
                <v-card max-width="1000">
                  <v-container>
                    <v-row class="justify-center">
              <span
                  class="font-weight-thin text-uppercase ml-2"
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  style="font-family: 'Montserrat', sans-serif;"
              >
                  {{ project.title }}
              </span>
                    </v-row>

                    <v-row>
                      <v-col v-if="project.imageLink" sm="6">
                        <v-card elevation="10" rounded>
                          <v-img max-height="300" :src="project.imageLink"></v-img>
                        </v-card>
                      </v-col>
                      <v-col>
                <span style="font-family: 'Inconsolata',sans-serif; font-weight: 200;">
                  <div v-html="project.description"></div>
                </span>

                      </v-col>
                    </v-row>

                    <v-divider class="mt-5"></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-tooltip top v-if="project.githubLink">
                        <template v-slot:activator="{ on, attrs}">
                          <v-btn
                              :href="project.githubLink"
                              class="mr-2"
                              v-bind="attrs"
                              v-on="on"
                              icon>
                            <v-icon large>mdi-github</v-icon>
                          </v-btn>
                        </template>
                        <span>Github</span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              to="/"
                              class="mr-2"
                              v-bind="attrs"
                              v-on="on"
                              icon>
                            <v-icon large>mdi-exit-to-app</v-icon>
                          </v-btn>
                        </template>
                        <span>Home</span>
                      </v-tooltip>
                    </v-card-actions>

                  </v-container>
                </v-card>
              </v-col>

            </v-row>
          </v-container>
        </v-sheet>
      </v-img>
    </div>
    <div v-else>
      <v-container>
        <v-row class="justify-center">
            <v-progress-circular indeterminate color="white"></v-progress-circular>
        </v-row>
      </v-container>

    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Project",
  data: () => {
    return {
      project: null,
    }
  },
  computed: {...mapGetters(['getProject', 'allProjects'])},
  methods: {...mapActions(['fetchProjects'])},
  async mounted() {

    if (this.allProjects.length === 0) {
      await this.fetchProjects()
    }

    this.project = this.getProject(this.$route.params.project_id)
  }
}
</script>

<style scoped>

</style>
