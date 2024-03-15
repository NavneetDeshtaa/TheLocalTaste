import app from "./app.js";

app.listen(process.env.PORT , ()=>{
    console.log(`Server successfully running on ${process.env.PORT}`);
});