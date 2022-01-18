import React, { useState, setShow, Component } from "react";
import {
  CardDeck,
  Navbar,
  NavLink,
  Col,
  Row,
  Image,
  Container,
  Card,
  CardImg,
  CardBody,
  CardText,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../App.css";
import ItemModal from "./ItemModal.js";

class Header extends Component {
  render() {
    return (
      <div>
        <h1> &nbsp;</h1>
        <h1> &nbsp;</h1>
        <h1> &nbsp;</h1>
        <h3 style={{ textAlign: "center", fontFamily: "MyFont2" }}>ARTISTAS</h3>
        {"\n"}
        <br />
      </div>
    );
  }
}

class ArtistsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [
        {
          id: 1,
          name: "Mare Advertencia Lirika",
          img: require("../assets/images/artists-01.jpg"),
          content:
            "Mare Advertencia Lirika es una cantante mexicana de rap, activista social y feminista, de origen zapoteca. A través del rap y otros ritmos musicales hace protesta social. Sus versos hablan sobre temas de género, derechos de los Pueblos Originarios y la situación política y social de México.",
          showModal: false,
          linkfb: "https://www.facebook.com/mare.advertencia.lirika.official",
          linkig: "https://www.instagram.com/mare.advertencia.lirika",
          linksp:
            "https://open.spotify.com/artist/3QVB7ctBlqEFuQZeMDt6Qh?si=Z1P8yQtlSca54tr9DXsf1Qh",
          spotify:
            "https://open.spotify.com/embed/artist/3QVB7ctBlqEFuQZeMDt6Qh",
        },
        {
          id: 2,
          name: "Tayhana",
          img: require("../assets/images/artists-06.jpg"),
          content:
            "TAYHANA productora y DJ argentina, se ha establecido como una de las fuerzas musicales mas importantes de los dancefloors de centro y Sudamerica. Su energía explosiva y la vasta selección de tracks para el club, junto con una colección extensiva de hits regionales la hacen una de las favoritas de los DJs y de los que asisten a los clubs.",
          showModal: false,
          linkfb: "https://www.facebook.com/tayhanahh/",
          linkig: "https://www.instagram.com/tayhana_",
          linksp:
            "https://open.spotify.com/artist/647u1oTQ3MgB1k4FwVrPfg?si=tv5u2NyOTp-vy2VsVj6klw",
          spotify:
            "https://open.spotify.com/embed/artist/647u1oTQ3MgB1k4FwVrPfg",
        },
        {
          id: 3,
          name: "Ali Gua Gua",
          img: require("../assets/images/artists-02.jpg"),
          content:
            'Ali "Gua Gua" o con el nombre de pila de Ali Gardoqui de la Reguera o Dj Guaguis es una cantante, compositora, productora, baterista y guitarrista nacida en el año 1974 originaria de Veracruz, México. Se ha desenvuelto interpretando varios géneros como el rock, el punk, el hip hop y la cumbia. Es reconocida por haber sido guitarrista de la banda mexicana Las Ultrasónicas',
          showModal: false,
          linkfb: "https://www.facebook.com/aligardoki/",
          linkig: "https://www.instagram.com/ali_gua_gua/",
          linksp:
            "https://open.spotify.com/artist/1wA3nwZy9EriceVVQlEmEx?si=aqVF9wB8RRiRiGJY_eq20g",
          spotify:
            "https://open.spotify.com/embed/artist/1wA3nwZy9EriceVVQlEmEx",
        },
        {
          id: 4,
          name: "Badsista",
          img: require("../assets/images/artists-03.jpg"),
          showModal: false,
          content:
            "Badsista de São Paulo tiene algo con los sonidos de club aventureros. La artista y DJ brasileña fusiona baile funk, jackin house, techno y más en sus sets y producciones, con un alcance tan vanguardista que es simplemente muy divertido.",
          linkfb: "https://www.facebook.com/badsistaoficial/",
          linkig: "https://www.instagram.com/badsista_/",
          linksp:
            "https://open.spotify.com/artist/1wA3nwZy9EriceVVQlEmEx?si=aqVF9wB8RRiRiGJY_eq20g",
          spotify:
            "https://open.spotify.com/embed/artist/0KdLlx7p42yA7aftp3dgpb",
        },
        {
          id: 5,
          name: "F5 / Lechuga Zafiro",
          img: require("../assets/images/artists-04.jpg"),
          showModal: false,
          content:
            "Lechuga Zafiro junto con Mathias, Wellington y Guillermo Díaz de Cuareim 1080 crearon F5, un grupo que se define como “más que electrocandombe”, uniendo en vivo los dos elementos y proponiendo algo nuevo dentro del árbol familiar del género.",
          linkfb: "https://www.facebook.com/zafirolechuga/",
          linkig: "https://www.instagram.com/lechugazafiro/",
          linksp:
            "https://open.spotify.com/artist/49gMgZNZkHOkwWkFHQDkgK?si=OacMXCzPRemPJ1a-EPqqcA",
          spotify:
            "https://open.spotify.com/embed/artist/49gMgZNZkHOkwWkFHQDkgK",
        },
        {
          id: 6,
          name: "Malka",
          img: require("../assets/images/artists-05.jpg"),
          showModal: false,
          content:
            "Malka es una artista brasileña cuyo instrumento principal es la viola, misma con la que explora y extiende los limites de los territorios de multiples géneros musicales",
          linkfb: "https://www.facebook.com/malka.travabizness/",
          linkig: "https://www.instagram.com/malkajulieta.b/",
          linksp:
            "https://soundcloud.com/mamba-negra-9/malka-rayna-livedj-set?fbclid=IwAR1G9Zt5RfEgDdhGbWSiCHQ8qTx-WmlxcDUfmFfSpsDzh5ERUP08J7B4xss",
          spotify:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/693833944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
      ],
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleModalHide() {
    return () => {
      let { artists } = this.state;
      artists = artists.map((item) => ({
        ...item,
        showModal: false,
      }));
      this.setState({ artists });
    };
  }

  handleModalShow() {
    return (e) => {
      e.preventDefault();

      this.setState({ showModal: true });
    };
  }

  handleEditItem(selectedItem) {
    return (e) => {
      e.preventDefault();
      let { artists } = this.state;
      artists = artists.map((item) => ({
        ...item,
        showModal: selectedItem.id === item.id,
      }));
      this.setState({ artists });
    };
  }

  handleItemChange(itemId) {
    return (e) => {
      let { artists } = this.state;
      artists = artists.map((item) => {
        if (item.id === itemId) {
          item[e.target.name] = e.target.value;
        }
        return item;
      });
      this.setState({ artists });
    };
  }

  render() {
    const { artists } = this.state;
    return (
      <div>
        <Header />
        <Container className="container">
          <Row className="row">
            <Col>
              {artists.map((item, index) => (
                <Card
                  className="col-xs-12 col-sm-6 float-left cartas"
                  style={{ width: "auto", border: "none" }}
                  key={index}
                >
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Button
                      className="nombres"
                      style={{ fontSize: "1.5rem", fontFamily: "MyFont" }}
                      variant="light"
                      onClick={this.handleEditItem(item)}
                    >
                      {item.name}
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>

        {artists.map((item, index) => (
          <ItemModal
            key={item.id}
            show={item.showModal}
            onHide={this.handleModalHide()}
            onItemChange={this.handleItemChange}
            item={item}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
          />
        ))}
      </div>
    );
  }
}

export default ArtistsPage;
