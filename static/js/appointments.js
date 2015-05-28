var appointmentData = [
  {
    "created_at": "2015-04-21T10:44:51-06:00", 
    "end": "2015-04-24T07:30:00-06:00", 
    "id": 695, 
    "patient_id": 16, 
    "physician_id": 14, 
    "start": "2015:04-24T07:00:00-06:00", 
    "updated_at": "2015:04-21T10:44:51-06:00", 
    "patient_name": "Mike Ross", 
    "physician_name": "Gregory House"
  }, 
  {
    "created_at": "2015-04-21T12:40:51-06:00", 
    "end": "2015-04-30T10:30:00-06:00", 
    "id": 696, 
    "patient_id": 16, 
    "physician_id": 15, 
    "start": "2015:04-30T10:00:00-06:00", 
    "updated_at": "2015:04-21T11:44:51-06:00", 
    "patient_name": "Mike Ross", 
    "physician_name": "James Wilson"
  } 
];

var AppointmentSection = React.createClass({
  render: function() {
    return (
      <div className="appointmentSection">
        <h2>Upcoming Appointments</h2>

        <AppointmentList listData={this.props.appointmentData} />
      </div>
    );
  }
});

var AppointmentList = React.createClass({
  render: function() {
    var appointmentNodes = this.props.listData.map(function(appointment) {
      return (
        <AppointmentItem appointment={appointment} />
      );
    });

    return (
      <div className="appointmentList">
        {appointmentNodes}
      </div>
    );
  }
});
  
var AppointmentItem = React.createClass({
  render: function() {
    return (
      <div className="alert alert-info">
        <h3>
          <a href="#"> 
            {this.props.appointment.physician_name}
          </a>
        </h3>
        <p>
          <strong>Start:</strong> {this.props.appointment.start}
        </p>
        <p>
          <strong>End:</strong> {this.props.appointment.end}
        </p>
      </div>
    );
  }
});

React.render(
  <AppointmentSection appointmentData={appointmentData} />, 
  document.getElementById('appointment')
);
