import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            navigate('/admin')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <form onSubmit={handleSubmit}>

                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
                    {/* Sign in section */}
                    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                            Sign In
                        </h4>
                        <p className="mb-9 ml-1 text-base text-gray-600">
                            Enter your email and password to sign in!
                        </p>
                        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
                            <div className="rounded-full text-xl">
                                <FcGoogle />
                            </div>
                            <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                                Sign In with Google
                            </h5>
                        </div>
                        <div className="mb-6 flex items-center  gap-3">
                            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                            <p className="text-base text-gray-600 dark:text-white"> or </p>
                            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                        </div>
                        {/* Email */}


                        <div >
                            <label
                                htmlFor={'username'}
                                className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium`}

                            >
                                User name
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                value={user}
                                onChange={handleUserInput}
                                autoComplete="off"
                                required
                                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor={'username'}
                                className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium"
                                    }`}
                            >
                                Password
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={pwd}
                                onChange={handlePwdInput}
                                autoComplete="off"
                                required
                                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                            />
                        </div>
                        {/* Checkbox */}
                        <div className="mb-4 flex items-center justify-between px-2">
                            <div className="flex items-center">
                                <Checkbox />
                                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                                    Keep me logged In
                                </p>
                            </div>
                            <a
                                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                                href=" "
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Sign In
                        </button>
                        <div className="mt-4">
                            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                                Not registered yet?
                            </span>
                            <a
                                href=" "
                                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                            >
                                Create an account
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )

    return content
}
export default Login