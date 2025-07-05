import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/contacts",
        form
      );
      setMessage("Contact added successfully");
      // Update contacts state with the new contact
      setContacts([...contacts, response.data.contact]);
      // Reset form fields
      setForm({ name: "", email: "", phone: "" });
      fetchContacts();
    } catch (error) {
      setMessage("Error submitting form");
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/contacts");
      setContacts(response.data);
    } catch (error) {
      setMessage("Error fetching contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            className="form-control"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}

      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={fetchContacts}>Refresh Contacts</button>
    </div>
  );
}

export default App;
