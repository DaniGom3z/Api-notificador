import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { db } from './shared/database/application/connection';
import { index } from './shared';

config();

const app = express();

app.use(cors());
app.use(express.json());

app.set('PORT', 6000);

app.listen(app.get('PORT'), ()=>{
    console.log(`Api corriendo exitosamente`);
});

app.use(index);

db.connect()
.then(()=> {
    console.log("Conexion exitosa a la base de datos");
})
.catch((error) => {
    console.log(error);
})