import React from "react";
import { useState } from "react";
import { Button, Modal} from "react-bootstrap";
import style from '../modals/signupmodal.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { loginUser } from "../../app/controllers/auth";
import { setToken } from "../../app/controllers/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const LoginModal: React.FC<any> = ({ on, off }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);




    const [userData, setUserData] = useState({

        email: '',
        password: '',

    });

    const stepOneValSchema = yup.object({
        email: yup.string().email().required('Email is required').label('Email'),
        password: yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
            .matches(/[a-z]/, 'Password must have at least one lowercase letter')
            .matches(/[0-9]/, 'Password must have at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must have at least one special character')
            .required('Password is required'),
    })

    

    const currentStep = 0;

    const handleNextStep = (newData: any) => {
        setLoading(true)
        handleLogin(newData)
        console.log({ sending: newData })
    }


    const handleLogin = async (userCred: any) => {
        try {
            const res = await loginUser(userCred);
            console.log(res);
            if (res.payload) {
                localStorage.setItem('userToken',res.payload.userToken)
                setToken(res.token);
                navigate('/home');
                toast.success('Login successful');
            } else {
                setLoading(false);
            }
        } catch (error: any) {
            toast.error('Invalid Credential!')
            setLoading(false);
            console.error('Operation failed:', error.message);
        }
    }


    const StepOne: React.FC<any> = ({ data, next, offModal }) => {
        const [secure, setSecure] = useState(false);
        const handleSubmit = (val: any) => {
            next(val)
        }
        return (
            <div className="d-flex flex-column gap-5 justify-content-between">
                <Formik
                    initialValues={data}
                    validationSchema={stepOneValSchema}
                    onSubmit={handleSubmit}
                >
                    {
                        ({ values, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className="gap-0">
                                {
                                    <>
                                        <p
                                            className="fw-bold"
                                            role="button"
                                            onClick={() => {
                                                offModal(); setUserData({
                                                    email: '',
                                                    password: '',
                                                })
                                            }}
                                        >Back</p>
                                        <h5 className="fw-bold">
                                            Login with your email
                                        </h5>
                                        <label className="mt-3 fw-bold" htmlFor="userEmail">
                                            Email
                                        </label>
                                        <div>
                                            <Field
                                                value={values.userEmail}
                                                className="rounded rounded-1 p-2 outline form-control-outline w-100 border border-1 border-grey"
                                                id='email' name='email' />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger fw-medium" />
                                        </div>



                                        <label className="d-flex justify-content-between mt-3 w-100 fw-bold" htmlFor="password">
                                            Password
                                            {
                                                secure ? < i className="bi bi-eye-slash-fill px-3" onClick={() => { setSecure(!secure) }}></i> :
                                                    < i className="bi bi-eye-fill px-3" onClick={() => { setSecure(!secure) }}></i>
                                            }

                                        </label>
                                        <div className="mt-1">

                                            <Field
                                                className="rounded rounded-1 p-2 outline form-control-outline w-100 border border-1 border-grey"
                                                id='password' name='password' type={secure ? 'password' : 'text'} />

                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-danger fw-medium" />
                                        </div>

                                        <div className="mt-3 w-100 text-center">
                                            <Button
                                            disabled={loading}
                                                type='submit'
                                                className="outline-0 w-100 border border-0 p-2  bg-dark text-light"
                                            >Login</Button>
                                        </div>


                                    </>
                                }
                            </Form>

                        )
                    }
                </Formik>

                <p>
                    By joining, you agree to Our Terms of Service and to occasionally receive emails from us.
                    Please read our Privacy Policy to learn how we use your personal data.
                </p>
            </div>
        )

    }

    const steps: JSX.Element[] = [
        <StepOne data={userData} next={handleNextStep} offModal={off} finalPage={true} />,
        // <StepTwo data={userData} next={handleNextStep} prev={handlePrev}  />
    ]


    return (
        <div>
            <Modal show={on} centered size="lg">
                {/* <Modal.Header>
                    <div className="d-flex justify-content-between w-100">
                        <h5>Tada!</h5>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </Modal.Header> */}

                <Modal.Body className="p-0 m-0 rounded-4">
                    <div className="d-flex  w-100 p-0 m-0  ">
                        <div
                            className={`rounded-start  p-0 m-0 justify-content-center align-items-center ${style.left}`}

                        >

                        </div>
                        <div

                            className={`p-4 m-0 ${style.right}`}
                        >

                            {
                                steps[currentStep]
                            }

                        </div>

                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}
export default LoginModal;