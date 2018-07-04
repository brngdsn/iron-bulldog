<template><div class="dashboard">

  <!-- 29638725373-mdgakjov41usn54glni02423e1i90jn5.apps.googleusercontent.com -->

  <section class="section">
    <div class="container">
      <div class="columns">

        <div class="column is-one-third">
          <b-field>
            <b-input v-model="frequency" type="number" size="is-large" placeholder="Frequency" :disabled="!recurrence"></b-input>
            <b-switch v-model="recurrence" style="margin-left:15px;">recurrence</b-switch>
          </b-field>
          <b-field>
            <b-input v-model="amount" type="number" size="is-large" placeholder="Amount"></b-input>
          </b-field>
          <b-field>
            <div class="block">
              <b-radio v-model="debitOrCredit"
                native-value="credit">
                Credit
              </b-radio>
              <b-radio v-model="debitOrCredit"
                native-value="debit">
                Debit
              </b-radio>
            </div>
          </b-field>
          <b-field>
            <b-datepicker inline
              v-model="startDate"
              icon="calendar-today"
              size="is-large"
              >
            </b-datepicker>
          </b-field>
          <b-field><!-- Label left empty for spacing -->
            <p class="control">
              <button class="button is-primary is-large" @click="onAddOccurence">
                Add Occurence
              </button>
            </p>
          </b-field>
        </div>

        2<div class="column is-one-third">
          <div class="content">
            <h1 style="font-size:110px;margin-bottom: 0.07em;"
              ><span style="color:lime;opacity:.25;"
                >$</span>{{projectedAvailableFunds()}}</h1>
            <b-field>
              <b-datepicker inline
                v-model="visibleDate"
                icon="calendar-today"
                size="is-large"
                :events="getEventsv3"
                :indicators="indicators"
                >
              </b-datepicker>
            </b-field>
          </div>
        </div>

        3<div class="column is-one-third">
          <pre>Days from now: {{daysFromNow()}}</pre>
          <pre>Events: {{events}}</pre>
        </div>

      </div>
    </div>
  </section>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'
  export default {
    name: 'dashboard',
    data () {
      return {
        frequency: 14,
        recurrence: true,
        amount: 3350,
        debitOrCredit: 'credit',
        endDate: new Date(),
        startDate: new Date(),
        visibleDate: new Date(),
        events: [],
        busy: false
      }
    },
    computed: {
      indicators () {
        return 'dots'
      },
      getEventsv3 () {
        return []
      },
      ...mapGetters([
        // some state
      ])
    },
    methods: {
      projectedAvailableFunds () {
        return 0 + this.getStaticFunds()
      },
      getStaticFunds () {
        let funds
        funds = this.events.filter(event => event.recurrence === false)
        funds = funds.length ? funds.map(fund => fund.income) : []
        funds = funds.reduce((a, b) => a + b, 0)
        return funds
      },
      daysFromNow () {
        const a = moment(this.visibleDate)
        const b = moment(this.startDate)
        const numDays = a.diff(b, 'days', true)
        return Math.ceil(numDays)
      },
      onAddOccurence () {
        this.events.push({
          frequency: this.frequency,
          recurrence: this.recurrence,
          amount: this.amount,
          debitOrCredit: this.debitOrCredit,
          startDate: this.startDate,
          endDate: this.endDate,
          date: this.startDate,
          type: 'is-info'
        })
      },
      ...mapActions([
        // some action
      ]),
      async fetch () {
        this.busy = true
        await Promise.resolve()
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted Dashboard!')
    }
  }
</script>

<style scoped>
  .dashboard {

  }
</style>
