const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("./models/associations");

const clientRoutes = require("./routes/clientRoutes");
//const professionalRoutes = require("./routes/professionalRoutes");
//const appointmentRoutes = require("./routes/appointmentRoutes")

//const Professional = require("./models/professionals");
//const Appointment = require("./models/appointments");
const Client = require("./models/clients");

app.use("/clients", clientRoutes);
//app.use("/professionals", professionalRoutes);
//app.use("/appointments", appointmentRoutes);


const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Online in port ${port}`))