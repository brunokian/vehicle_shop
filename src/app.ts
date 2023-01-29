import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/UserRoutes';

const app = express()

app.use(express.json())


app.use(routes)



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is running, ok? In port ${PORT}`);
    
})


const mongoDatabaseURI = process.env.MONGO_URI
|| 'mongodb://root:123456@localhost:27017/mongoTeste?authSource=admin'

mongoose.set('strictQuery', false);
mongoose.connect(mongoDatabaseURI)