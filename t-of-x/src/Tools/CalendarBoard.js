import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarBoard.css'
 
class CalendarBoard extends React.Component {
  // State
  constructor() {
    // Call parent constructor
    super()

    // Set initial state
    this.state = {
      date: new Date().toISOString(),
      events: []
    };

    // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
  }

  // Updates an object whenever the props change
  async componentDidUpdate(oldProps) {
    // https://stackoverflow.com/questions/37009328/re-render-react-component-when-prop-changes
    if (this.props !== oldProps) {
      this.getCalendarEvents(new Date(this.state.date));
    }
  }
  async getCalendarEvents(selectedDate) {
    // https://developers.google.com/calendar/quickstart/js#step_2_set_up_the_sample
    // https://developers.google.com/calendar/v3/reference/calendarList/list#php
    // https://developers.google.com/calendar/v3/reference/calendarList/get
    // https://reactjs.org/docs/state-and-lifecycle.html and/or https://reactjs.org/docs/faq-state.html?
    // https://www.npmjs.com/package/react-calendar
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
    // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674
    // https://stackoverflow.com/questions/7244246/generate-an-rfc-3339-timestamp-similar-to-google-tasks-api
    // https://stackoverflow.com/questions/7244246/generate-an-rfc-3339-timestamp-similar-to-google-tasks-api
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

    // Get dates
    let date = selectedDate.toDateString();

    let eventStartDate = new Date(selectedDate);
    eventStartDate.setHours(0,0,0,0); // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674

    let eventEndDate = new Date(selectedDate);
    eventEndDate.setDate(eventEndDate.getDate() + 1); // https://stackoverflow.com/questions/563406/add-days-to-javascript-date
    eventEndDate.setHours(0,0,0,0); // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674 

    // Get the sign in status
    let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

    // Get calendar events for the given day
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
    if (isSignedIn) {
      let calendars;
      try {
          // Step 1: Get all the calendars
          // https://developers.google.com/calendar/v3/reference/calendarList/list
          calendars = await this.props.googleAPIObj.client.calendar.calendarList.list();
          calendars = await this.getAllCalendars(calendars.result.items, eventStartDate, eventEndDate);
          // Step 2: Get all events for teh current days from each calendar
        } catch (error) {
          console.error(error);
        }
        
      const events = calendars.reduce((acc, calendar) => {
        acc.push(...calendar.result.items)
        return acc
      }, [])

      if(events) {
        let allEvents = events.map((event, i) => {
          return {
            title: event.summary,
            description: event.description,
            index: i,
          }
        });

        this.setState ({
          "date": date,
          events: allEvents,
          });
      }
    }
    else {
        this.setState({
          "date": date,
          events: []
        });
    }
  }

  async getAllCalendars(list, timeStart, timeEnd) {
    return Promise.all(list.map(calendar => {
      return this.props.googleAPIObj.client.calendar.events
      .list({
        "calendarId": calendar.id, 
        "timeMax": timeEnd.toISOString(), 
        "timeMin": timeStart.toISOString(),
      });
    }))
  }

  






  render() {
    // Sign in status
    let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

    // Create a placeholder item in case there are no events for the day
    let placeHolder = null;
    if (isSignedIn) {
        placeHolder = <div className="placeholder">No events for the day</div>
    } else {
        placeHolder = <div className="placeholder">Please Sign In</div>
    }

    // Get calendar events
    let calendarEvents = []
    this.state.events.forEach(event => {
        calendarEvents.push(
            <div className="calendar-event" key={event.index}>
                <div className="calendar-event-title">{event.title}</div>
                <p className="calendar-event-description">{event.description}</p>
            </div>
        )
    })



    return (
      <div className="calendar-board">
        <div className="calendar">
          <Calendar
                  onChange={this.getCalendarEvents}
                  defaultValue={new Date()}
          />
        </div>
        <div>
                    <div className="calendar-event-container">
                        <div className="date">
                            {this.state.date}
                        </div>
                        <div>
                            {(calendarEvents.length !== 0) ? calendarEvents : placeHolder}
                        </div>
                    </div>

        </div>
      </div>
    );
  }
}


export default CalendarBoard;
