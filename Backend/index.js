import express  from "express";

const app = express();


app.get('/api/products', (req, res)=>{
    const furnitures = [
        {
            id: 1,
            name: "sofa",
            available: true,
            color: "black"
        },
        {
            id: 2,
            name: "setbed",
            available: false,
            color: "brown"
        },
        {
            id: 3,
            name: "cupboard",
            available: false,
            color: "blue"
        }

      ];

      if (req.query.search) {
        const filterProducts = furnitures.filter(furnitures => furnitures.name.includes(req.query.search))
        res.send(filterProducts)
        return;
      }




      setTimeout(()=>{
        res.send(furnitures)
      },3000);
})

//http://localhost:3000/api/products?search=sofa



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`)
})