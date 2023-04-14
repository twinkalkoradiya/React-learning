import React, { useState } from 'react';
import Select from 'react-select';
import AppHeader from '../appHeader/appHeader';
import AppFooter from '../appFooter/appFooter';
import AppMenu from '../appMenu/appMenu';

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
    });
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

                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="firstname">First Name</label>
                                                <input type="text" className="form-control" name="firstname" value="" onChange="" placeholder='First Name' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input type="text" className="form-control" name="lastname" value="" onChange="" placeholder='Last Name' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" name="email" value="" onChange="" placeholder='Email' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phoneno">Phone no</label>
                                                <input type="text" className="form-control" name="phoneno" value="" onChange="" placeholder='Phone no' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" name="address" value="" onChange="" placeholder='address' />
                                            </div>
                                            <div className="form-group">
                                                <label>Select Gender</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        value="Male"
                                                        name="gender" />
                                                    <label htmlFor="gender" className="form-check-label">Male</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        value="feMale"
                                                        name="gender" />
                                                    <label htmlFor="gender" className="form-check-label">feMale</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Select Languages</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        name="languages"
                                                        value="Javascript" />
                                                    <label className="form-check-label">Javascript</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        name="languages"
                                                        value="Python" />
                                                    <label className="form-check-label">Python</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        name="languages"
                                                        value="Java" />
                                                    <label className="form-check-label">Java</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Select type</label>
                                                <select className="form-control">
                                                    <option>--select type--</option>
                                                    <option value="0">Student</option>
                                                    <option value="1">Graduate</option>
                                                    <option value="2">Un-graduate</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Select Option</label>
                                                <Select
                                                    className="dropdown"
                                                    placeholder="Select Option"
                                                    value={data.filter((obj) => FullData.test.includes(obj.value))} // set selected values
                                                    options={data} // set list of the data
                                                    onChange="" // assign onChange function
                                                    isMulti
                                                    isClearable
                                                />
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
