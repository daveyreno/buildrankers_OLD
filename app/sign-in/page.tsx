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

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const SignIn = () => {

    const router = useRouter();
    const { setView } = useAuth();
    const [errorMsg, setErrorMsg] = useState(null);

    async function signIn(formData) {
        const { error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })

        router.push('/u')

        if (error) {
            setErrorMsg(error.message);
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className='w-full p-5 border rounded-lg md:w-96'>
                <h1 className='mb-3 text-xl font-bold tracking-tighter'>Log In</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={signIn}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='flex flex-col gap-3'>
                                <Label htmlFor="email">Email address</Label>

                                <Field name="email">
                                    {({ field, form }) => (
                                        <CustomInput
                                            id="email"
                                            placeholder="jane@acme.com"
                                            type="email"
                                            className={cn(errors.email && touched.email && 'transform duration-500 border-2 border-red-700')}
                                            {...field}
                                        />
                                    )}
                                </Field>

                                {errors.email && touched.email ? (
                                    <div className="-mt-2 text-xs text-red-600">{errors.email}</div>
                                ) : null}

                                <Label htmlFor="email">Password</Label>
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


                                <Button className="w-full" type="submit">Log In</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {errorMsg && <div className="text-red-600">{errorMsg}</div>}

                <div className="flex flex-col gap-3">
                    <Button className="w-full mt-3" variant="outline" type="button" onClick={() => router.push('/sign-up')}>Need an account? Sign Up</Button>
                    <Button className="w-full" variant="secondary" type="button" onClick={() => router.push('/forgot-pass')}>Forgot pass</Button>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
