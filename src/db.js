import axios from 'axios'

class Db {



    getDtat () {



    } //getDtat

  async  postData(method,url,data){
      try{
        await axios.get('/sanctum/csrf-cookie')
        return await axios ({method,url,data:{...data,responseEncoding: 'utf8'}});

      }
      catch(e){
          return e
      }

  } // postData




}

export default new Db()
