import React,{Component} from "react";
import {Modal,Button,Row,Col,Form} from "react-bootstrap";

export class AddDbModel extends Component{
    constructor(props){
super(props);
this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("https://localhost:7036/api/kullanıcı",{
            method:'POST',
            headers:{
                'Accept':'application/json',    
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                kullanıcıId:null,
                KullanıcıName:event.target.kullanıcıName.value
            })
        })
        .then(res=>res.json())
        .then(result=>{
            alert(result)
        }),(error)=>{
            alert('failed');
        }
    }

    render(){
        return(
            <div className="container">

<Modal
                {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header  closeButton>
                                <Modal.Title id="contained modal-title-vcenter">
                                    add Kulllanıcı
                                </Modal.Title>
                            </Modal.Header> 
                            <Modal.Body>
                                <Row>
                                        <Col sm={6}>
                                                <Form onSubmit={this.handleSubmit}>
                                                    <Form.Group controlId="KullanıcıName">
                                                            <Form.Label>KullanıcıName</Form.Label>
                                                                <Form.Control type="text" name="kullanıcıName" required placeholder="Kullanıcı Adı" />                                                               
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Button variant="primary" type="submit">
                                                            Ekle Kullanıcı
                                                        </Button>
                                                    </Form.Group>
                                                </Form>
                                        </Col>

                                </Row>
                            </Modal.Body>

                                            <Modal.Footer>
                                                <Button variant="danger" onClick={this.props.onHide}>Kapat</Button>
                                            </Modal.Footer>

            </Modal>


            </div>
            
            
        )
        
    }
}
