'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input as CustomInput } from '@/components/ui/input';

import { useAuth } from '@/app/auth/AuthProvider';
import supabase from '@/lib/supabase-browser';
import { Button } from '@/components/ui/button';

interface FormData {
    email: string;
}

const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const ResetPassword = () => {
    const router = useRouter();
    const { setView } = useAuth();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    async function resetPassword(formData: FormData) {
        const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
            redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}`,
        });

        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg('Password reset instructions sent.');
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className='w-full p-5 border rounded-lg md:w-96'>
                <h1 className='mb-3 text-xl font-bold tracking-tighter'>Forgot Password</h1>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={ResetPasswordSchema}
                    onSubmit={resetPassword}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor='email'>Email</label>
                                <Field name='email'>
                                    {({ field }: { field: any }) => (
                                        <CustomInput
                                            id='email'
                                            placeholder='jane@acme.com'
                                            type='email'
                                            className={cn(errors.email && touched.email && 'transform duration-500 border-2 border-red-700')}
                                            {...field}
                                        />
                                    )}
                                </Field>
                                {errors.email && touched.email ? (
                                    <div className='-mt-2 text-xs text-red-600'>{errors.email}</div>
                                ) : null}
                                <Button className='w-full' type='submit'>
                                    Send instructions
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {errorMsg && <div className='text-center text-red-600'>{errorMsg}</div>}
                {successMsg && <div className='text-center text-black'>{successMsg}</div>}
                <Button
                    className='w-full'
                    variant='link'
                    type='button'
                    onClick={() => router.push('/sign-in')}
                >
                    Remember your password? Log In
                </Button>
            </div>
        </div>
    );
};

export default ResetPassword;
