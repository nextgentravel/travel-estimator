<template>
    <div>
        <div style="position: fixed; z-index: 99999; top: 0px; left: 45%;"><a
                class="sr-only sr-only-focusable aurora-skip" href="#main-content">Skip to main content</a>
        </div>
        <header class="shadow-sm">
            <div class="" style="background-color: #FAF2CC; text-align: left; vertical-align: middle;">
                <div class="container py-3">
                    <div class="row">
                        <div class="col-xs-1">
                            <font-awesome-icon @click="toggleBannerInfo"
                                v-bind:icon="showBannerInfo ? 'chevron-up' : 'chevron-down'"
                                style="font-size: 1.5em; color: black;" />
                        </div>
                        <div class="col-sm-11">
                            <button
                                style="background: #FEC04F; border: 1px solid #000000; border-radius: 20px; margin-right: 10px;"><strong>ARCHIVED</strong></button>
                            <span>This prototype is no longer under development.</span>

                            <p v-show="showBannerInfo">
                                <br>
                                This prototype is no longer being maintained as of
                                    March 27, 2020. The information provided may no longer be accurate. Please
                                    consult the <a target="_blank"
                                        href="https://rehelv-acrd.tpsgc-pwgsc.gc.ca/acrds/index-eng.aspx">Accommodation
                                        and Car Rental Directory</a> and the
                                    <a target="_blank" href="https://www.njc-cnm.gc.ca/directive/d10/en">National Joint Council Travel
                                        Directive</a> for the most up-to-date information.
                                    For more information on the NextGen Travel program, please visit
                                    <a target="_blank"
                                        href="http://gcintranet.tpsgc-pwgsc.gc.ca/gc/svp-sts/postes-roles-eng.html">http://gcintranet.tpsgc-pwgsc.gc.ca/gc/svp-sts/postes-roles-eng.html</a>.
                                    If you are interested in contributing to this project, the source code is
                                    available on Github: <a target="_blank"
                                        href="https://github.com/nextgentravel/travel-estimator">https://github.com/nextgentravel/travel-estimator</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background-color: #137991; border-bottom: 10px solid #002D42;">
                <div class="container py-2 h-100" style="color: #fff;">
                    <div class="row">
                        <div class="col-8">
                            <h4 class="mb-3 mt-3 h4">
                                Domestic Travel Estimator
                            </h4>
                        </div>
                        <div class="col-4 align-self-center">
                            <span class="float-right d-none d-md-block">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data: function () {
            return {
                showBannerInfo: false,
            }
        },
        methods: {
            toggleBannerInfo: function () {
                this.showBannerInfo = !this.showBannerInfo;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>