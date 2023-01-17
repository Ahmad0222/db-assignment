import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const StudentForm = () => {
  const redirect = useNavigate();
  const [data, setData] = useState({
    registration: '',
    name: '',
    department: '',
    session: '',
    cgpa: '',
    address: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/students', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    redirect('/')
  }



  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center'>Student Form</h1>
        <div className='card p-5'>
          <form>
            <div className='row'>
              <div className='col-md-4'>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Registration No.</label>
                  <input type="text" name='registration' className="form-control" onChange={handleChange}   aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-md-4'>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" name='name' onChange={handleChange} className="form-control"  aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-md-4'>
                <div className="mb-3">
                  <label htmlFor=""   className="form-label">Department</label>
                  <input type="text" name='department' onChange={handleChange} className="form-control"  aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-md-4'>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Session</label>
                  <input type="text" name='session' className="form-control" onChange={handleChange}   aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-md-2'>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">CGPA</label>
                  <input type="text" name='cgpa' className="form-control" onChange={handleChange}   aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Address</label>
                  <input type="text" name='address' className="form-control" onChange={handleChange}   aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Save Student</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default StudentForm