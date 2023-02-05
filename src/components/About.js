import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componenetDidMount() {
    //Best place to make api call
  }
  render() {
    return (
      <div>
        <h1>About us page</h1>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
+ *
+ * Parent Constructor
+ * Parent render
+ *    First Child constructor
+ *    First Child render
+ *    Second Child constructor
+ *    Second Child render
+ *
+ *    DOM UPDATED for children
+ *
+ *    first Child componentDidMount
+ *    Second Child componentDid
+ *  Parent componentDidMount
+ *
+ *
+ */
