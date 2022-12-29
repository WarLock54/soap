import React,{Component} from "react";
import {Modal,Button,Row,Col,Form} from "react-bootstrap";

export class EditDbModel extends Component{
    constructor(props){
super(props);
this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("https://localhost:7036/api/kullanıcı",{
            method:'PUT',
            headers:{
                'Accept':'application/json',    
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                kullanıcıId:event.target.kullanıcıId.value,
                kullanıcıName:event.target.kullanıcıName.value,
                arabaId:event.target.arabaId.value,
                otoparkId:event.target.otoparkId.value
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
                                                <Form.Group controlId="KullanıcıId">
                                                            <Form.Label>KullanıcıId</Form.Label>
                                                                <Form.Control type="text" name="kullanıcıId" required
                                                                disabled
                                                                defaultValue={this.props.kulId}
                                                                
                                                                placeholder="Kullanıcı Idsi" />                                                               
                                                    </Form.Group>
                                                    <Form.Group controlId="KullanıcıName">
                                                            <Form.Label>KullanıcıName</Form.Label>
                                                                <Form.Control type="text" name="kullanıcıName" required 
                                                                defaultValue={this.props.kulName}
                                                                placeholder="Kullanıcı Adı" />                                                               
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Button variant="primary" type="submit">
                                                            Düzenle Kullanıcı
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