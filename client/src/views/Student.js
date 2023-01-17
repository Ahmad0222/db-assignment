import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Student = () => {

  const [Students, setStudents] = useState([])

  const [Search, setSearch] = useState('');

  const search = () => {
      // getquery from Search State and find in Students
      const query = Search.toLowerCase();
      const filteredStudents = Students.filter(student => {
          return student.name.toLowerCase().includes(query)
      }
      )
      setStudents(filteredStudents)
      
  }

  const onKeyup = () => {
    if (Search === '') {
      axios.get('http://localhost:5000/api/students')
        .then(res => {
          setStudents(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => {
        setStudents(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const deleteStudent = (id) => {
    if (window.confirm('Are You Sure! Do you want to delete this record')) {
      axios.delete(`http://localhost:5000/api/students/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      const newStudents = Students.filter(student => student._id !== id)
      setStudents(newStudents);
    }

  }


  const handleSearch = (e) => {
    setSearch(e.target.value)
    search();
  }

  return (
    <>
      <div className='container-fluid mt-5'>
        <h1 className='text-center py-2'>Student List</h1>
        <div className='p-3'>
          <div className='d-flex justify-content-between'>
            <div><input className="form-control me-2" type="search" onChange={handleSearch} onKeyUp={onKeyup} name='search' placeholder="Search" aria-label="Search"/></div>
            <Link to="/add-student" className='btn btn-success mb-4'>Add Student</Link>
          </div>

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className='text-center' scope="col">Registration No.</th>
                <th className='text-center' scope="col">Name</th>
                <th className='text-center' scope="col">Department</th>
                <th className='text-center' scope="col">Session</th>
                <th className='text-center' scope="col">CGPA</th>
                <th className='text-center' scope="col">Address</th>
                <th className='text-center' scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Students.map((student, index) => {
                  return (
                    <tr key={index}>
                      <td className='text-center'>{student.registration}</td>
                      <td className='text-center'>{student.name}</td>
                      <td className='text-center'>{student.department}</td>
                      <td className='text-center'>{student.session}</td>
                      <td className='text-center'>{student.cgpa}</td>
                      <td className='text-center'>{student.address}</td>
                      <td className='text-center' style={{
                        width: "200px"
                      }}>
                        <Link className='btn btn-sm btn-primary mx-2' to={`/edit-student/${student._id}`} >Edit</Link>
                        <button className='btn btn-sm btn-danger' onClick={()=> {deleteStudent(student._id)}} >Delete</button>
                      </td>
                    </tr>
                  )
                }
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Student