function(someone, ellipsis) {
  const fetch = require("fetch");
const url = "http://quandyfactory.com/insult/json";
const exclamations = [
  "Bless the mark",
  "Alas",
  "Fie on thee",
  "Hark",
  "Nay",
  "How now"
];

const exclamation = exclamations[Math.floor(Math.random() * exclamations.length)];

fetch.fetchUrl(url, {}, (error, meta, body) => {
  if (error) {
    ellipsis.error(error);
  } else if (meta.status == 200) {
    ellipsis.success({
      exclamation: exclamation,
      insult: JSON.parse(body.toString()).insult || "a pox on you"
    }); 
  } else {
    ellipsis.error("Error: " + body.toString()); 
  }
});
}
