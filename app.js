const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');

const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


let newItems = []; 

app.get('/', (req, res) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date();

  let currentDate = today.toLocaleDateString("en-US", options);
  // let isChecked = req.session.isChecked || []; 
  res.render("list", { showDate: currentDate, newListItem: newItems}); 
});


app.post('/', (req, res) => {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect('/');
});

app.listen(3000, () => console.log("port is running at 3000"));
