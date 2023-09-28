import { userLogin } from '../redux/features/auth/authActions'
import store from '../redux/store'

export const handleLoginSubmit = async (event, email, password, role) => {
    event.preventDefault()
    try {
        if (!role || !email || !password) {
            throw new Error("Please provide all fields")
        }
        await store.dispatch(userLogin({ email, password, role }))

    } catch (error) {
        console.error("Login failed:", error.message)
    }
}

export const handleRegisterSubmit = async (event, formData) => {
    event.preventDefault()
    try {
        // await store.dispatch(userRegister(formData))
        console.log(formData);
    } catch (error) {
        console.error("Registration failed:", error.message);
    }
}