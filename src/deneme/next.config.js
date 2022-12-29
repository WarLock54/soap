const { redirect } = require("react-router");

module.exports={
    trailingSlash: false,
    async headers(){
        return [
            {
                source:'/:path*',
                headers:[
                    {key:'Access-Control-Allow-Credentials',value:'true'},
                    {key:'Access-Control-Allow-Origin',value:'*'},
                    {key:'Access-Control-Allow-Methods',value:'GET,OPTINOS,PATCH,DELETE,POST,PUT'},
                    {key:'Access-Control-Allow-Headers',value:'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
                ],


            },

        ];

    },
    async redirects(){
        return [];
    }
}

// header('Access-Control-Allow-Credentials',value:'true'),
// header('Access-Control-Allow-Origin',value:'*')
// header('Access-Control-Allow-Methods',value:'GET,OPTINOS,PATCH,DELETE,POST,PUT'),
// header('Access-Control-Allow-Headers',value:'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' ),
              