import express from 'express';
import { queryDelay } from './middleware/applicationDelay.js';
import { requestHistory } from './middleware/requestHistory.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'public/views');
app.use('/static', express.static('public'));

app.get('/', (_req, res) => {
  res.status(200).render('login');
});

app.use((req, res, next) => {
  res.status(404).render('404', { url: req.originalUrl });
  next();
});

app.use(queryDelay);
app.use(requestHistory);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
  console.log(`Ir a la ruta mediante: http://localhost:${PORT}`);
});
