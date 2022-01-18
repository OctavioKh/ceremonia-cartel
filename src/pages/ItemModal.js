import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

const ItemModal = ({ item, onItemChange, ...rest }) => (
  <Modal {...rest} className="cuerpo" /* bsSize="large" */>
    <Modal.Header   className="d-block"  closeButton>
      <Modal.Title style={{textAlign:"center", fontWeight: '300',
    fontFamily: "MyFont2"}} className="text-center"  /* id="contained-modal-title-lg" */>{item.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="row"> <div class="col-md-6">
   <Image fluid rounded onChange={onItemChange(item.id)} src={item.img}/> 
</div>
        <div class="col-md-6">
        
            <p onChange={onItemChange(item.id)}>{'\n'}{item.content}</p>
            <iframe onChange={onItemChange(item.id)} className="text-center spoti-player" style={{ display: "block", margin: "0 auto"}} src={item.spotify} 
             height="180"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<br />
{item.info}

          </div>

    </Modal.Body>
    <Modal.Footer>
    <Button style={{ display: "block", margin: "0 auto"}} variant="light" onChange={onItemChange(item.id)} 
    href={item.linkfb} target="_blank"> Bandcamp </Button>
    <Button style={{ display: "block", margin: "0 auto"}} variant="light" onChange={onItemChange(item.id)} 
    href={item.linkig} target="_blank"> Apple Music </Button>
    <Button style={{ display: "block", margin: "0 auto"}} variant="light" onChange={onItemChange(item.id)} 
    href={item.linksp} target="_blank"> Spotify </Button>

          {/* <Button closeButton>
            Close
             </Button> */}
        </Modal.Footer>
    
  </Modal>
);

export default ItemModal;
