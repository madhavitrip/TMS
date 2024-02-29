import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';
import './EditTicket.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './../../context/UserContext';
import ReactQuill from 'react-quill';  // Import ReactQuill
import 'react-quill/dist/quill.snow.css';  // Import Quill styles


const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],                                        // remove formatting button

  ['link', 'image', 'video'],                       // link and image, video
];

const EditTicket = () => {
  const { user } = useUser();
  const { ticketId } = useParams();
  const [formData, setFormData] = useState({
    ticketId: '',
    email: '',
    priority: '',
    title: '',
    department: '',
    ticketType: '',
    status: '',
    projectType: '',
    dueDate: '',
    description: '',
    assigneeEmail: '',
    userAssigneeEmail: '',
    userTicketType: '',
    userStatus: '',
    userPriority: '',
    userComment: '',
  });
  const [showUserComment, setShowUserComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [message, setMessage] = useState(null);
  const [oldDetails, setOldDetails] = useState(null);
  const [assignees, setAssignees] = useState([]);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [collapsed, setCollapsed] = useState(true);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  useEffect(() => {
    async function fetchTicketDetails() {
      try {
        const [ticketResponse, commentsResponse, assigneesResponse, ticketTypesResponse] = await Promise.all([
          axios.get(`https://localhost:7217/api/Tickets/${ticketId}`),
          axios.get(`https://localhost:7217/api/TicketFlow/CommentsByTicketId/${ticketId}`).catch(() => ({ data: [] })),
          axios.get('https://localhost:7217/api/Users'),
          axios.get('https://localhost:7217/api/TicketTypes'),
        ]);
        setFormData(ticketResponse.data);
        setOldDetails(ticketResponse.data);
        setComments(commentsResponse.data);
        setAssignees(assigneesResponse.data);
        setTicketTypes(ticketTypesResponse.data);
      } catch (error) {
        console.error('Error fetching Ticket, Comments, Assignees, and Ticket Types:', error);
        console.log('Error details:', error.response); // Log the entire error object
        console.log('Status code:', error.response.status);
        setMessage('Error fetching ticket, comments, assignees, and ticket types. Please try again.');
      }
    }

    fetchTicketDetails();
    setCurrentDateTime(new Date().toLocaleString());
  }, [ticketId]);

  // Function to sort comments by timestamp in descending order (newest first) 
  const sortCommentsByTimestampDesc = () => {
    const sortedComments = [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setComments(sortedComments);
  };

  // Function to sort comments by timestamp in ascending order (oldest first) 
  const sortCommentsByTimestampAsc = () => {
    const sortedComments = [...comments].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    setComments(sortedComments);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files : value,
    }));
  };

  const handleToggleUserComment = () => {  if (comments.length > 0) {
    const lastComment = comments[comments.length - 1];    setFormData({
      ...formData,      userAssigneeEmail: lastComment.newAssigneeEmail,
      userTicketType: lastComment.newTicketType,      userStatus: lastComment.newStatus,
      userPriority: lastComment.newPriority,    });
  } else {    // If there are no comments, set the initial state of the form fields with the details of the ticket
    setFormData({
      ...formData,
      userAssigneeEmail: formData.assigneeEmail,      userTicketType: formData.ticketType,
      userStatus: formData.status,      userPriority: formData.priority,
    });  }
  setShowUserComment(!showUserComment);};



  const handleUserCommentChange = (value) => {
    setNewComment(value);
  };

  const handleUserSubmit = async (event) => {
    event.preventDefault();

    // Check if the current user is the creator, assignee, or reassignee
    const isCreator = user.email === formData.email;
    const isAssignee = user.email === formData.assigneeEmail;
    const isReassignee = user.email === formData.userAssigneeEmail;

    if (!isCreator && !isAssignee && !isReassignee) {
      setMessage('You are not authorized to comment on this ticket.');
      return;
    }
    try {
      const response = await axios.post('https://localhost:7217/api/TicketFlow', {
        ticketId: formData.ticketId,
        firstName: user.firstName,
        previousAssigneeEmail: formData.assigneeEmail,
        newAssigneeEmail: formData.userAssigneeEmail,
        previousStatus: formData.status,
        newStatus: formData.userStatus,
        previousPriority: formData.priority,
        newPriority: formData.userPriority,
        previousTicketType: formData.ticketType,
        newTicketType: formData.userTicketType,
        comment: newComment,
      });

      setComments([...comments, response.data]);
      setNewComment('');
      setMessage('Comment submitted successfully!');
      // Update old details after successful comment submission
      setOldDetails(formData);
    } catch (error) {
      console.error('Error submitting comment:', error);
      setMessage('Error submitting comment. Please try again.');
    }
  };

  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };



  const handleShowAttachmentModal = () => {
    setShowAttachmentModal(true);
  };

  const handleCloseAttachmentModal = () => {
    setShowAttachmentModal(false);
  };

  return (
    <div className="container mt-3">
      <Row>
        <Col>
          <label htmlFor="email" className="col-form-label text-end">
            CreatorID:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              required
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="title" className="col-form-label text-end">
            Title:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="department" className="col-form-label text-end">
            Department:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={formData.department}
              required
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="projectType" className="col-form-label text-end">
            Project Type:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="projectType"
              name="projectType"
              value={formData.projectType}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="dueDate" className="col-form-label text-end">
            Due Date:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate ? formData.dueDate.split('T')[0] : ''}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>
        {/* Show Attachment Button */}
        {formData.attachment && (
          <Col>
            <Button className="mt-3" onClick={handleShowAttachmentModal}>
              <FontAwesomeIcon icon={faPaperclip} className="me-2" />
              Show Attachment
            </Button>
          </Col>
        )}

        {/* Attachment Modal */}
        <Modal show={showAttachmentModal} onHide={handleCloseAttachmentModal}>
          <Modal.Header closeButton>
            <Modal.Title>Attachment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Check if formData.attachment is defined before processing */}
            {formData.attachment && (
              <>
                {/* Check if the attachment is an image */}
                {formData.attachment.toLowerCase().endsWith('.png') ||
                  formData.attachment.toLowerCase().endsWith('.jpg') ||
                  formData.attachment.toLowerCase().endsWith('.jpeg') ||
                  formData.attachment.toLowerCase().endsWith('.gif') ||
                  formData.attachment.toLowerCase().endsWith('.bmp') ? (
                  // If it's an image, display it in an img tag
                  <img src={`https://localhost:7217/${formData.attachment.replace('wwwroot/', '')}`} alt="Attachment" className="img-fluid" />
                ) : (
                  // If it's not an image, provide a download button
                  <div>
                    <p>This is not an image file. You can download it below:</p>
                    <a
                      href={`https://localhost:7217/${formData.attachment.replace('wwwroot/', '')}`}
                      download={formData.attachment}
                    >
                      <Button variant="primary">Download Attachment</Button>
                    </a>
                  </div>
                )}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAttachmentModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <h5 className="mt-3 d-flex align-items-center justify-content-between">
        <div>
          Discussion Forum
          <Button className="ms-2 btn-sm" onClick={sortCommentsByTimestampDesc}>
            Sort by Newest
          </Button>
          <Button className="ms-2 btn-sm" onClick={sortCommentsByTimestampAsc}>
            Sort by Oldest
          </Button>
        </div>
        <div>
          <Button onClick={toggleCollapse}>
          {collapsed ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-angle-up"></i>}
          </Button>
        </div>

      </h5>

      {message && (
        <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message}
        </div>
      )}

      <Row>
        <Col md={collapsed ? 12 : 9}>
          {/* main data  */}
          <Row>
            <Col md={7}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <label htmlFor="description" className="col-form-label text-end">
                  Description:
                </label>
                <FontAwesomeIcon icon={faCommentDots} className="me-2" onClick={handleToggleUserComment} />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  required
                  onChange={handleInputChange}
                  rows="6"
                  disabled
                />
              </div>
            </Col>
            <Col md={5}>
              <h5 className="mb-3">Ticket Information</h5>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Assignee:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.assigneeEmail} onChange={handleInputChange} name="assigneeEmail" disabled>
                      <option value="">Select Assignee</option>
                      {assignees.map((assignee) => (
                        <option key={assignee.id} value={assignee.email}>
                          {assignee.email}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Ticket Type:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.ticketType} onChange={handleInputChange} name="ticketType" disabled>
                      <option value="">Select Ticket Type</option>
                      {ticketTypes.map((type) => (
                        <option key={type.id} value={type.ticketType}>
                          {type.ticketType}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Status:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.status} onChange={handleInputChange} name="status" disabled>
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Unassigned">Unassigned</option>
                      <option value="Completed">Completed</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Priority:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.priority} onChange={handleInputChange} name="priority" disabled>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>

          {/* my commente */}

          {showUserComment && (
            <Row>
              <Col md={7}>
                <div className="mt-3">
                  <label htmlFor="userComment" className="col-form-label text-end">
                    Your Comment:
                  </label>
                  <div className="mb-3">
                    {/* Use ReactQuill only for the user's comment */}
                    <ReactQuill
                      value={newComment}
                      onChange={handleUserCommentChange}
                      modules={{ toolbar: toolbarOptions }}
                    />
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <Row className="mt-3">
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Assignee:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userAssigneeEmail} onChange={handleInputChange} name="userAssigneeEmail">
                          <option value="">Select Assignee Email</option>
                          {assignees.map((assignee) => (
                            <option key={assignee.id} value={assignee.email}>
                              {assignee.email}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Ticket Type:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userTicketType} onChange={handleInputChange} name="userTicketType">
                          <option value="">Select Ticket Type</option>
                          {ticketTypes.map((type) => (
                            <option key={type.id} value={type.ticketType}>
                              {type.ticketType}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Status:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userStatus} onChange={handleInputChange} name="userStatus">
                          <option value="">Select Status</option>
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                          <option value="Unassigned">Unassigned</option>
                          <option value="Completed">Completed</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Priority:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userPriority} onChange={handleInputChange} name="userPriority">
                          <option value="">Select Priority</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Form>
                </Row>
                <Button className="mt-3" onClick={handleUserSubmit}>
                  Submit Your Comment
                </Button>
              </Col>
            </Row>
          )}
          {/* comments   */}
          {comments.map((comment, index) => (
            <>
              <Row key={index} className='border p-2 align-items-center'>
                <Col md={7}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <label htmlFor="description" className="col-form-label text-end">
                      <p>Comment by {comment.firstName} at {new Date(comment.timestamp).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                    </label>
                  </div>
                  <div className="mb-3">
                  <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
                    {/* Use dangerouslySetInnerHTML to render HTML tags */}
    
                  </div>
                  
    
  
                </Col>
                <Col md={5}>
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Assignee:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select name="assigneeEmail" disabled>
                          <option value="">{comment.newAssigneeEmail}</option>

                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Ticket Type:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select name="ticketType" disabled>
                          <option value="">{comment.newTicketType}</option>

                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Status:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select name="status" disabled>
                          <option value="">{comment.newStatus}</option>

                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Priority:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select name="priority" disabled>
                          <option value="">{comment.newPriority}</option>

                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </>
          ))}


        </Col>
        {!collapsed && (
          <Col md={3} className="border-start border-end border-2">
            {/* Progress Tracker */}
            <div>
              <h5 className="mb-3">Progress Tracker</h5>
              <ul className="list-group">
                {comments.map((comment, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{new Date(comment.timestamp).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</strong>
                    <br />
                    {comment.newAssigneeEmail && (
                      <span>
                        Assigned to: {comment.newAssigneeEmail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default EditTicket;

