// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENTS

// MATERIAL UI
import { 
  // Card, CardContent, 
  // Typography, 
  // Fab 
} from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";

// import {} from '';

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const MapContainer = styled.div``;

class Map extends Component {
  render() {
    return (
      <MapContainer>
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.18927755166!2d-95.68147594121581!3d29.816882404300124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C+TX!5e0!3m2!1sen!2sus!4v1556278642772!5m2!1sen!2sus"
          }
          height={500}
          width={500}
        />
      </MapContainer>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(Map);
