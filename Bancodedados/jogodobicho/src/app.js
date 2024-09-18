import "dotenv/config"
import e from "espress";

const app = e()

app.listen(process.env.API_PORT, () => {
    console.log(`Server running in port ${process.env.API_PORT}`)
})

