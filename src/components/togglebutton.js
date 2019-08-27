
 import React from 'react'


// STATE IS SIMILAR TO PROPS BUT IT IS PRIVATE AND FULLY CONTROLLED BY THE COMPONENT
class ToggleButton extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          mode: false
        }

        // Binding necessary to make 'this' work in the callback
        // https://reactjs.org/docs/handling-events.html explains in more detail why and what else can be done and why not to do it.
        this.toggleState = this.toggleState.bind(this)
    }

    toggleState = (event) => {
        event.preventDefault()
        // this doesn't work because you must use setState
        //this.state.mode = !this.state.mode
        this.setState(state => ({
            mode: !state.mode
        }))
    }
  
    render() {
      return (
        <div>
            <button onClick={this.toggleState}>
                state: {this.state.mode.toString()}
            </button>
        </div>
      ) 
    }
}

  export default ToggleButton

  // MISSTEPS:

   // THIS IS WRONG BECAUSE YOU'RE TRYING TO MODIFY PROPS!
  // THEY MUST BE PURE FUNCTIONS YOU JACKASS!
// function ChangeMode(props) {
//   props.mode = !props.mode
//   return <button>{props.mode}</button>
// }

// function ChangeMode(props) {
//   return (
//     <button>{props.mode}</button>
//   )
// }