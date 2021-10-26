import React, { Component } from 'react';

class Accolades extends Component {
  render() {

    if(this.props.data){
      var Accolades = this.props.data.Accolades.map(function(Accolades){
        return  <li key={Accolades.user}>
            <blockquote>
               <p>{Accolades.text}</p>
               <cite>{Accolades.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="Accolades">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Accolades</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Accolades}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Accolades;
