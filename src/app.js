import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import routes
import postRoute from "./routes/postRoutes";
import routeUser from "./routes/userRoutes";
import routeComment from "./routes/commentRoute";
// 

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ['http://localhost:3000','http://localhost:5173']);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'APIs Documentation',
            version : '1.0.0'
        },
        
        servers :[{
            url: 'https://lastlast.onrender.com',
        }],
        security: [
            {
              BearerAuth: [],
            },
          ],
          components: {
            securitySchemes: {
              BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              },
            },
        }
    },
    apis : [`src/documenting/*.js`], //  Determining documentation file
}

const swaggerSpec = swaggerJSDoc(options)

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res) =>{
    return res.status(200).json({
        status:"Well Done",
        author:"AKIMANA",
        message:"Hello, My API is on Set",
    });
    });
// using created routes
app.use("/documenting/",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use("/api/post/",postRoute);
app.use("/api/users/",routeUser)
app.use("/api/commenting/",routeComment);

export default app;





