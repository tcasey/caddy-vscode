const express = require('express');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("Hello World!");
});
app.use((err, req, res, next) => {
  res.status(500).send("Something broke! 🙈");
});

app.listen(3000, () => {
  console.log('Listening on port 3000! 🙉');
});