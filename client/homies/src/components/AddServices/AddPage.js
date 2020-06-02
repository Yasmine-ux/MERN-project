import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  getServices,
  addService,
  deleteService,
  putService,
} from "../../actions/service_actions";
import ServiceCard from "../AddServices/ServiceCard";
import AddService from "../AddServices/AddService";
import Loading from "./new";

class AddPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      service_Provider: "",
      phone_number: "",
      edit: false,
      id: "",
      loading:true
    };
  }
  

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
    },3000);
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
  render() 
  
  {
    if (this.state.loading) {
      // window.location.reload(true);
      return <Loading loading={true} />;}
    return (
      // <BrowserRouter>
      <div>
        {this.props.props.map(el=><div>{el.title}</div>)
                /* <div>
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
        <Route
          path="/service-list"
          render={() => (
            <div>
              {this.props.service.map((service) => (
                <div key={service._id}>
                  <ServiceCard
                    service={service}
                    delete={this.props.deleteService}
                    getSer={this.getSer}
                  />
                </div>
              ))}
            </div>
          )}
        />
        <Route
          path="/(add-service|edit-service)"
          render={() => (
            <AddService
              handleChange={this.handleChange}
              service={this.state}
              handleAction={this.state.edit ? this.putSer : this.addSer}
            />
          )}
        /> */}
      {/* // </BrowserRouter> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  service: state.services.services
});
export default connect(mapStateToProps, {
  getServices,
  addService,
  deleteService,
  putService,
})(AddPage);