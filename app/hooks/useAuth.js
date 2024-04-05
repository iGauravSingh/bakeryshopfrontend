import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../features/userSlice";

const cookie = new Cookie()

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";

const useAuth = () => {
    const dispatch = useDispatch();

    const login = async ({ email, password} ) => {

       try {
        const response = await axios.post(`${urllocal}/auth/login`, { email, password });
        console.log('from useAuth ', response.data)
        const { user, token } = response.data;
        cookie.set("session_token", token)
        dispatch(setUser({email: user.email, username: user.username, address: user.address, phoneNumber: user.phoneNumber}))
        return response.data
       } catch (error) {
        console.error('error in login',error)
       }
    }

    const signup = async ({email, password, name,address,phoneNumber}) => {
        try {
            const response = await axios.post(`${urllocal}/auth/signup`, {email, password, name, address, phoneNumber})
        console.log('from signup in useAuth',name)
        const {user,token} = response.data;
        cookie.set("session_token", token)
        dispatch(setUser({email: user.email, username: user.username}))
        return response.data;
        } catch (error) {
            console.error('error in sign up',error)
        }
    }

    const fetchUser = async () => {
        const sessionToken = cookie.get("session_token")
        try {
            const response = await axios.get(`${urllocal}/auth/me`, {
                headers: {
                    ...(sessionToken ? {Authorization: `Bearer ${sessionToken}`} : null)
                }
            })
            const user = response.data;

            if(!user) {
                return dispatch(clearUser())
            }

            dispatch(setUser({email: user.email, username: user.username}))
        } catch (error) {
            return dispatch(clearUser())
        }
    }

    const logout = () => {
        cookie.remove("session_token")
        return dispatch(clearUser())
    }

    return {signup, login, logout, fetchUser }

}

export default useAuth















