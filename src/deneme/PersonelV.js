const sql=require("mssql/msnodesqlv8");

const conn=new sql.ConnectionPool({
    database:"soaproje",
    server:"localhost",
    driver:"msnodesqlv8",
    options:{
        trustServerCertificate:true,
        trustedConnection:true
    }
})
conn.connect().then(result=>{
    if(result.connecting){
        console.log('baglanıyor');
    }
    if(result.connected){
        console.log('bağlandı');
    }
})