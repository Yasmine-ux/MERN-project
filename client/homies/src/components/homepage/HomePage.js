import React, {Component} from "react";
import './style.css'
// import ServiceCard from "../HomePageCards/HomePageCards";
import ServicesSection from "../HomePageCards/SecondSection";
import ThirdSection from "../3rdSection/thirdSection";
import Section4 from "../4thSection/Section4";
class HomePage  extends Component  {
    constructor (props) {
        super(props)
        this.state = {
          username: ''
        }
      }
    
      handleSearch (e) {
        this.setState({ username: e.target.value })
      }
    
      handleGoClick () {
        if (!this.props.github.isFetchingUser) {
          this.props.actions.fetchUser(this.state)
        }
      }
      render () {
  return (
    <div>
    <div className='search'>
      <form onSubmit={e => e.preventDefault()} className="search-form">
          {/* <input className="form__field"
            type='text'
            size='45'
            placeholder='Service Type'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} /> */}
            <input className="form__field"
            type='text'
            size='45'
            placeholder='Service name'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
          <button 
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
    </div>
    <ServicesSection/>
    <ThirdSection/>
    <Section4/>
    </div>
  );
}}
export default HomePage