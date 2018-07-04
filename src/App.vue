<template><div id="app">

  <!-- <nav class="navbar is-transparent">

    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/documentation/overview/start/">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/documentation/overview/start/">
              Overview
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
              Form
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <button class="button"
                @click="onSignInWithGoogleClick"
                :class="{
                  'is-loading': busy || (isSignedIn === false)
                }"
                >
                {{isSignedIn}}
                Sign in with&nbsp;<b-icon
                    icon="google"
                    size="is-small"></b-icon>oogle
              </button>
            </p>
            <p class="control">
              <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </nav> -->

  <!-- <section class="hero is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          MyStock
        </h1>
        <h2 class="subtitle">
          Advanced analytics for your future.
        </h2>
      </div>
    </div>
  </section> -->



  <!-- BUTTONS -->
  <section class="section">
    <!-- <div class="container"> -->
      <button class="button is-primary"
        @click="onUseGoogleCalendarClick"
        :class="{
          'is-loading': busy
        }"
        :disabled="isSignedIn !== null"
        >Use Google Calendar
      </button>
      <button class="button is-info"
        @click="onSigninToGoogleClick"
        :class="{
          'is-loading': busy
        }"
        :disabled="(isSignedIn === null) || (isSignedIn === true)"
        >Sign in to google
      </button>
      <button class="button is-warning"
        @click="onSignoutOfGoogleClick"
        :class="{
          'is-loading': busy
        }"
        :disabled="(isSignedIn === false) || (isSignedIn === null)"
        >Sign out of google
      </button>
      <button class="button is-success"
        @click="onGetCalendarEventsClick"
        :class="{
          'is-loading': busy
        }"
        :disabled="(isSignedIn === false) || (isSignedIn === null)"
        >Get calendar events
      </button>
      <button class="button is-success"
        @click="onGetCurrentUserClick"
        :class="{
          'is-loading': busy
        }"
        :disabled="(isSignedIn === false) || (isSignedIn === null)"
        >Get currnet user
      </button>
    <!-- </div> -->
  </section>

  <!-- COLUMNS -->
  <section class="section">
    <!-- <div class="container"> -->
      <!-- <div class="columns">
        <div class="column"></div>
      </div> -->
      <div class="columns">
        <!-- MONEY/PICKER -->
        <div class="column is-one-third">
          <div class="content">
            <b-field>
              <b-datepicker placeholder="Start Date" v-model="startDate"
                icon="calendar-o"
                
                >
              </b-datepicker>
            </b-field>
            <b-field>
              <b-datepicker placeholder="End Date" v-model="endDate"
                icon="calendar-o"
                
                >
              </b-datepicker>
            </b-field>
            <button class="button is-danger"
              @click="fetchCalendarEvents"
              :class="{
                'is-loading': busy
              }"
              >Calculate
            </button>
            <h1><span style="color:lime;opacity:.4;">
              <b-icon icon="usd"></b-icon>
              </span>{{projectedAvailableFunds()}}
            </h1>
            <h1><span style="color:#7957d5;opacity:.15;">
              <b-icon icon="calendar-o"></b-icon>
              </span>{{daysFrom(this.startDate, this.endDate)}} days
            </h1>
          </div>
        </div>
        <!-- CALENDAR -->
        <div class="column is-one-third">
          <b-datepicker inline placeholder="Calendar"
            v-model="someDate"
            icon="calendar-o"
            :indicators="indicators"
            :events="getEventsv4()"
            >
          </b-datepicker>
        </div>
        <!-- SELECTED DATE EVENTS -->
        <div class="column is-one-third">
          {{someDate}}
          <div class="box"
            v-for="(breakdown, i) in selectedDateBreakdowns(someDate)"
            :key="i"
            >
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{breakdown.title}}</strong> <small>@{{breakdown.date}}</small> <small>${{breakdown.amount}}</small>
                    <!-- <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. -->
                  </p>
                </div>
                <!-- <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    </a>
                  </div>
                </nav> -->
              </div>
            </article>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </section>

  <!-- EVENTS/GRAPH -->
  <div class="columns">
    <!-- EVENTS/GRAPH -->
    <div class="column">
      <LineChart :chartData="getChartData()"
        :options="{}"
        style="width: 100%;"
        v-if="getChartData().datasets.length && getChartData().datasets[0].data.length"
        >
      </LineChart>
      <h1 v-else>Nothing here.</h1>
      <b-table
          :data="reduceEvents"
          :bordered="false"
          :striped="true"
          :narrowed="false"
          :hoverable="true"
          :loading="busy"
          :mobile-cards="true"
          >

          <template scope="props">

              <b-table-column label="Debit/Credit">
                  <span class="tag" :class="{
                    'is-success': props.row.debitOrCredit === 'credit',
                    'is-danger': props.row.debitOrCredit === 'debit'
                  }">{{ props.row.debitOrCredit }}</span>
              </b-table-column>
                              
              <b-table-column label="Amount">
                  ${{ props.row.amount }}
              </b-table-column>
              
              <b-table-column label="Summary">
                  {{ props.row.summary }}
              </b-table-column>

              <b-table-column label="balance">
                  {{ props.row.balance.toFixed(2) }}
              </b-table-column>

              <b-table-column label="Date">
                  {{ props.row.date }}
                  <!-- <div class="column is-one-third">
                    <b-datepicker inline placeholder="Calendar"
                      v-model="props.row.date"
                      icon="calendar-o"
                      size="is-large"
                      >
                    </b-datepicker>
                  </div> -->
              </b-table-column>

              <!-- <b-table-column label="ID">
                  {{ props.row.id }}
              </b-table-column> -->
          </template>

          <template slot="empty">
              <section class="section">
                  <div class="content has-text-grey has-text-centered">
                      <p>
                          <b-icon
                              icon="emoticon-sad"
                              size="is-large">
                          </b-icon>
                      </p>
                      <p>Nothing here.</p>
                  </div>
              </section>
          </template>
      </b-table>
    </div>
  </div>

  <br><br>
  <!-- <pre style="padding:15px">getEventsv4()={{getEventsv4()}}</pre> -->
  <!-- <pre style="padding:15px">getChartData()={{getChartData()}}</pre> -->
  <pre style="padding:15px">reduceEvents={{reduceEvents}}</pre>
  <!-- <pre style="padding:15px">isSignedIn={{isSignedIn}}</pre> -->
  <!-- <pre style="padding:15px">currentUser={{currentUser}}</pre> -->
  <!-- <pre style="padding:15px">getCalendarEventData={{events.length ? getCalendarEventData(events[0]) : []}}</pre> -->
  <!-- <br><pre style="padding:15px">events={{events}}</pre> -->

  <router-view></router-view>

</div></template>

<script>
  import moment from 'moment'
  import LineChart from '@/components/LineChart'
  export default {
    name: 'app',
    components: {
      LineChart
    },
    data () {
      return {
        someDate: new Date(),
        startDate: new Date(),
        endDate: new Date(),
        isSignedIn: null,
        events: [],
        busy: false
      }
    },
    computed: {
      getEventsV2 () {
        return []
      },
      indicators () {
        return 'dots'
      },
      reduceEvents () {
        return this.getReduceEvents()
      }
    },
    methods: {
      getReduceEvents () {
        return this.events
          .map(this.mapEvents)
          .filter(event => event.summary !== 'basic-iterator')
          .reduce((accumulator, currentValue, currentIndex) => {
            let amount
            let balance
            const debit = currentValue.debitOrCredit === 'debit'
            if (currentIndex === 0) {
              amount = parseFloat(currentValue.amount)
              amount = debit ? (-1 * amount) : amount
              balance = amount
            } else if (currentIndex > 0) {
              amount = parseFloat(currentValue.amount)
              balance = accumulator[currentIndex - 1].balance
              amount = debit ? balance - amount : balance + amount
              balance = amount
            }
            return [...accumulator, {
              ...currentValue,
              balance: balance
            }]
          }, [])
      },
      selectedDateBreakdowns (selectedDate) {
        return this.getReduceEvents().filter(event => {
          console.log(typeof event.date, typeof selectedDate.toString(), event.date, selectedDate)
        })
      },
      getEventsv4 () {
        return this.events.map(event => {
          const year = moment(event.start.dateTime || event.start.date).year()
          const month = new Date(event.start.dateTime || event.start.date).getMonth()
          const day = moment(event.start.dateTime || event.start.date).date()
          const type = (this.getCalendarEventData(event).debitOrCredit === 'credit') ? 'is-success' : 'is-danger'
          return {
            date: new Date(year, month, day),
            type: type
          }
        })
      },
      calculate () {
        //
      },
      mapEvents (event) {
        const eventJson = JSON.parse(event.description)
        return {
          id: event.id,
          date: event.start.dateTime || event.start.date,
          amount: eventJson.amount,
          summary: event.summary,
          debitOrCredit: eventJson.debitOrCredit
        }
      },
      getBalanceFromChartData () {
        const chartData = this.getChartData()
        if (chartData.datasets.length) {
          if (chartData.datasets[0].data.length) {
            return chartData.datasets[0].data[chartData.datasets[0].data.length - 1]
          } else {
            return 0
          }
        } else {
          return 0
        }
      },
      reduceWithBalance (accumulator, currentValue, currentIndex) {
        const previousEvent = accumulator[accumulator.length - 1] || { amount: 0, balance: 0, date: new Date() }
        const balance = (currentValue.debitOrCredit === 'credit')
          ? (previousEvent.balance + parseFloat(currentValue.amount))
          : (previousEvent.balance - parseFloat(currentValue.amount))
        if (currentValue.date === previousEvent.date) {
          accumulator[accumulator.length - 1].balance = balance
          return [...accumulator]
        } else {
          return [...accumulator, {
            ...currentValue,
            balance: balance
          }]
        }
      },
      getChartData () {
        const labels = this.events
          .map(this.mapEvents)
          .map(event => event.date)
          .reduce((accumulator, currentValue, currentIndex) => {
            let previous
            if (accumulator[accumulator.length - 1]) {
              previous = accumulator[accumulator.length - 1]
            } else {
              previous = moment(new Date()).format('MM/DD/YY')
            }
            if (currentValue === previous) {
              return [...accumulator]
            } else {
              return [...accumulator, currentValue]
            }
          }, [])
        const data = this.events
          .map(this.mapEvents)
          .reduce(this.reduceWithBalance, [])
          .map(event => event.balance)
        return {
          labels: labels,
          datasets: [{
            label: '$ money',
            backgroundColor: 'transparent',
            borderColor: '#7957d5',
            borderWidth: 10,
            pointRadius: 5,
            pointHitRadius: 10,
            pointHoverRadius: 10,
            pointBorderWidth: 5,
            pointBorderColor: '#000',
            data: data
          }]
        }
      },
      projectedAvailableFunds () {
        return (this.getBalanceFromChartData()).toFixed(2)
      },
      onGetCurrentUserClick () {
        this.currentUser = window.gapi
          .auth2
          .getAuthInstance()
          .currentUser
          .get()
          .getBasicProfile()
          .getEmail()
      },
      getCalendarEventData (googleCalendarEventObject) {
        return JSON.parse(googleCalendarEventObject.description)
      },
      async fetchCalendarEvents () {
        this.busy = true
        if (this.events.length) {
          this.events = []
        }
        const gapiClientCalendarEventsListResponse = await window.gapi.client.calendar.events.list({
          'calendarId': 'pr3dt9udfam6c0p6gpfbmsqav4@group.calendar.google.com',
          'timeMin': (this.startDate).toISOString(),
          'timeMax': (new Date(moment(this.endDate).add(1, 'd'))).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 1000,
          'orderBy': 'startTime'
        })
        const events = gapiClientCalendarEventsListResponse.result.items || []
        this.events = events
        this.busy = false
      },
      async onGetCalendarEventsClick () {
        this.busy = true
        window.gapi.client.calendar.events.list({
          'calendarId': 'pr3dt9udfam6c0p6gpfbmsqav4@group.calendar.google.com',
          'timeMin': (new Date()).toISOString(),
          'timeMax': (new Date('2018/05/31')).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 1000,
          'orderBy': 'startTime'
        }).then((response) => {
          const events = response.result.items
          this.events = events
          this.busy = false
        })
      },
      daysFrom (now = new Date(), until) {
        const a = moment(until)
        const b = moment(now)
        const numDays = a.diff(b, 'days', true)
        return Math.ceil(numDays)
      },
      onSignoutOfGoogleClick () {
        window.gapi.auth2.getAuthInstance().signOut()
      },
      onSigninToGoogleClick () {
        this.busy = true
        window.gapi.auth2.getAuthInstance().signIn()
        this.busy = false
      },
      async onSignInWithGoogleClick () {
        this.busy = true
        await this.initGoogleClient()
        window.gapi.auth2.getAuthInstance().signIn()
        this.busy = false
      },
      updateSigninStatus (isSignedIn) {
        this.isSignedIn = isSignedIn
        if (isSignedIn) {
          this.onGetCurrentUserClick()
        }
      },
      onUseGoogleCalendarClick () {
        this.busy = true
        window.gapi.load('client:auth2', () => {
          window.gapi.client.init({
            apiKey: 'AIzaSyDGacndtC8FZT17DNW2vk7uM6d8urZvBww',
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
            clientId: '29638725373-mdgakjov41usn54glni02423e1i90jn5.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/calendar.readonly'
          }).then(() => {
            // Listen for sign-in state changes.
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)
            // Handle the initial sign-in state.
            this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())
            this.busy = false
            if (!this.isSignedIn) {
              this.onSigninToGoogleClick()
            }
            // if (this.isSignedIn) {
            //   this.onGetCalendarEventsClick()
            // }
          })
        })
      },
      async initGoogleClient () {
        return new Promise((resolve, reject) => {
          window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
              apiKey: 'AIzaSyDGacndtC8FZT17DNW2vk7uM6d8urZvBww',
              discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
              clientId: '29638725373-mdgakjov41usn54glni02423e1i90jn5.apps.googleusercontent.com',
              scope: 'https://www.googleapis.com/auth/calendar.readonly'
            }).then(() => {
              // Listen for sign-in state changes.
              window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)
              // Handle the initial sign-in state.
              this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())
              resolve()
            })
          })
        })
      }
    },
    mounted () {
      this.onUseGoogleCalendarClick()
    }
  }
</script>

<style>
  @import "~bulma/css/bulma.css";
  @import "~buefy/lib/buefy.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
