import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  getServices,
  addService,
  deleteService,
  putService,
} from "../../actions/service_actions";
import ServiceCards from "../AddServices/ServiceCard";
import AddService from "../AddServices/AddService";
import Loading from "./new";
import './tyle.css'

class AddPage extends Component {
  state = {
    title: "",
    description: "",
    service_Provider: "",
    phone_number: "",
    edit: false,
    id: "",
    loading: true,
  };

  getSer = (service) => {
    this.setState({
      title: service.title,
      description: service.description,
      service_Provider: service.service_Provider,
      phone_number: service.phone_number,
      id: service._id,
      edit: true,
    });
  };

  addSer = () => {
    this.reset();
    this.props.addService(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount = () => {
    this.props.getServices();
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };
  reset = () => {
    this.setState({
      title: "",
      description: "",
      service_Provider: "",
      phone_number: "",
      edit: false,
      id: "",
    });
  };

  putSer = () => {
    this.reset();
    this.props.putService(this.state.id, this.state);
  };
  render() {
    if (this.state.loading) {
      // window.location.reload(true);
      return <Loading loading={true} />;
    }
    return (
      // <BrowserRouter>
      <div>
        <div>
          <center>
            <Link to="/service-list">
              {" "}
              <button>services list</button>
            </Link>
            <Link to="/add-service">
              <button>add Service</button>
            </Link>
          </center>
        </div>
        <Link to='/les-services'>
        <button className='get-btn'
          onClick={() => {
            this.props.getServices();
            this.props.services.services.services.map((service) => ( 
              <div key={service._id}> 
                <ServiceCards
                  servicee={service}
                  delete={this.props.deleteService}
                  getSer={this.getSer}
                />
              </div>
            ));
          }}
        >
          getService
        </button></Link>

        <Route
          path="/(add-service|edit-service)"
          render={() => (
            <AddService
              handleChange={this.handleChange}
              service={this.state}
              handleAction={this.state.edit ? this.putSer : this.addSer}
            />
          )}
        />
      </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  services: state.services,
});
export default connect(mapStateToProps, {
  getServices,
  addService,
  deleteService,
  putService,
})(AddPage);
