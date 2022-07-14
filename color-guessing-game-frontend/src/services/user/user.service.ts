import axios from "axios";
import SparkMD5 from 'spark-md5';

export async function createNewUser(data: Api.User.Req.NewUser) : Promise<Model.User.User>{
        data.password = SparkMD5.hash(data.password)
        const response = await axios.post('http://localhost:8080/api/v1/user', data)
        return response.data
    }

export async function loginUserByPassword(data: Model.User.LoginData) : Promise<Model.User.User> {
        data.password = SparkMD5.hash(data.password);
        const response = await axios.post('http://localhost:8080/api/v1/user/login', data);
        return response.data
    }

    async function onAfterLogin(user: Model.User.User) {

    }
