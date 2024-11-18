import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Provider';

const Profile = () => {

    const { user } = useContext(AuthContext)
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-232px)]'>
            <div className=" md:w-6/12 mx-auto bg-base-100 py-5 rounded-xl shadow-2xl">
                <div className="p-6 space-y-5">
                    <h2 className=" text-xl font-semibold  text-center"> Name : { user?.displayName}</h2>
                    <p className='text-xl font-normal text-center'>Email : {user?.email}</p>
                </div>

                <div className='flex items-center justify-center'>
                    <img className='w-32 h-32 rounded-full' src={ user?.photoURL} alt="" />
                </div>
                <div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo-url" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update User</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Profile;