import React from "react"
// import { connect } from "react-redux"

class Nomatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div className="no-page"> 404 </div>
  }
}

// function mapStateToProps(state) {
//   return state
// }
// export default connect(mapStateToProps)(Nomatch)
export default Nomatch