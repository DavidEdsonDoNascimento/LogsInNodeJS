import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import logger from './logger';

const app = express();

app.use(
  bodyParser.json(),
  cors({ credentials: true }),
);

app
.get('/heartbeat', (req, res) => res.status(200).json({
  heartbeat: true,
  meudeus: 'nao é que funciona',
}))
.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  try {
    
    logger.info({
      endpoint: '/login',
      msg: `tentativa de login efetuada ${email} ${password}`,
      status: 'success'
    });
    return res.status(200).json({ teste: 'foi ${' });

  } catch (err) {

    logger.info(`tentativa falha de login efetuada ${email} ${password}`);
    return res.status(404).json({ teste: 'erro' })
  }
})

app.listen(4200);
