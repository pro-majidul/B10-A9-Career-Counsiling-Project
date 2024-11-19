import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Provider';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const Profile = () => {

    const { user,setUser,updateUserProfile } = useContext(AuthContext)

    const handelProfileUpdate = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const photo = form.get('photo');
        const name = form.get('name');
        updateUserProfile(name , photo)
        .then(result=>{
            setUser({...user ,result});
            toast.success('user profile update successfully')
        })
        .catch(error =>{
            toast.error(error.code)
        })
    }
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-232px)]'>
            <Helmet>
                <title>My Profile</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className=" md:w-6/12 mx-auto bg-base-100 py-5 rounded-xl shadow-2xl">
                <div className="p-6 space-y-5">
                    <h2 className=" text-xl font-semibold  text-center"> Name : { user?.displayName}</h2>
                    <p className='text-xl font-normal text-center'>Email : {user?.email}</p>
                </div>

                <div className='flex items-center justify-center'>
                    <img className='w-32 h-32 rounded-full' src={ user?.photoURL} alt="" />
                </div>
                <div>
                    <form onSubmit={handelProfileUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo-url" className="input input-bordered" required />
                            
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