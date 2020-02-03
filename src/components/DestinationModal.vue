<template>
  <div class="modal" role="dialog" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Is your destination not showing up in the list?</h5>
          <button @click="() => { showDestinationModal = false }" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" style="margin-top: 10px;">
            <p>Only destinations that are listed in the Government of Canada Accommodation and Car Rental Directory show up in this list.</p>
            <p>Continue with your estimate by typing in the name of your destination.  Your maximum night rate for acommodations will be $100.</p>
        </div>
        <div class="modal-footer">
          <div>
            <button type="button" class="btn btn-primary" @click="() => { showDestinationModal = false }">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'DestinationModal',
    mounted() {},
    data: function () {
      return {
        moment
      }
    },
    methods: {
    },
    computed: {
      showDestinationModal: {
        get() {
          return this.$store.state.showDestinationModal
        },
        set(value) {
          this.$store.commit('updateShowDestinationModal', value)
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>