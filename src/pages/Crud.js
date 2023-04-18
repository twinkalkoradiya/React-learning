import React, { useState } from 'react';
import Select from 'react-select';
import AppHeader from '../appHeader/appHeader';
import AppFooter from '../appFooter/appFooter';
import AppMenu from '../appMenu/appMenu';
import axios from 'axios';

export default function Crud() {
    const data = [
        {
            value: 1,
            label: 'cerulean',
        },
        {
            value: 2,
            label: 'fuchsia rose',
        },
        {
            value: 3,
            label: 'true red',
        },
        {
            value: 4,
            label: 'aqua sky',
        },
        {
            value: 5,
            label: 'tigerlily',
        },
        {
            value: 6,
            label: 'blue turquoise',
        },
    ];
    const [FullData, setFullData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneno: '',
        address: '',
        gender: '',
        languages: [],
        test: [],
        student_type: '',
        file:'',
        filename:'',
    });
    const handleChange = (e) => {
        var multarray  = e.map((x) => x.value);
        setFullData({ ...FullData, test: multarray.toString() });
    };
    const saveFile = (e) => {
        setFullData({ ...FullData, file: e.target.files[0], filename: e.target.files[0].name });
        //setFullData({ ...FullData, filename: e.target.files[0].name });
    };
    const handlechange = (e) => {
        //console.log(e);
        let value = e.target.value;
        let name = e.target.name;
        var updatedList = [...FullData.languages];
        if (e.target.checked && e.target.type === 'checkbox') {
            updatedList = [...FullData.languages, value];
        } else {
            updatedList.splice(FullData.languages.indexOf(value), 1);
        }
        value = e.target.type === 'checkbox' ? updatedList.toString() : value;
        setFullData(updatedList.toString());
        //console.log(value);
        setFullData({ ...FullData, [name]: value });
    };
    const handleSubmit = (e) => {
        console.log(FullData);
        e.preventDefault();
        axios.post(
            "http://localhost:4000/store-data",
            FullData
        )
            .then(res => {
                if (res.status === 200) {
                    Promise.resolve();
                    alert('Student successfully created')
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
        //window.location.reload();
    };
    return (
        <div>
            <AppHeader />
            <AppMenu />
            <div className="content-wrapper" style={{ 'minHeight': '133px' }}>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Crud Operation</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Crud Operation</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-12">

                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Quick Example</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} >
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="firstname">First Name</label>
                                                <input type="text" className="form-control" name="firstname" value={FullData.firstname}
                                                    onChange={handlechange} placeholder='First Name' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input type="text" className="form-control" name="lastname" value={FullData.lastname}
                                                    onChange={handlechange} placeholder='Last Name' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" name="email" value={FullData.email}
                                                    onChange={handlechange} placeholder='Email' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phoneno">Phone no</label>
                                                <input type="text" className="form-control" name="phoneno" value={FullData.phoneno}
                                                    onChange={handlechange} placeholder='Phone no' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" name="address" value={FullData.address}
                                                    onChange={handlechange} placeholder='address' />
                                            </div>
                                            <div className="form-group">
                                                <label>Select Gender</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        value="Male"
                                                        name="gender" onChange={handlechange} />
                                                    <label htmlFor="gender" className="form-check-label">Male</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        value="feMale"
                                                        name="gender" onChange={handlechange} />
                                                    <label htmlFor="gender" className="form-check-label">feMale</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Select Languages</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        name="languages"
                                                        value={0} onChange={handlechange} />
                                                    <label className="form-check-label">Javascript</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        name="languages"
                                                        value={1} onChange={handlechange} />
                                                    <label className="form-check-label">Python</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        name="languages"
                                                        value={2} onChange={handlechange} />
                                                    <label className="form-check-label">Java</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Select type</label>
                                                <select className="form-control" onChange={handlechange} name="student_type">
                                                    <option value="0">--select type--</option>
                                                    <option value="1">Student</option>
                                                    <option value="2">Graduate</option>
                                                    <option value="3">Un-graduate</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Select Option</label>
                                                <Select
                                                    className="dropdown"
                                                    placeholder="Select Option"
                                                    value={data.filter((obj) => FullData.test.includes(obj.value))} // set selected values
                                                    options={data} // set list of the data
                                                    onChange={handleChange} // assign onChange function
                                                    isMulti
                                                    isClearable
                                                />
                                            </div>
                                            <div className="form-group">
                                            <label>Image</label>
                                                <div className="custom-file">
                                                    <input type="file" name="image" className="custom-file-input" id="image" onChange={saveFile} />
                                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <AppFooter />
        </div>
    )
}
