import React from 'react';
import { useForm } from 'react-hook-form';

const onSubmit = formData => {
    alert(`Form Data: ${formData.phoneNumber}`);
};

const MyForm = () => {
    const { register, handleSubmit, errors, watch, reset } = useForm();
    console.log(errors);
    // Submit data into redux store
    // const onSubmit = data => props.updateAction(data);
    const phoneValidation = {
        required: {
            value: true,
            message: 'Phone number is required',
        },
        minLength: {
            value: 12,
            message: 'Phone number should be at least 12 characters',
        },
    };

    const showDatePicker = watch('showDatePicker');

    return (
        <>
        <h1>Phone number entered: {watch('phoneNumber')}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    ref={register(phoneValidation)}
                />
                <br />
                {errors.phoneNumber?.message}
                <br />
                <label>
                    Show Date Picker?
                    <input type="checkbox" ref={register} name="showDatePicker" />
                </label>
                <br />
                {showDatePicker && <input type="date" ref={register} name="dob" />}
                <br />
                <input type="submit" value="Submit" />
                <input type="button" value="Reset" onClick={reset} />
            </form>
        </>
    );
}

export default MyForm;