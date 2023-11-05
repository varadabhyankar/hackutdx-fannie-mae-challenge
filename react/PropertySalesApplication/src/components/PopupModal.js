// src/components/PopupModal.js
import React, { useState } from 'react';

const PopupModal = ({ onClose, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    downPayment: '',
    loanAmount: '',
    monthlyMortgage: '',
    monthlyIncome: '',
    creditScore: '',
    creditCardPayment: '',
    studentLoanPayment: '',
    carPayment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enter Financial Information</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Down Payment:
            <input type="number" name="downPayment" value={formData.downPayment} onChange={handleInputChange} />
          </label>
          <br />
          <label>
           Loan Amount:
            <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Monthly Mortgage
            <input type="number" name="monthlyMortgage" value={formData.monthlyMortgage} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Monthly Income
            <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Credit Score
            <input type="number" name="creditScore" value={formData.creditScore} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Credit Card Payment
            <input type="number" name="creditScore" value={formData.creditScore} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Student Loan Payment
            <input type="number" name="creditScore" value={formData.creditScore} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Car Payment
            <input type="number" name="creditScore" value={formData.creditScore} onChange={handleInputChange} />
          </label>
          <button type="submit">Check Eligibility</button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
