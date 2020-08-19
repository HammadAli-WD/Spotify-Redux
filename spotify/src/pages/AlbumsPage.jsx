import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
//import AlbumJumbotron from "../components/AlbumJumbotron";
//import Gallery from "../components/Gallery";
import { connect } from "react-redux";
import {fetchData} from "../store/fetchData";
class AlbumsPage extends Component {
 /*  constructor(props) {
    super(props);
    // this.state = {
    //   albums: [],
    // };
  } */
  componentDidMount() {
    this.props.fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/",

      "album",
      true,
      "queen",
      0
    );
  }
  // fetchAlbums = async () => {
  //   let response = await fetch(
  //     `https://deezerdevs-deezer.p.rapidapi.com/search?q=queen`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
  //       },
  //     }
  //   );
  //   if (response.ok) {
  //     let albums = await response.json();
  //     this.setState({
  //       albums: albums.data,
  //     });
  //     console.log(this.state.albums);
  //   }
  // };

  render() {
    console.log('Information',this.props.albums)
    return (
      <Row>
       {this.props.albums && this.props.albums.map((album) =>
        <Col className='col-12 col-md-4 d-flex justify-content-end'>
       <Image
       src={album.cover_medium}
       alt="..."
       className="img-thumbnail p-0 border-0 rounded-0"
     />
     </Col>
       )}
       </Row>
        
      
    );
  }
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    fetchData: (endpoint, param, search, value, index, id) =>
      dispatch(fetchData(endpoint, param, search, value, index, id)),
  })
)(AlbumsPage);