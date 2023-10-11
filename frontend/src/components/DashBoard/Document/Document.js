import React, { useEffect, useState } from 'react';
import './Document.css';
import axios from 'axios';

const Document = () => {
    const [documentData, setDocumentData] = useState({ document: { field: "Value" } });
    const [documentUploaded, setDocumentUploaded] = useState(false); // State to track document upload status
    const role = localStorage.getItem('role');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(process.env.REACT_APP_BASE_URL + "documents/", {
            headers: {
                Authorization: "Token " + token
            }
        }).then(res => {
            // Check if the document data exists, and set documentUploaded accordingly
            if (res.data && res.data.length > 0) {
                setDocumentUploaded(true);
                setDocumentData(res.data.at(0))
            }
        });
    }, [documentUploaded]);


    return (
        <div className="user-dashboard3 profile_Pad">
            <div className="row_dbProfile">
                <div>
                    {
                        role === "staff" || role === "admin" ?
                            <h3 style={{marginTop: "30px"}}> Staff and Admins can't upload documents  </h3>
                            :
                            <>
                                <div className="doc_upper_content">
                                    {documentUploaded ? (
                                        // UI 2: Display document data and comment if document is uploaded
                                        <UploadedDocumentUI doc={documentData} />
                                    ) : (
                                        // UI 1: Display input field and upload button if document is not uploaded
                                        <NotUploadedDocumentUI setDocumentUploaded={setDocumentUploaded} />
                                    )}
                                </div>
                                <br />
                                <br />
                                <br />
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Document;
//UI2
const UploadedDocumentUI = ({ doc }) => {
    const [inputValue, setInputValue] = useState(doc.document[Object.keys(doc.document).at(0)]);
    const docId = doc.id;

    useEffect(() => {
        setInputValue(doc.document[Object.keys(doc.document).at(0)])
    }, [doc.document, doc.made_new_changes])
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleMadeChanges = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.patch(process.env.REACT_APP_BASE_URL + `documents/${docId}/`, {
            document: {
                link: inputValue
            },
            made_new_changes: true
        }, {
            headers: {
                Authorization: "Token " + token
            }
        });
        alert("Uploaded Changes")
    };

    let verifVerdict;
    if (doc.status === 2) {
        verifVerdict = "Verfied Successfully!"
    }
    else if (doc.status === 1) {
        verifVerdict = "Rejected. Please read the comments."
    }
    else {
        verifVerdict = "Pending..."
    }

    return (
        <>
            <div className="mb-3">
                <br />
                <label htmlFor="formFile" className="form-label"><h6>Uploaded Drive Link</h6></label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input"
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={doc.status === 2}
                />
                <br />
                <div style={{ display: "flex" }}>
                    <button type="button" className="btn btn-outline-success" id="buttonn" onClick={handleMadeChanges} disabled={doc.status === 2}>I have made Changes</button>
                </div>
            </div>
            <div className="comment">
                <br /><br />
                <h6>Comments:</h6>
                <h6>{doc.description ? doc.description : "No Comments"}</h6>
            </div>
            <div className="doc_lower_content">
                <div className="status">
                    <div className="col"><h6>Verification  Status:  {verifVerdict}</h6></div>
                </div>
            </div>
        </>
    );
};
//UI1
const NotUploadedDocumentUI = ({ setDocumentUploaded }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleFormSubmit = async (e) => {
        //post
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post(process.env.REACT_APP_BASE_URL + "documents/", {
            document: {
                link: inputValue
            }
        }, {
            headers: {
                Authorization: "Token " + token
            }
        });
        setDocumentUploaded(true);
    };

    return (
        <>
            <div className="mb-3">
                <br />
                <label htmlFor="formFile" className="form-label"><h6>Upload Drive Link For Verification</h6></label>

                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <button type="button" className="btn btn-outline-success" id="buttonn" onClick={handleFormSubmit}>Upload</button>
            <div className="doc_lower_content">
                <div className="status">
                    <div className="col"><h6>{'Please Upload Your Document Folder Link'}</h6></div>
                </div>
            </div>
        </>
    )
}
