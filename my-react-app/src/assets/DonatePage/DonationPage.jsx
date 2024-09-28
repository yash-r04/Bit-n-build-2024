
import React, { useState } from 'react';

const DonationPage = () => {
  const [size, setSize] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (size && address) {
      setItems([...items, { size, address }]);
      setSize('');
      setAddress('');
      alert('Item added successfully!');
    } else {
      alert('Please fill in all fields for the item.');
    }
  };

  const handleSubmitContact = () => {
    if (email && phone) {
      alert(`Contact Info Submitted:\nEmail: ${email}\nPhone: ${phone}`);
      setEmail('');
      setPhone('');
    } else {
      alert('Please fill in all fields for the contact info.');
    }
  };

  const handleDonate = () => {
    if (items.length > 0) {
      alert('Thank you for your donation!');
      setItems([]);
    } else {
      alert('Please add at least one item to donate.');
    }
  };

  return (
    <div className="donation-page">

      <h3>Select Item to be Donated</h3>

      <div className="form-group">
        <label htmlFor="size-select">Size:</label>
        <select id="size-select" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="address-input">Address:</label>
        <input 
          id="address-input"
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder="Enter your address" 
        />
      </div>

      <button onClick={handleAddItem} type="button">Add Item</button>

      <div className="item-list">
        <h3 className='itemsadded'>Items Added</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              Size: {item.size}, Address: {item.address}
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        
        <div className="form-group">
          <label htmlFor="email-input">Email:</label>
          <input 
            id="email-input"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-input">Phone Number:</label>
          <input 
            id="phone-input"
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Enter your phone number" 
          />
        </div>

        <button onClick={handleSubmitContact} type="button">Submit Contact Info</button>
      </div>

      <button className="donate-button" onClick={handleDonate} type="button">Donate</button>
    </div>
  );
};

export default DonationPage;
