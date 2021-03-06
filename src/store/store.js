import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const getDefaultState = () => {
    return {
        accommodationWarning: false,
        userName: '',
        tripName: '',
        tripCategory: '',
        tripWhy: '',
        showMealsModal: false,
        showDestinationModal: false,
        showGroundTransportationModal: false,
        showBannerInfo: true,
        showExportModal: false,
        cities: [],
        origin: null,
        destination: null,
        departDate: '',
        returnDate: '',
        perDiem: {
            dailyRate: 0,
        },
        other: [
            { item: "", cost: "" }
        ],
        noteToApprover: "",
        acrdResponse: "",
        estimate: {
            accommodation: { selected: false, amount: null, type: "Hotel" },
            mealsAndIncidentals: { selected: false, amount: 0, type: ""},
            transportation: {
                selected: false,
                amount: 0,
            },
            groundTransportation: {
                selected: false,
                amount: 0,
                lineItems: {
                    accommodationToDestinationAmount: 0,
                    accommodationToDestinationType: "",
                    dailyTransportationAmount: 0,
                    dailyTransportationType: "",
                    destinationToAccommodationAmount: 0,
                    destinationToAccommodationType: "",
                    homeToOriginAmount: 0,
                    homeToOriginType: "",
                    originToHomeAmount: 0,
                    originToHomeType: "",
                }
            },
            other: { selected: false, amount: 0, description: ""},
        },
        training: false,
        conference: false,
        calculatedTotal: "-:--",
        tripRates: {},
        mealsAndIncidentals: {
            YT: {
                breakfast: 22.75,
                lunch: 20.90,
                dinner: 60.25,
                incidentals: 17.30
            },
            TN: {
                breakfast: 24.15,
                lunch: 29.30,
                dinner: 62.70,
                incidentals: 17.30
            },
            NU: {
                breakfast: 27.35,
                lunch: 33.20,
                dinner: 88.45,
                incidentals: 17.30
            },
            CAN: {
                breakfast: 20.35,
                lunch: 20.60,
                dinner: 50.55,
                incidentals: 17.30
            },
        },
        mealsByDay: [],
      }    
  }
  
  // initial state
const state = getDefaultState()

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: state,
  mutations: {
    resetState (state) {
        Object.assign(state, getDefaultState())
    },
    resetStateNewTrip (state, newTripObject) {
        const merged = {...getDefaultState(), ...newTripObject}
        Object.assign(state, merged)
    },
    updateAccommodationWarning (state, accommodationWarning) {
        state.accommodationWarning = accommodationWarning
    },
    updateUserName (state, userName) {
        state.userName = userName
    },
    updateTripName (state, tripName) {
        state.tripName = tripName
    },
    updatetripCategory (state, tripCategory) {
        state.tripCategory = tripCategory
    },
    updateTripWhy (state, tripWhy) {
        state.tripWhy = tripWhy
    },
    updateShowExportModal (state, showExportModal) {
        state.showExportModal = showExportModal
    },
    updateShowDestinationModal (state, showDestinationModal) {
        state.showDestinationModal = showDestinationModal
    },
    updateShowMealsModal (state, showMealsModal) {
        state.showMealsModal = showMealsModal
    },
    updateShowGroundTransportationModal (state, showGroundTransportationModal) {
        state.showGroundTransportationModal = showGroundTransportationModal
    },
    updateTripRates (state, tripRates) {
        state.tripRates = tripRates
    },
    updateMealsByDay (state, mealsByDay) {
        state.mealsByDay = mealsByDay
    },
    updateOrigin (state, origin) {
        state.origin = origin
    },
    updateDestination (state, destination) {
        state.destination = destination
    },
    updateDepartDate (state, departDate) {
        state.departDate = departDate
    },
    updateReturnDate (state, returnDate) {
        state.returnDate = returnDate
    },
    updateCity (state, cities) {
        state.cities = cities
    },
    updateAcrdResponse (state, acrdResponse) {
        state.acrdResponse = acrdResponse
    },
    updateTraining (state, training) {
        state.training = training
    },
    updateConference (state, conference) {
        state.conference = conference
    },
    updateAccommodationSelected (state, accomodationSelected) {
        state.estimate.accommodation.selected = accomodationSelected
    },
    updateAccommodationRate (state, accomodationRate) {
        state.estimate.accommodation.rate = accomodationRate
    },
    updateNumberOfDays (state, numberOfDays) {
        state.estimate.accommodation.numberOfDays = numberOfDays
    },
    updateMealsAndIncidentalsSelected (state, mealsAndIncidentalsSelected) {
        state.estimate.mealsAndIncidentals.selected = mealsAndIncidentalsSelected
    },
    updateTransportationSelected (state, transportationSelected) {
        state.estimate.transportation.selected = transportationSelected
    },
    updateGroundTransportationSelected (state, groundTransportationSelected) {
        state.estimate.groundTransportation.selected = groundTransportationSelected
    },
    updateOtherSelected (state, otherSelected) {
        state.estimate.other.selected = otherSelected
    },
    updateOtherDescription (state, otherDescription) {
        state.estimate.other.description = otherDescription
    },
    updateOtherAmount (state, otherAmount) {
        state.estimate.other.amount = otherAmount
    },
    updateAccommodationAmount (state, accomodationAmount) {
        state.estimate.accommodation.amount = accomodationAmount
    },
    updateMealsAndIncidentalsAmount (state, mealsAndIncidentalsAmount) {
        state.estimate.mealsAndIncidentals.amount = mealsAndIncidentalsAmount
    },
    updateTransportationAmount (state, transportationAmount) {
        state.estimate.transportation.amount = transportationAmount
    },
    updateGroundTransportationAmount (state, groundTransportationAmount) {
        state.estimate.groundTransportation.amount = groundTransportationAmount
    },
    updateAccommodationType (state, accomodationType) {
        state.estimate.accommodation.type = accomodationType
    },
    updateMealsAndIncidentalsType (state, mealsAndIncidentalsType) {
        state.estimate.mealsAndIncidentals.type = mealsAndIncidentalsType
    },
    updateCalculatedTotal (state, calculatedTotal) {
        state.calculatedTotal = calculatedTotal
    },
    updateAccommodationTotal (state, accommodationTotal) {
        state.accommodationTotal = accommodationTotal
    },
    updateNoteToApprover (state, noteToApprover) {
        state.noteToApprover = noteToApprover
    },
    updateHomeToOriginType (state, homeToOriginType) {
        state.estimate.groundTransportation.lineItems.homeToOriginType = homeToOriginType
    },
    updateHomeToOriginAmount (state, homeToOriginAmount) {
        state.estimate.groundTransportation.lineItems.homeToOriginAmount = homeToOriginAmount
    },
    updateDestinationToAccommodationType (state, destinationToAccommodationType) {
        state.estimate.groundTransportation.lineItems.destinationToAccommodationType = destinationToAccommodationType
    },
    updateDestinationToAccommodationAmount (state, destinationToAccommodationAmount) {
        state.estimate.groundTransportation.lineItems.destinationToAccommodationAmount = destinationToAccommodationAmount
    },
    updateDailyTransportationType (state, dailyTransportationType) {
        state.estimate.groundTransportation.lineItems.dailyTransportationType = dailyTransportationType
    },
    updateDailyTransportationAmount (state, dailyTransportationAmount) {
        state.estimate.groundTransportation.lineItems.dailyTransportationAmount = dailyTransportationAmount
    },
    updateAccommodationToDestinationType (state, accommodationToDestinationType) {
        state.estimate.groundTransportation.lineItems.accommodationToDestinationType = accommodationToDestinationType
    },
    updateAccommodationToDestinationAmount (state, accommodationToDestinationAmount) {
        state.estimate.groundTransportation.lineItems.accommodationToDestinationAmount = accommodationToDestinationAmount
    },
    updateOriginToHomeType (state, originToHomeType) {
        state.estimate.groundTransportation.lineItems.originToHomeType = originToHomeType
    },
    updateOriginToHomeAmount (state, originToHomeAmount) {
        state.estimate.groundTransportation.lineItems.originToHomeAmount = originToHomeAmount
    },
    updateShowBannerInfo (state) {
        state.showBannerInfo = !state.showBannerInfo
    },
  },
  
  actions: {
  }
});