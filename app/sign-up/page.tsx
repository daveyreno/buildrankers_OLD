'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input as CustomInput } from '@/components/ui/input';

import { useAuth } from '@/app/auth/AuthProvider';
import supabase from '@/lib/supabase-browser';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const SignUp = () => {

    const router = useRouter();
    const { setView } = useAuth();
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    async function signUp(formData) {
        const { error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
        });

        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg('Success! Please check your email for further instructions.');
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className='w-full p-5 border rounded-lg md:w-96'>
                <h1 className='mb-3 text-xl font-bold tracking-tighter'>Sign Up</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={signUp}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='flex flex-col gap-3'>
                                <Label htmlFor="email">Email address</Label>

                                <Field name="email">
                                    {({ field, form }) => (
                                        <CustomInput
                                            id="email"
                                            placeholder="joe@gmail.com"
                                            type="email"
                                            className={cn(errors.email && touched.email && 'transform duration-500 border-2 border-red-700')}
                                            {...field}
                                        />
                                    )}
                                </Field>

                                {errors.email && touched.email ? (
                                    <div className="-mt-2 text-xs text-red-600">{errors.email}</div>
                                ) : null}

                                <Label htmlFor="password">Password</Label>
                                <Field name="password">
                                    {({ field, form }) => (
                                        <CustomInput
                                            id="password"
                                            type="password"
                                            className={cn(errors.password && touched.password && 'transform duration-500 border-2 border-red-700')}
                                            {...field}
                                        />
                                    )}
                                </Field>
                                {errors.password && touched.password ? (
                                    <div className="-mt-2 text-xs text-red-600">{errors.password}</div>
                                ) : null}

                                <Button className="w-full" type="submit">Sign Up</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {errorMsg && <div className="text-red-600">{errorMsg}</div>}
                {successMsg && <div className="text-black">{successMsg}</div>}

                <Button className="w-full mt-3" variant="link" type="button" onClick={() => router.push('/sign-in')}>Already have an account? Sign In.</Button >

            </div>
        </div >
    );
};

export default SignUp