'use client'

import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input as CustomInput } from '@/components/ui/input';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabase-browser';

const MinUserSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
        .min(5, 'Username must be at least 5 characters')
        .required('Required'),
    location: Yup.string().required('Required'),
});

export default function UsernameLocation(props) {

    const router = useRouter();

    if (!props.user.id) {
        router.push('/sign-in');
    }

    const [errorMsg, setErrorMsg] = useState(null);
    const [existingUsername, setExistingUsername] = useState(null);
    const [existingLocation, setExistingLocation] = useState(null);

    useEffect(() => {
        // Fetch existing username and location
        async function fetchExistingData() {
            try {
                const { data: profiles, error } = await supabase
                    .from('profiles')
                    .select('username, location')
                    .eq('id', props.user.id)
                    .single();

                if (error) {
                    setErrorMsg(error.message);
                } else if (profiles) {
                    setExistingUsername(profiles.username);
                    setExistingLocation(profiles.location);
                    // Redirect to profile page if both username and location already exist
                    if (profiles.username && profiles.location) {
                        router.push(`/u/${profiles.username}`);
                    }
                }
            } catch (error) {
                console.error('Error fetching existing data:', error);
                setErrorMsg('Error fetching existing data');
            }
        }

        fetchExistingData();
    }, []);

    async function Process(formData) {
        try {
            const { username, location } = formData;

            // Skip form submission if both username and location already exist
            if (existingUsername && existingLocation) {
                router.push(`/u/${existingUsername}`);
                return;
            }

            const { data, error } = await supabase
                .from('profiles')
                .update({ username, location })
                .eq('id', props.user.id);

            if (error) {
                setErrorMsg(error.message);
            } else {
                router.push(`/u/${username}`);
            }
        } catch (error) {
            console.error('Error updating data:', error);
            setErrorMsg('Error updating data');
        }
    }

    return (
        <div>
            {props.user.id}
            <Formik
                initialValues={{
                    username: '',
                    location: '',
                }}
                validationSchema={MinUserSchema}
                onSubmit={Process}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="username">Username</Label>
                            <Field name="username">
                                {({ field, form }) => (
                                    <CustomInput
                                        id="username"
                                        placeholder="Username"
                                        type="text"
                                        className={cn(
                                            errors.username && touched.username && 'transform duration-500 border-2 border-red-700'
                                        )}
                                        {...field}
                                    />
                                )}
                            </Field>
                            {errors.username && touched.username ? (
                                <div className="-mt-2 text-xs text-red-600">{errors.username}</div>
                            ) : null}

                            <Label htmlFor="location">Location</Label>
                            <Field name="location">
                                {({ field, form }) => (
                                    <CustomInput
                                        id="location"
                                        type="text"
                                        className={cn(
                                            errors.location && touched.location && 'transform duration-500 border-2 border-red-700'
                                        )}
                                        {...field}
                                    />
                                )}
                            </Field>
                            {errors.location && touched.location ? (
                                <div className="-mt-2 text-xs text-red-600">{errors.location}</div>
                            ) : null}

                            <Button className="w-full" type="submit">
                                Save
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            {errorMsg && <div className="text-red-600">{errorMsg}</div>}
        </div>
    );
}
