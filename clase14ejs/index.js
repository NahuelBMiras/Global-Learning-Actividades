import express from 'express';
import http from 'node:http';

const PORT = process.env.PORT || 3000;
const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'public/views');
app.use('/static', express.static('public'));

app.get('/', (_req, res) => {
  res.render('login');
});

app.use((req, res, next) => {
  res.status(404).render('404', { url: req.originalUrl });
  next();
});

httpServer.listen(PORT, () => {
  console.log(`Escuchando en PORT: ${PORT}`);
  console.log(`Ir a la ruta mediante: http://localhost:3000`);
});
