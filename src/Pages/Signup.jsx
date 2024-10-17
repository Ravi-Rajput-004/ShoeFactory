import React, { useState } from 'react';
import { GrUserManager } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };


    // const [form] = form.useform()
    // const onfinish = (values) => {
    //     form.resetfields
    // }



    const PostData = (e) => {
        e.preventDefault()
        console.log(user);

        const { name, email, password } = user;

        // const res = await fetch("https://learn-bc322-default-rtdb.firebaseio.com/rajput.json",
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             name,
        //             email,
        //             password,


        //         })
        //     })

    }






    return (
        <div className='col-sm-6 offset-sm-3 bg-url("https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp")'>
            <form onSubmit={PostData}>
                <div className='col-sm-6 offset-sm-3 '>
                    <h1 className='text-3xl items-center offset-sm-4 mt-[110px] font-bold '>Signup</h1><br />
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        className="form-control   "
                        required
                        onChange={handleChange}
                        placeholder='Enter your name'
                    /> <GrUserManager className='absolute top-[180px] ml-[23%]' />

                    <br /><br />
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="form-control"
                        required
                        onChange={handleChange}
                        placeholder='Enter your e-mail'
                    />
                    <HiOutlineMail className='absolute top-[267px] ml-[23%]' />

                    <br /><br />
                    <input
                        type="password"
                        name='password'
                        value={user.password}
                        className="form-control"
                        required
                        onChange={handleChange}
                        placeholder='Enter your password'
                    />
                    <RiLockPasswordLine className='absolute top-[352px] ml-[23%]' />
                </div>
                <br />
                {/* <select className='col-sm-6 offset-sm-5 w-[80px] outline-black'>
                    <option >male</option>
                    <option >femlae</option>
                    <option >others</option>
                </select> */}

                <br />
                <button onClick={PostData} className='btn btn-primary offset-sm-5'>Signup</button>
            </form>
        </div>
    );
};

export default SignUp;





























// // SignUp.js
// import React, { useState } from 'react';

// const SignUp = () => {
//     const [user, setuser] = useState({
//         Name: "",
//         email: "",
//         password: ""
//     });

//     let name, value
//     const data = (e) => {
//         name = e.target.name;
//         value = e.target.value
//         setuser({ ...user, [name]: value });
//         console.log(user);
//     };




//     return (
//         <div className='col-sm-6 offset-sm-3'>
//             <form method='POST'>
//                 <div className='col-sm-6 offset-sm-3'>
//                     <h1 className='text-3xl items-center  offset-sm-3'>Signup</h1><br />
//                     <input type="text" name=" Name" value={user.Name} className="form-control" required onchange={data} placeholder='Enter your name ' />
//                     <br /> <br />

//                     <input type="email" name="email" value={user.email} className="form-control" required onchange={data} placeholder='Enter your e-mail ' />
//                     <br />  <br />

//                     <input type="password" name='password' value={user.password} className="form-control" required onchange={data} placeholder='Enter your password ' />
//                 </div>
//                 <br />
//             </form>

//             <button className='btn btn-primary offset-sm-5'>Signup</button>

//         </div >
//     )
// };

// export default SignUp;
