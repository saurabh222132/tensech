const express = require("express");
const app = express();

const currencies = require("./data");

try {
  app.get("/currencies/*", (req, res) => {
    // console.log(req.originalUrl, typeof req.originalUrl);
    //Extracting the quried currencies from the req.
    //  Approach still to implement convert currency 1 to the USD and new multily the result with the
    //  Currency2 and that will be your result

    let urlString = req.originalUrl;

    let currency1 = urlString.split("/")[2];

    let curr1InUsd = 1 / currencies.currencies[currency1];
    console.log(curr1InUsd);

    let currency2 = urlString.split("/")[3].split(".")[0];
    let curr1incurr2 = currencies.currencies[currency2] * curr1InUsd;
    console.log("curr1 IN currency 2 ", curr1incurr2);

    res.status(200).json({
      date: "apply this later",
      [currency2]: curr1incurr2,
    });
  });
} catch (err) {
  console.log(err);
}

app.listen(4000, () => {
  console.log("server is started on port 4000");
});
