// DepartmentList.js 
import React from 'react';
import { Button, Form } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; // Import PropTypes 


const DepartmentList = ({ departments, handleEdit, handleEditSubmit, newDepartment, setNewDepartment, editItem, searchQuery }) => {
    // const [searchQuery, setSearchQuery] = useState(''); 

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7 mx-auto bg-white rounded shadow">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="table-header mt-3">
                                    <th scope="col" className="col-3">SNo.</th>
                                    <th scope="col" className="col-6">Department</th>
                                    <th scope="col" className="col-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {departments
                                    .filter((dept) =>
                                        dept.departmentName?.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((dept) => (
                                        <tr key={dept.departmentId} className="table-row mt-1">
                                             <td className="col col-3" data-label="S.No">{dept.departmentId}</td> 
                                            {/* <td className="col col-6" data-label="Department"> */} 
                                            {
                                                editItem && editItem.departmentId === dept.departmentId ?
                                                    (
                                                        <>
                                                            <td className="col col-6">
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    value={newDepartment || dept.departmentName}
                                                                    onChange={(e) => setNewDepartment(e.target.value)}
                                                                />
                                                            </td>
                                                            <td className="col col-3">
                                                                <Button onClick={(e) => handleEditSubmit(e, dept.departmentId, newDepartment)} variant="success" size="sm">Save</Button>
                                                            </td>
                                                        </>

                                                    ) : (
                                                        <>
                                                            <td className="col col-3" data-label="S.No">{dept.departmentName}</td>
                                                            <td className="col col-6">

                                                                <Button variant="outline-primary" size="sm" onClick={() => handleEdit(dept)}>
                                                                    <i className="fa-solid fa-pencil"></i>
                                                                </Button>
                                                            </td>
                                                        </>
                                                    )}

                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );



};
DepartmentList.propTypes = { // Define prop types 
    departments: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleEditSubmit: PropTypes.func.isRequired,
    newDepartment: PropTypes.string.isRequired,
    setNewDepartment: PropTypes.func.isRequired,
    searchQuery: PropTypes.func.isRequired,
    editItem: PropTypes.object,

};

export default DepartmentList;