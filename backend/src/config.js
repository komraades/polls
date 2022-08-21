import 'dotenv/config'
export default {
  LOCAL_URI: "mongodb://127.0.0.1:27017/?directConnection=true",
  REMOTE_URI: process.env?.MONGO_URI ?? LOCAL_URI,
  DBNAME: "polls"
}

