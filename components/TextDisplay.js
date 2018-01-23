import React , { Component } from 'react'

class TextDisplay extends Component {

  clickDelete (){
    this.props.deleteLetter()
  }

  render(){
    return (
              <div>
                I'm displaying the text from my parent : {this.props.text}
                <br/>
                <button onClick = {this.clickDelete.bind(this)}>delete a Letter</button>
              </div>
            )
  }



}


export default TextDisplay
