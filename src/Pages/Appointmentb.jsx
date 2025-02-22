import { useNavigate } from 'react-router-dom';
import './Style.css';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster here
import { useEffect } from 'react'; 

export default function Appointment1() {
    
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const roles = ['X-Ray','MRI', '2D Scan', 'CBCT','3D Scan'];

    const onLoginClick = (data) => {
        localStorage.setItem('userData', JSON.stringify(data)); // Fixed typo: setltem -> setItem
        toast.success('Appointment request submitted successfully!!');
        navigate('/appointment');
        reset();
    };
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className='appointment'>
                <form onSubmit={handleSubmit(onLoginClick)}> 
                    <div className='titel'>
                        <h2>Appointment Form</h2>
                    </div>

                    <div className='input-field'> 
                        <label>Fullname</label>
                        <input type="text" {...register('fullname', {
                            required: 'Fullname is Required !!'
                        })} />
                        {errors.fullname && <p>{errors.fullname.message}</p>}
                    </div>

                    <div className='input-field'>
                        <label>Email</label>
                        <input type="email" {...register('username', {
                            required: 'Username is Required !!',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid Username'
                            }
                        })} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                    <div className='input-field'>
                        <label>Mobile No.</label> {/* Fixed typo: Moblie -> Mobile */}
                        <input type="number" {...register('phone', {
                            required: 'Phone Number is Required !!'
                        })} />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>

                    <div className='input-field'>
                        <label>Date of Birth</label>
                        <input type="date" {...register('date', {
                            required: 'Date of Birth is Required !!'
                        })} />
                        {errors.date && <p>{errors.date.message}</p>}
                    </div>

                    <div className='input-field'>
                        <label>Appointment Date</label>
                        <input type="date" {...register('date', {
                            required: ' Appointment Date Is Required !!'
                        })} />
                        {errors.date && <p>{errors.date.message}</p>}
                    </div>
                    <div className='input-field'>
                        <label>Appointment Time</label>
                        <input type="time" {...register('time', {
                            required: ' Appointment Time Is Required !!'
                        })} />
                        {errors.date && <p>{errors.time.message}</p>}
                    </div>

                    <div className='input-field'>
                        <label>Address</label>
                        <input type="text" {...register('address', {
                            required: 'Address is Required !!'
                        })} />
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>

                    <div className='input-field'>
                        <label>Select which appointment type(s) you require</label>
                        <select {...register('apptmt', {
                            required: 'Appointment type is Required !!'
                        })}>
                            <option value='' selected>Select Appointment Type</option> 
                            {
                                roles.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                        {errors.apptmt && <p>{errors.apptmt.message}</p>}
                    </div>

                    <div className='button-fd'>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </>
    );
}