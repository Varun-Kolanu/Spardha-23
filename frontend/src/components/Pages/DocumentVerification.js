import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import PropTypes from "prop-types";
import "./table.css";
const baseUrl = process.env.REACT_APP_BASE_URL;

function DocumentVerification() {
	const baseUrl = process.env.REACT_APP_BASE_URL;
	const [documents, setDocuments] = useState([]);
	const [errormsg, setErrorMessage] = useState("");
	const { token } = useContext(AuthContext);
	useEffect(function () {
		axios
			.get(baseUrl + "/documents/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(function (response) {
				setDocuments(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [baseUrl, token]);
	return (
		<>
			<h1>Document Verification</h1>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>ID</th>
						<th>Document</th>
						<th>Verification Status</th>
						<th>Verification Time</th>
						<th>Comments</th>
						<th>Username</th>
						<th>Verified By</th>
						<th>Made New Changes?</th>
						<th>Sync</th>
					</tr>
				</thead>
				<tbody>
					{documents.map((document, index) => (
						<DocumentRow key={index} document={document} serialNumber={index + 1} setErrorMessage={setErrorMessage}/>
					))}
				</tbody>
			</table>
			<ErrorMessage message={errormsg} />
		</>
	);
}

DocumentRow.propTypes = {
	document: PropTypes.object.isRequired,
	serialNumber: PropTypes.number.isRequired,
	setErrorMessage: PropTypes.func.isRequired,
};

const readableDate = (unreadableDate) => {
	const date = new Date(unreadableDate);

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};

	return date.toLocaleString('en-US', options);
}

function DocumentRow({ document, serialNumber, setErrorMessage }) {
	const [modified, setModified] = useState(false);
	const [newDoc, setNewDoc] = useState({ ...document });
	const { token } = useContext(AuthContext);
	function submitHandler() {
		setModified(false)
		if (newDoc === document) return;
		axios
			.patch(baseUrl + "/documents/" + document.id + "/", newDoc, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(function () {
				setModified(false);
				setErrorMessage("")
			})
			.catch(function (error) {
				console.log(error);
				setModified(true);
				setErrorMessage("Error in syncing changes")
			});
	}

	return (
		<>
			<tr>
				<td>{serialNumber}</td>
				<td>{document.id} </td>
				<td> <a href={newDoc.document[Object.keys(newDoc.document)[0]]} target="blank">Open</a></td>
				<td>
					<select value={newDoc.status} onChange={e => {
						setModified(true);
						setNewDoc({...newDoc, status: Number(e.target.value)})
					}}>
						<option value="0">Pending</option>
						<option value="1">Rejected</option>
						<option value="2">Verified</option>
					</select>
				</td>
				<td>{newDoc.verification_time ? readableDate(newDoc.verification_time) : "--"} </td>
				<td>
					<input
						type="text"
						value={newDoc.description ?? ""}
						onChange={(e) => {
							setModified(true);
							setNewDoc({ ...newDoc, description: e.target.value });
						}}
					/>
				</td>
				<td>{newDoc.username} </td>
				<td>{newDoc.verified_by ? newDoc.verified_by : "--"} </td>
				<td>{newDoc.made_new_changes ? "Yes" : "No"} </td>
				<td>
					<button disabled={!modified} onClick={submitHandler}>
						Sync Changes
					</button>
				</td>
			</tr>
		</>
	);
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

function ErrorMessage({ message }) {
	if (message === "") return null;
	return (
		<div className="error-message">
			<p>{message}</p>
		</div>
	);
}


export default DocumentVerification;
