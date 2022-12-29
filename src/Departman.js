import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import {Table} from "react-bootstrap"
import { Button,ButtonToolbar } from "react-bootstrap";

import {EditDbModel} from "./EditDbModel";
import {AddDbModel} from "./AddDbModel";
export class Departman extends Component{

  constructor(props){
    super(props);
    this.state={deps:[],addModalShow:false,editModalShow:false}

  }
  refreshList(){
    fetch("https://localhost:7036/api/kullanıcı")
    .then(response=>response.json())
    .then(data=>{
      this.setState({deps:data});
    })
  }
  componentDidMount(){
    this.refreshList();
  }
  componentDidUpdate(){
    this.refreshList();
  }
  deleteKul(kullanıcıId){
    if(window.confirm("Are u sure ")){
      fetch("https://localhost:7036/api/kullanıcı"+kullanıcıId,{
        method:'delete',
        header:{
          "Accept":"appilication.json",
          'Content-Type:':'application/json'
        }
      })
    }
  }
//fetch(process.env.REACT_APP_API+"personels/"+personelId,{
    render(){
      const {deps,kulName,kulId,arabaId,otoparkId}=this.state;
      let addModalClose=()=> this.setState({addModalShow:false});
      let editModalClose=()=> this.setState({editModalShow:false});
        return (
          <div>
          
          <Table className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr>
              <th>KullanıcıId</th>
              <th>KullanıcıName</th>
              <th>KullanıcıMail</th>
              <th>KullanıcıPassword</th>
              </tr>

            </thead>
            <tbody>
              {deps.map(kullanıcı=>
              <tr key={kullanıcı.kullanıcıId}>
 <td>
                {kullanıcı.kullanıcıName}
              </td>
              <td>
                {kullanıcı.arabaId}
              </td>
              <td>
                {kullanıcı.otoparkId}
              </td>
              <td>
          <ButtonToolbar> 
                <Button className="mr-2 " variant="info" onClick={()=>this.setState({editModalShow:true,
                  kulId:kullanıcı.kullanıcıId,
                  kulName:kullanıcı.kullanıcıName,
                  arabaId:kullanıcı.arabaId,
                  otoparkId:kullanıcı.otoparkId
                  })}>
                  Düzenle
                </Button>
                <Button className="mr-2 " variant="danger" onClick={()=>this.deleteKul(kullanıcı.personelId)}>
                  Silme
                </Button>
<EditDbModel show={this.state.editModalShow} 
onHide={editModalClose}
kulId={kulId}
                kulName={kulName}
                arabaId={arabaId}
                otoparkId={otoparkId}

                /> 
          </ButtonToolbar>
              </td>

              </tr>
             
              )}
            </tbody>
          </Table>
          <ButtonToolbar>
            <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
              Ekle Kullanıcı
            </Button>

                  <AddDbModel show={this.state.addModalShow} onHide={addModalClose} />

          </ButtonToolbar>
          </div>
        )
    };
}

