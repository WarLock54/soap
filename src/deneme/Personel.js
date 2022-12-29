
import { useEffect, useState }  from "react";
import { Alert, Button,Modal } from "react-bootstrap";
import axios from "axios";

//en son olmaz bu parantez içine tcno name soyad yaş  ı index js in içindeki parantez içine koyup dene.

const Personel=()=>{
 
    const [Data,SetData]=useState([]);
//goruntüle amaçlı
    const [RowData,SetRowData]=useState([]);
    const [ViewShow,SetViewShow]=useState(false);
    const handleviewShow=()=>SetViewShow(true);
    const handleviewClose=()=>SetViewShow(false);
     //düzenleme amaçlı
     const [EditShow,SetEditShow]=useState(false);
     const handleEditShow=()=>SetEditShow(true);
     const handleEditClose=()=>SetEditShow(false);
      //silme amaçlı
      const [DeleteShow,SetDeleteShow]=useState(false);
      const handleDeleteShow=()=>SetDeleteShow(true);
      const handleDeleteClose=()=>SetDeleteShow(false);
        //ekleme amaçlı
        const [PostShow,SetPostShow]=useState(false);
        const handlePostShow=()=>SetPostShow(true);
        const handlePostClose=()=>SetPostShow(false);


        const [name,SetName]=useState("");
        const[yaş,setYaş]=useState("");
        const[pass,setPass]=useState("");
        const [Id,setId]=useState("");

        //otopark için sonradan ekleme amaçlııııı
        const [OtoparkId,setOtoparkId]=useState("");
        //const [otoparkName,setOtoparkName]=useState("");
        const [Delete,setDelete]=useState(false);

const GetPersonelData=()=>{
    const url=`https://localhost:7036/api/kullanıcı`
    //https://localhost:7036/api/personel
        axios.get(url).then(response=>
            {
              
                const result=response.data;
                
                console.log(response);
                SetData(response);

                const {status,message,data}=result;
               
                if(status!=='SUCCESS'){
                    alert(message,status);

                }else{
                    
                  //  SetData(data);
                     //   console.log(data);
                }
            }
            
            ).catch(err=>{
                console.log(err);
            })
            

}
/*
const GetOtoparkData=()=>{
    const url="";
        axios.get(url).then(response=> 
           {
            const result=response.data;
            const {status,message,data}=result;
            if(status!=="SUCCESS"){
                    alert(message.data);
            }
            else{
                // burada ayrı bir useState yapısı oluşturmayı deneyebilrsin...
                SetData(data);
                console.log(data);
            }
           }
        ).catch(err=>{console.log(err)})
}

const handleSubmitOtopark=()=>{
     const bilgileroto={otoparkId,otoparkName};

    const url="";
        axios.post(url,bilgileroto).then(response=>{

            const result=response.data;
            const {status,message,data}=result;
            if(status!=="SUCCESS"){
                alert(message,status);

            }else{
                alert(message);
                window.location.reload();
                console.log(data);
            }
        }).catch(err=>{
            console.log(err);
        })
}
*/

const handleSubmit=()=>{

    const bilgiler={name,yaş,pass,OtoparkId};


    const url="https://localhost:7036/api/kullanıcı";
    //https://localhost:7036/api/personel
        axios.post(url,bilgiler).then(response=>
            {
              
                
                const result=response.data;
               
                const {status,message,data}=result;
             
                if(status!=='SUCCESS'){
                    alert(message,status);

                }else{
                            alert(message);
                            window.location.reload();
                        console.log(data);
                }
            }
            
            ).catch(err=>{
                console.log(err);
            })
            
}
const handleEdit=()=>{
    const bilgiler={name,yaş,pass,OtoparkId};


    const url="https://localhost:7036/api/kullanıcı${Id}";
    //https://localhost:7036/api/personel/${id}
        axios.put(url,bilgiler).then(response=>
            {
                const result=response.data;
                const {status,message,data}=result;
                if(status!=='SUCCESS'){
                    alert(message,status);

                }else{
                            alert(message);
                            window.location.reload();
                        
                }
            }
            
            ).catch(err=>{
                console.log(err);
            })

}
const handleDelete=()=>{
    const url="https://localhost:7036/api/kullanıcı${Id}";
    //https://localhost:7036/api/personel/${id}
        axios.delete(url).then(response=>
            {
                const result=response.data;
                const {status,message,data}=result;
                if(status!=='SUCCESS'){
                    alert(message,status);

                }else{
                            alert(message);
                            window.location.reload();
                        console.log(data);
                }
            }
            
            ).catch(err=>{
                console.log(err);
            }
            );
          
}
useEffect(()=>{
    GetPersonelData();
},[]);
return (
    <div>
        <div className="row">
            <div className="mt-5 mb-4">
                <Button variant="primary" onClick={()=>{handlePostShow()}}><i className="fa fa-plu">Ekle Personel</i></Button>
            </div>
        </div>
        <div className="row">
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            {/* <th>Otopark alanın ismi veya id bilgisini girebiliriz. </th> */}
                            <th>PersonelId</th>
                            <th>PersonelName</th>
                            <th>PersonelYaş</th>
                            <th>PersonelPass</th>
                            <th>OtoparkId</th>
                        </tr>
                    </thead>
                                <tbody>
                                    {/* {Data.map(item=>
                                        <tr key={item.otoparkId}>
                                            <td>{otopark bilgileri }</td>
                                        </tr>)} */}
                                        {}
                                    {Object.values(Data).map((item,index)=>
                                    <tr key={index}>
                                        <td>{Object.values(Data).PersonelId}</td>
                                        <td>{Object.values(Data).PersonelName}</td>
                                        <td>{Object.values(Data).PersonelYaş}</td>
                                        <td>{Object.values(Data).PersonelPass}</td>
                                        <td>{Object.values(Data).OtoparkId}</td>         
                                        <td style={{minWidth:100}}>
                                    <Button size="sm" variant="primary" onClick={()=>{handleviewShow(SetRowData(item))}}>VİEW</Button> 
                                    <Button size="sm" variant="warning"  onClick={()=>{handleEditShow(SetRowData(item),setId(item.kullanıcıId))}}>EDİT</Button>
                                    <Button size="sm" variant="danger" onClick={()=>{handleviewShow(SetRowData(item),setId(item.kullanıcıId),setDelete(true))}}>DELETE</Button>
                                    </td>
                                    </tr>
                                  
                                    )}
                                </tbody>
                </table>
            </div>
        </div>
        <div className="model-box-view">
            <Modal
            show={ViewShow}
            onHide={handleviewClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Goruntüle Personel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={RowData.PersonelName} readOnly/>
                        </div>
                        <div className="form-group mt-6">
                            <input type="text" className="form-control" value={RowData.PersonelYaş} readOnly/>
                        </div>
                        <div className="form-group mt-6">
                            <input type="text" className="form-control" value={RowData.PersonelPass} readOnly/>
                        </div>
                        <div className="form-group mt-6">
                            <input type="text" className="form-control" value={RowData.OtoparkId} readOnly/>
                        </div>
                        {
                            Delete&&(
                                <Button  type="submit" className="btn btn-danger  mt-4" onClick={handleDelete}>Sil Personel</Button>
                            )
                        }
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handleviewClose}>Kapat</Button>
                    </Modal.Footer>
            </Modal>
        </div>

        
        <div className="model-box-view">
            <Modal
            show={PostShow}
            onHide={handlePostClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ekle Personel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={RowData.PersonelName}  onChange={e=>SetName(e.target.value)} placeholder="isim giriniz" />
                        </div>
                        <div className="form-group mt-6">
                            <input type="text" className="form-control" value={RowData.PersonelYaş} onChange={e=>setYaş(e.target.value)} placeholder="Yaş giriniz" />
                        </div>
                        <div className="form-group mt-6">
                            <input type="text" className="form-control" value={RowData.PersonelPass} onChange={e=>setPass(e.target.value)} placeholder="Şifre giriniz" />
                        </div>
                        <div className="form-group mt-6">
                            <input type="text" className="form-control" value={RowData.OtoparkId} onChange={e=>setOtoparkId(e.target.value)} placeholder="OtoparkId giriniz" />
                        </div>
                    </div>
                                            <Button type="submit" className="btn btn-success mt-4" onClick={handleSubmit} >Personel Ekle</Button>
                   
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handlePostClose}>Kapat</Button>
                    </Modal.Footer>
                                        
            </Modal>
        </div>
        <div className="model-box-view">
            <Modal
            show={EditShow}
            onHide={handleEditClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Düzenle Personel</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                        <div>
                                <div className="form-group">
                                       <label>İsim</label>
                                                     <input type="text" className="form-control" value={RowData.PersonelName} onChange={e=>SetName(e.target.value)} placeholder="İsim giriniz" defaultValue={RowData.name} />
             </div>
                        <div className="form-group mt-6">
                        <label>Yaş</label>
                            <input type="text" className="form-control" value={RowData.PersonelYaş} onChange={e=>setYaş(e.target.value)} placeholder="Yaş giriniz" defaultValue={RowData.yaş}/>
                        </div>
                        <div className="form-group mt-6">
                            <label>Password</label>
                               <input type="text" className="form-control" value={RowData.PersonelPass} onChange={e=>setPass(e.target.value)} placeholder="Şifre giriniz" defaultValue={RowData.pass} />
                           </div>
                           <div className="form-group mt-6">
                            <label>OtoparkId</label>
                               <input type="text" className="form-control" value={RowData.OtoparkId} onChange={e=>setOtoparkId(e.target.value)} placeholder="OtoparkId giriniz" defaultValue={RowData.pass} />
                           </div>
                    </div>
                    <Button type="submit" className="btn btn-success mt-4" onClick={handleEdit} >Personel Ekle</Button>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handleEditClose}>Düzenle</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    </div>
)
}
export default Personel;

{/* /*<tr key={item.personelId}>
                                            <td>{item.PersonelName}</td>
                                            <td>{item.PersonelYaş}</td>
                                            <td>{item.PersonelPass}</td>
                                            <td style={{minWidth:190}}></td>
                                            <Button size="sm" variant="primary">VİEW</Button> 
                                            <Button size="sm" variant="warning">EDİT</Button>
                                            <Button size="sm" variant="danger">DELETE</Button>
                                        </tr>  */}