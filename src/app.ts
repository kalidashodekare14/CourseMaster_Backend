import express from 'express';
import cors from 'cors';
const app = express();
import { authRoutes } from './modules/auth/routes';


app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(express.json());



app.get('/', (req, res) => {
    res.send(`
        <div>
          <h1>CourseMaster Backend Running 🚀</h1>
            <p>🎉 Welcome to the CourseMaster</p>
        </div>    
    `)
})


app.use('/api/v1/auth', authRoutes);


export default app;

