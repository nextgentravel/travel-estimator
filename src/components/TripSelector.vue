<template>
  <div>
    <DestinationModal v-if="showDestinationModal" />
    <Header />
    <div class="container">
      <br>
      <div v-if="loading">
        <div class="spinner"></div>
        Loading Domestic Cities
      </div>
      <div v-else>
                <p><strong>Travelling on Government business within Canada?  Use this tool to quickly estimate the cost of your trip.</strong></p>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="originInput" class="">From</label>
              <autocomplete
                aria-label="Origin"
                ref="origin"
                :search="originSearch"
                :get-result-value="getOriginValue"
                :default-value="origin"
              >
              </autocomplete>
              
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="destinationInput" class="">To</label>
              <autocomplete 
                aria-label="Destination"
                ref="destination"
                :search="destinationSearch"
                :get-result-value="getDestinationValue"
                :default-value="destination"
                >
              </autocomplete>
              <p style="float: right; padding: 5px;"><a href="#" @click="() => { this.showDestinationModal = true }">Destination not in list?</a></p>
            </div>
          </div>
          <div class="col-sm-4">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="destinationInput" class="">Dates</label><br>
                <div class="datepicker-trigger">
                  <button class="btn btn-secondary btn-sm" id="datepicker-trigger">
                    {{formatDates(departDate, returnDate)}}
                  </button>
                  <AirbnbStyleDatepicker
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'range'"
                    :fullscreen-mobile="true"
                    :date-one="this.departDate"
                    :date-two="this.returnDate"
                    @date-one-selected="val => { this.departDate = val }"
                    @date-two-selected="val => { this.returnDate = val }"
                  />
                </div>

            </div>
          </div>
          <div class="col-sm-8">
          </div>
        </div>

        <div class="form-group">
          <button class="btn btn-primary" v-on:click="submitTrip">Create Estimate</button>
          <button class="btn button-custom ml-2" v-on:click="clearState">Clear</button>
        </div>
      </div>
    </div>
    <br>
    <Footer />
  </div>
</template>

<script>
  import moment from 'moment'
  import Header from './Header'
  import Footer from './Footer'
  import DestinationModal from './DestinationModal'
  export default {
    name: 'TripSelector',
    components: {
      Header,
      Footer,
      DestinationModal,
    },
    data: function () {
      return {
        today: moment().format("MMM DD, YYYY"),
        cityLookup: {},
        loading: false,
        dateOne: '',
        dateTwo: '',
      }
    },
    mounted() {
      this.initialize()
    },
    methods: {
      initialize() {
        this.fetchData()
        this.departDate = this.departDate !== '' ? this.departDate : moment().format('YYYY-MM-DD');
        this.returnDate = this.returnDate !== '' ? this.returnDate : moment().add(5, 'days').format('YYYY-MM-DD');
        this.$refs.origin.setValue(this.origin)
        this.$refs.destination.setValue(this.destination)
      },
      formatDates(dateOne, dateTwo) {
        dateOne = moment(dateOne).format('D MMM')
        dateTwo = moment(dateTwo).format('D MMM')
        return `${dateOne} - ${dateTwo}`
      },
      handleDateSelectorInput: function (e) {
        this.departDate = e.startDate
        this.returnDate = e.endDate
      },
      submitTrip: function () {
        let destination = this.currentDestinationValue;
        let origin = this.currentOriginValue;
        let departDate = this.departDate;
        let returnDate = this.returnDate;
        this.$store.commit('resetStateNewTrip', {
          origin,
          destination,
          departDate,
          returnDate,
        })
        let city = this.cityLookup[destination] || destination;
        let cities = Object.keys(this.cityLookup)
        if (cities.includes(this.currentDestinationValue)) {
          let uri = `https://acrd-api.herokuapp.com/${city.replace('/','sss')}/rules`
          fetch(uri)
            .then(response => response.json())
            .then(data => {           
              this.$store.commit('updateAcrdResponse', data)
              this.$store.commit('updateOrigin', origin)
              this.$store.commit('updateDestination', destination)
              this.$store.commit('updateDepartDate', departDate)
              this.$store.commit('updateReturnDate', returnDate)

              this.$router.push({ path: 'calculate' })
            })  
        } else {
            this.$store.commit('updateAcrdResponse', {"January":"$100","February":"$100","March":"$100","April":"$100","May":"$100","June":"$100","July":"$100","August":"$100","September":"$100","October":"$100","November":"$100","December":"$100"})
            this.$store.commit('updateOrigin', origin)
            this.$store.commit('updateDestination', destination)
            this.$store.commit('updateDepartDate', departDate)
            this.$store.commit('updateReturnDate', returnDate)

            this.$router.push({ path: 'calculate' })
        }


      },
      clearState: function () {
        this.$store.commit('resetState')
        this.initialize()
      },
      fetchData() {
        this.error = this.post = null
        this.loading = true
        fetch('https://acrd-api.herokuapp.com/cities')
          .then(response => response.json())
          .then(data => {
            this.loading = false
            this.$store.commit('updateCity', data.citiesList)
            this.cityLookup = data.suburbCityList
          })
      },
      normalizeString(string) {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      },
      originSearch(input) {
        if (input.length < 1) {
          return []
        }
        return this.cities.filter(city => {
          return this.normalizeString(city).toLowerCase()
            .startsWith(input.toLowerCase())
        })
      },
      destinationSearch(input) {
        this.currentDestinationValue = input
        if (input.length < 1) {
          return []
        }
        return this.cities.filter(city => {
          return this.normalizeString(city).toLowerCase()
            .startsWith(input.toLowerCase())
        })
      },
      getOriginValue(result) {
        this.currentOriginValue = result;
        return result
      },
      getDestinationValue(result) {
        this.currentDestinationValue = result;
        return result
      },
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
      training: {
        get() {
          return this.$store.state.training
        },
        set(value) {
          this.$store.commit('updateTraining', value)
        }
      },
      conference: {
        get() {
          return this.$store.state.conference
        },
        set(value) {
          this.$store.commit('updateConference', value)
        }
      },
      cities: {
        get() {
          return this.$store.state.cities
        },
        set(value) {
          this.$store.commit('updateCity', value)
        }
      },
      origin: {
        get() {
          return this.$store.state.origin
        },
        set(value) {
          this.$store.commit('updateOrigin', value)
        }
      },
      destination: {
        get() {
          return this.$store.state.destination
        },
        set(value) {
          this.$store.commit('updateDestination', value)
        }
      },
      departDate: {
        get() {
          return this.$store.state.departDate
        },
        set(value) {
          this.$store.commit('updateDepartDate', value)
        }
      },
      returnDate: {
        get() {
          return this.$store.state.returnDate
        },
        set(value) {
          this.$store.commit('updateReturnDate', value)
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .button-custom {
    border: none;
    color: #0278A4;
    background-color: unset;
    font-weight: unset !important;
  }
  .button-custom:hover {
    color: #0278A4 !important;
    background-color: transparent !important;
    text-decoration: underline;
  }
  .button-custom:active {
    box-shadow: unset !important;
    -webkit-box-shadow: unset !important;
  }
  .button-custom:focus {
    box-shadow: unset !important;                
    -webkit-box-shadow: unset !important;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -6px;
  }
  .spinner {
    width: 40px;
    height: 40px;
    margin: 10px auto;
    background-color: #333;

    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
  }

  .autocomplete-result-list {
    border-radius: 0 0 0.375rem 0.375rem !important;
    padding-bottom: 0px !important;
    margin-top: -4px !important;
    padding-top: 4px !important;
    border: 1px solid #cbcccb !important;
    border-width: 0px 1px 1px 1px !important;
    border-top-color: #fff !important;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .16) !important;
    -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, .16) !important;
  }

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0)
    }

    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
  }
</style>