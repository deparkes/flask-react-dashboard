var doctorData = [
  {
    "name": "Hannibal Lecter", 
    "rating": 5, 
    "description": "World famous psychiatrist",
    "profile_url": "#",
  },
  {
    "name": "Frasier Crane", 
    "rating": 4.7, 
    "description": "Radio personality and psychiatrist",
    "profile_url": "#",
  },
  {
    "name": "Doogie Howser", 
    "rating": 4.6, 
    "description": "Exceptional teenage physician",
    "profile_url": "#",
  },
  {
    "name": "Douglas Ross", 
    "rating": 4.5, 
    "description": "Renowned pediatric physician",
    "profile_url": "#",
  },
];

var DoctorSection = React.createClass({
  render: function() {
    return (
      <DoctorGrid gridData={this.props.doctorData} />
    );
  }
});

var DoctorGrid = React.createClass({
  render: function() {
    var doctorNodes = this.props.gridData.map(function(doctor) {
      return (
        <DoctorItem doctor={doctor} />
      );
    });

    return (
      <div className="doctorGrid">
        {doctorNodes}
      </div>
    );
  }
});

var DoctorItem = React.createClass({
  render: function() {
    return (
      <div className="col-sm-3 text-center">
        <div className="thumbnail">
          <img src="//placehold.it/800x500" />
          <div class="caption">
            <h3>{this.props.doctor.name}</h3>
            <p>{this.props.doctor.description}</p>
            <p>
              <a className="btn btn-primary" href="#">
                Schedule
              </a>
              <a className="btn btn-default" 
                href="#">
                See Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <DoctorSection doctorData={doctorData} />, 
  document.getElementById('featured_doctors')
);
