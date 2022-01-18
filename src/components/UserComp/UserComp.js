import React from 'react';

const UserComp = (props) => {
    const { onCreateUser, 
            value, 
            onChange } = props;

    return (
        <>
            <div className="animate__animated animate__bounceIn mb-auto p-2 bd-highlight load-user-form" id='perfect-scroll'>
                <form onSubmit={onCreateUser} className='load-user'>
                    <input required type="text" value={value} onChange={onChange} placeholder='Please Enter Your Name...' />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    );
};

export default UserComp;