import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Nav, Tab, Collapse, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './Department.css';
import PermissionChecker from 'src/context/PermissionChecker';

const Department = () => {
    const [activeTab, setActiveTab] = useState('departments');
    const [departments, setDepartments] = useState([]);
    const [newDepartment, setNewDepartment] = useState('');
    const [openCreateDepartment, setOpenCreateDepartment] = useState(true);
    const [roles, setRoles] = useState([]);
    const [newRoles, setNewRoles] = useState('');
    const [openCreateRole, setOpenCreateRole] = useState(false);
    const [project, setProject] = useState([]);
    const [newProject, setNewProject] = useState('');
    const [openProject, setOpenProject] = useState(false);
    const [ticketType, setTicketTypes] = useState([]);
    const [newTicketType, setNewTicketType] = useState('')
    const [openTicketType, setOpenTicketType] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [editItem, setEditItem] = useState(null);

    // Fetch departments from the API when the component mounts 
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('https://localhost:7217/api/Departments');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    // Fetch roles from the API when the component mounts 
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get('https://localhost:7217/api/Roles');
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchRoles();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleEdit = (item) => {
        console.log('Edit item:', item);
        setEditItem(item);
    };
    

    const handleEditSubmit = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7217/api/Departments/${id}`, {
                id:id,
                departmentName : updatedValue,
            });

            setDepartments((prevDepartments) =>
                prevDepartments.map((dept) =>
                    dept.id === id ? { ...dept, departmentName: updatedValue } : dept
                )
            );

            setEditItem(null);
            setNewDepartment(''); // Reset newDepartment state after submitting
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleEditSubmitRole = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7217/api/Roles/${id}`, {
                roleId: id,
                role: updatedValue,
            });
    
            setRoles((prevRoles) =>
                prevRoles.map((role) =>
                    role.roleId === id ? { ...role, role: updatedValue } : role
                )
            );
    
            setEditItem(null);
            setNewRoles(''); // Reset newRoles state after submitting
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };
    
    // Similar functions for TicketTypes and Projects
    
    const handleEditSubmitTicketType = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7217/api/TicketTypes/${id}`, {
                id: id,
                ticketType: updatedValue,
            });
    
            setTicketTypes((prevTicketTypes) =>
                prevTicketTypes.map((ticket) =>
                    ticket.id === id ? { ...ticket, ticketType: updatedValue } : ticket
                )
            );
    
            setEditItem(null);
            setNewTicketType(''); // Reset newTicketType state after submitting
        } catch (error) {
            console.error('Error updating ticket type:', error);
        }
    };
    
    const handleEditSubmitProject = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7217/api/ProjectType/${id}`, {
                id: id,
                projectTypes: updatedValue,
            });
    
            setProject((prevProjects) =>
                prevProjects.map((project) =>
                    project.id === id ? { ...project, projectTypes: updatedValue } : project
                )
            );
    
            setEditItem(null);
            setNewProject(''); // Reset newProject state after submitting
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };
    



    // Fetch projects from the API when the component mounts 
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://localhost:7217/api/ProjectType');
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    // Fetch ticket types from the API when the component mounts 
    useEffect(() => {
        const fetchTicketTypes = async () => {
            try {
                const response = await axios.get('https://localhost:7217/api/TicketTypes');
                setTicketTypes(response.data);
            } catch (error) {
                console.error('Error fetching ticket types:', error);
            }
        };

        fetchTicketTypes();
    }, []); // Empty dependency array ensures this effect runs only once on mount 

    const handleCreateDepartment = async (e) => {
        e.preventDefault();
        if (newDepartment.trim() !== '') {
            try {
                // Send a POST request to create a new department 
                const response = await axios.post('https://localhost:7217/api/Departments', {
                    departmentName: newDepartment,
                });

                // Update the state with the new department from the server response 
                setDepartments([...departments, response.data]);
                setNewDepartment('');
            } catch (error) {
                console.error('Error creating department:', error);
            }
        }
    };
    const handleCreateRole = async (e) => {
        e.preventDefault();
        if (newRoles.trim() !== '') {
            try {
                // Send a POST request to create a new department 
                const response = await axios.post('https://localhost:7217/api/Roles', {
                    role: newRoles,
                });

                // Update the state with the new department from the server response 
                setRoles([...roles, response.data]);
                setNewRoles('');
            } catch (error) {
                console.error('Error creating Role:', error);
            }
        }
    };
    const handleCreateProjectType = async (e) => {
        e.preventDefault();
        if (newProject.trim() !== '') {
            try {
                // Send a POST request to create a new department 
                const response = await axios.post('https://localhost:7217/api/ProjectType', {
                    projectTypes: newProject,
                });

                // Update the state with the new department from the server response 
                setProject([...project, response.data]);
                setNewProject('');
            } catch (error) {
                console.error('Error creating Project Name:', error);
            }
        }
    };
    const handleCreateTicketType = async (e, hasPermission) => {
        e.preventDefault();
        if (newTicketType.trim() !== '' && hasPermission(3, "canAddOnly")) {
            try {
                // Send a POST request to create a new department 
                const response = await axios.post('https://localhost:7217/api/TicketTypes', {
                    ticketType: newTicketType,
                });

                // Update the state with the new department from the server response 
                setTicketTypes([...ticketType, response.data]);
                setNewTicketType('');
            } catch (error) {
                console.error('Error creating Ticket Type:', error);
            }
        }
    };

    return (
        <Container>
            <Row>
                {/* Department List */}
                <Col md={12}>
                    <div className='row mb-3 justify-content-between display flex'>

                        <h4 className='col-sm-3'>Categories</h4>
                        <Form className='col-sm-3'>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </Form>

                    
                    </div>
                    
                    <Nav justify variant="tabs" defaultActiveKey="departments">
                        <Nav.Item>
                            <Nav.Link eventKey="departments" onClick={() => setActiveTab('departments')}>Departments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="roles" onClick={() => setActiveTab('roles')}>Roles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ticketType" onClick={() => setActiveTab('ticketType')}>Ticket Types</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="project" onClick={() => setActiveTab('project')}>Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <Container>
                        {/* Department List */}
                        {
                            activeTab === 'departments' &&
                            <Row>
                                <Col md={6}>
                                    <h4>Departments</h4>


                                    <ListGroup>
                                        <ul className="responsive-table">
                                            <li className="table-header mt-3">
                                                <div className="col col-1">SNo.</div>
                                                <div className="col col-2">Department</div>
                                                <div className="col col-3">Actions</div>
                                            </li>
                                            {departments
                                                .filter((dept) =>
                                                    dept.departmentName.toLowerCase().includes(searchQuery.toLowerCase())
                                                )
                                                .map((dept) => (
                                                    <ListGroup.Item key={dept.id}>
                                                        <li className="table-row mt-1">
                                                            <div className="col col-1" data-label="SNo.">{dept.id}</div>
                                                            <div className="col col-2" data-label="Department">{dept.departmentName}</div>
                                                            <div className="col col-3" data-label="Actions">
                                                                {editItem && editItem.id === dept.id ? (
                                                                    <Form onSubmit={(e) => handleEditSubmit(e, dept.id, newDepartment)}>
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            value={newDepartment}
                                                                            onChange={(e) => setNewDepartment(e.target.value)}
                                                                        />
                                                                        <Button type="submit" variant="success" size="sm">
                                                                            Save
                                                                        </Button>
                                                                    </Form>
                                                                ) : (
                                                                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(dept)}>
                                                                        Edit
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </li>
                                                    </ListGroup.Item>
                                                ))}
                                        </ul>
                                    </ListGroup>
                                </Col>

                                {/* Create Department Form */}
                                <Col md={6} className="position-relative">
                                    <Button
                                        onClick={() => setOpenCreateDepartment(!openCreateDepartment)}
                                        aria-controls="create-department-collapse"
                                        aria-expanded={openCreateDepartment}
                                        className="mb-3 position-absolute top-0 end-0"

                                    >
                                        Create
                                    </Button>
                                    {
                                        openCreateDepartment && (
                                            <Collapse in={openCreateDepartment}>
                                                <div id="create-department-collapse">
                                                    <div className="mt-3"> {/* Add margin top to create space below the button */}
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="text-header">Create Department</div>
                                                            </div>
                                                            <div className="card-body">
                                                                <Form onSubmit={handleCreateDepartment}>
                                                                    <div className="form-group">
                                                                        <label htmlFor="department">Enter New Department:</label>
                                                                        <input
                                                                            required=""
                                                                            className="form-control"
                                                                            name="department"
                                                                            id="department"
                                                                            type="text"
                                                                            value={newDepartment}
                                                                            onChange={(e) => setNewDepartment(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <Button type="submit" className="btn">
                                                                        Submit
                                                                    </Button>
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        )
                                    }
                                </Col>
                            </Row>
                        }

                        {/* Container for Roles */}
                        {
                            activeTab === 'roles' &&
                            <Row>
                                <Col md={6}>
                                    <h4>Roles</h4>
                                    <ListGroup>
                                        <ul className="responsive-table">
                                            <li className="table-header mt-3">
                                                <div className="col col-1">SNo.</div>
                                                <div className="col col-2">Roles</div>
                                                <div className="col col-3">Actions</div>
                                            </li>
                                            {roles
                                                .filter((role) =>
                                                    role.role.toLowerCase().includes(searchQuery.toLowerCase())
                                                )
                                                .map((role) => (
                                                    <ListGroup.Item key={role.roleId}>
                                                        <li className="table-row mt-1">
                                                            <div className="col col-1" data-label="SNo.">{role.roleId}</div>
                                                            <div className="col col-2" data-label="Roles">{role.role}</div>
                                                            <div className="col col-3" data-label="Actions">
                                                            {editItem && editItem.roleId === role.roleId ? (
                                                                    <Form onSubmit={(e) => handleEditSubmitRole(e, role.roleId, newRoles)}>
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            value={newRoles}
                                                                            onChange={(e) => setNewRoles(e.target.value)}
                                                                        />
                                                                        <Button type="submit" variant="success" size="sm">
                                                                            Save
                                                                        </Button>
                                                                    </Form>
                                                                ) : (
                                                                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(role)}>
                                                                        Edit
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </li>
                                                    </ListGroup.Item>
                                                ))}
                                        </ul>
                                    </ListGroup>
                                </Col>
                                {/* Create Role Form */}
                                <Col md={6} className="position-relative">
                                    <Button
                                        onClick={() => setOpenCreateRole(!openCreateRole)}
                                        aria-controls="create-role-collapse"
                                        aria-expanded={openCreateRole}
                                        className="mb-3 position-absolute top-0 end-0"

                                    >
                                        Create
                                    </Button>
                                    {
                                        openCreateRole && (
                                            <Collapse in={openCreateRole}>
                                                <div id="create-department-collapse">
                                                    <div className="mt-3"> {/* Add margin top to create space below the button */}
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="text-header">Create Role</div>
                                                            </div>
                                                            <div className="card-body">
                                                                <Form onSubmit={handleCreateRole}>
                                                                    <div className="form-group">
                                                                        <label htmlFor="role">Enter New Role:</label>
                                                                        <input
                                                                            required=""
                                                                            className="form-control"
                                                                            name="role"
                                                                            id="role"
                                                                            type="text"
                                                                            value={newRoles}
                                                                            onChange={(e) => setNewRoles(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <Button type="submit" className="btn">
                                                                        Submit
                                                                    </Button>
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        )}
                                </Col>
                            </Row>
                        }
                        {
                            activeTab === 'project' &&

                            <Row>
                                {/* Project List */}
                                <Col md={6}>
                                    <h4>Projects</h4>
                                    <ListGroup>
                                        <ul className="responsive-table">
                                            <li className="table-header mt-3">
                                                <div className="col col-1">SNo.</div>
                                                <div className="col col-2">Projects</div>
                                                <div className="col col-3">Actions</div>
                                            </li>
                                            {project
                                                .filter((project) =>
                                                    project.projectTypes.toLowerCase().includes(searchQuery.toLowerCase())
                                                )
                                                .map((project) => (
                                                    <ListGroup.Item key={project.id}>
                                                        <li className="table-row mt-1">
                                                            <div className="col col-1" data-label="SNo.">{project.id}</div>
                                                            <div className="col col-2" data-label="Project">{project.projectTypes}</div>
                                                            <div className="col col-3" data-label="Actions">
                                                            {editItem && editItem.id === project.id ? (
                                                                    <Form onSubmit={(e) => handleEditSubmitProject(e, project.id, newProject)}>
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            value={newProject}
                                                                            onChange={(e) => setNewProject(e.target.value)}
                                                                        />
                                                                        <Button type="submit" variant="success" size="sm">
                                                                            Save
                                                                        </Button>
                                                                    </Form>
                                                                ) : (
                                                                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(project)}>
                                                                        Edit
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </li>
                                                    </ListGroup.Item>
                                                ))}
                                        </ul>
                                    </ListGroup>
                                </Col>

                                {/* Create Department Form */}
                                <Col md={6} className="position-relative">
                                    <Button
                                        onClick={() => setOpenProject(!openProject)}
                                        aria-controls="create-project-collapse"
                                        aria-expanded={openProject}
                                        className="mb-3 position-absolute top-0 end-0"

                                    >
                                        Create
                                    </Button>
                                    {
                                        openProject && (
                                            <Collapse in={openProject}>
                                                <div id="create-Project-collapse">
                                                    <div className="mt-3"> {/* Add margin top to create space below the button */}
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="text-header">Create Project</div>
                                                            </div>
                                                            <div className="card-body">
                                                                <Form onSubmit={handleCreateProjectType}>
                                                                    <div className="form-group">
                                                                        <label htmlFor="project">Enter New Project:</label>
                                                                        <input
                                                                            required=""
                                                                            className="form-control"
                                                                            name="project"
                                                                            id="project"
                                                                            type="text"
                                                                            value={newProject}
                                                                            onChange={(e) => setNewProject(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <Button type="submit" className="btn">
                                                                        Submit
                                                                    </Button>
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        )}
                                </Col>
                            </Row>
                        }
                        {
                            activeTab === 'ticketType' &&

                            <Row>
                                {/*TicketType List */}
                                <Col md={6}>
                                    <h4>Ticket Type</h4>
                                    <PermissionChecker>
                                        {({ hasPermission }) => (
                                            hasPermission(3, "canViewOnly") && (

                                                <ListGroup>
                                                    <ul className="responsive-table">
                                                        <li className="table-header mt-3">
                                                            <div className="col col-1">SNo.</div>
                                                            <div className="col col-2">TicketType</div>
                                                            <div className="col col-3">Actions</div>
                                                        </li>
                                                        {ticketType
                                                            .filter((ticket) =>
                                                                ticket.ticketType.toLowerCase().includes(searchQuery.toLowerCase())
                                                            )
                                                            .map((ticket) => (
                                                                <ListGroup.Item key={ticket.id}>
                                                                    <li className="table-row mt-1">
                                                                        <div className="col col-1" data-label="SNo.">{ticket.id}</div>
                                                                        <div className="col col-2" data-label="TicketType">{ticket.ticketType}</div>
                                                                        <div className="col col-3" data-label="Actions">
                                                                        {editItem && editItem.id === ticket.id ? (
                                                                    <Form onSubmit={(e) => handleEditSubmitTicketType(e, ticket.id, newTicketType)}>
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            value={newTicketType}
                                                                            onChange={(e) => setNewTicketType(e.target.value)}
                                                                        />
                                                                        <Button type="submit" variant="success" size="sm">
                                                                            Save
                                                                        </Button>
                                                                    </Form>
                                                                ) : (
                                                                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(ticket)}>
                                                                        Edit
                                                                    </Button>
                                                                )}
                                                                        </div>
                                                                    </li>
                                                                </ListGroup.Item>
                                                            ))}
                                                    </ul>
                                                </ListGroup>
                                            )
                                        )}
                                    </PermissionChecker>

                                </Col>

                                {/* Create TicketType Form */}
                                <Col md={6} className="position-relative">
                                    <PermissionChecker>
                                        {({ hasPermission }) => (
                                            hasPermission(3, "canViewOnly") && (
                                                <>

                                                    <Button
                                                        onClick={() => setOpenTicketType(!openTicketType)}
                                                        aria-controls="create-TicketType-collapse"
                                                        aria-expanded={openTicketType}
                                                        className="mb-3 position-absolute top-0 end-0"

                                                    >
                                                        Create
                                                    </Button>
                                                    {
                                                        openTicketType && (
                                                            <Collapse in={openTicketType}>
                                                                <div id="create-TicketType-collapse">
                                                                    <div className="mt-3"> {/* Add margin top to create space below the button */}
                                                                        <div className="card">
                                                                            <div className="card-header">
                                                                                <div className="text-header">Create TicketType</div>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <Form onSubmit={handleCreateTicketType}>
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="TicketType">Enter New TicketType:</label>
                                                                                        <input
                                                                                            required=""
                                                                                            className="form-control"
                                                                                            name="TicketType"
                                                                                            id="TicketType"
                                                                                            type="text"
                                                                                            value={newTicketType}
                                                                                            onChange={(e) => setNewTicketType(e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                    <Button type="submit" className="btn">
                                                                                        Submit
                                                                                    </Button>
                                                                                </Form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Collapse>
                                                        )}
                                                </>
                                            ))}</PermissionChecker></Col>
                            </Row>
                        }
                    </Container>
                    <Tab.Content>
                        <Tab.Pane eventKey="departments">
                            <Table responsive hover bordered striped>

                            </Table>
                        </Tab.Pane>

                        <Tab.Pane eventKey="roles">
                            <Table responsive hover bordered striped>

                            </Table>
                        </Tab.Pane>

                        <Tab.Pane eventKey="ticketType">
                            <Table responsive hover bordered striped>

                            </Table>
                        </Tab.Pane>

                        <Tab.Pane eventKey="project">
                            <Table responsive hover bordered striped>
                                {/* Render project data here */}

                            </Table>
                        </Tab.Pane>
                    </Tab.Content>


                </Col>



            </Row>
        </Container >
    );
};

export default Department;