import 'dotenv/config'
export default {
  LOCAL_URI: "mongodb://127.0.0.1:27017/?directConnection=true",
  // REMOTE_URI: "mongodb+srv://amar_jay:8e43F92FXKD3X8Ej@cluster0.65btp1z.mongodb.net/?retryWrites=true&w=majority",
  REMOTE_URI: process.env?.MONGO_URI ?? LOCAL_URI,
  DBNAME: "polls"
}

