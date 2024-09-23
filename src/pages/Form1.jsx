import React, { useState } from 'react';

function Form1() {
  const [formData, setFormData] = useState({
    name: '',
    spouseName: '',
    dob: '',
    address: '',
    passCardNo: '',
    renewalDate: '',
    validityExtendedTo: '',
    pensionPayOrderNo: '',
    aadharFile: null,
    bankDetails: '',
    pensionOrderFile: null,
    recentPhotoFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-gray-100 to-blue-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mt-16">
        <h2 className="text-2xl font-bold mb-6">Freedom Fighters Pension Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name of Freedom Fighter */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name of Freedom Fighter (in block letters)</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Name of Spouse */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="spouseName">Name of Spouse</label>
            <input
              type="text"
              id="spouseName"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Residential Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">Residential Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Freedom Fighter Pass Card No */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="passCardNo">Freedom Fighter Pass Card No</label>
            <input
              type="text"
              id="passCardNo"
              name="passCardNo"
              value={formData.passCardNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Previous Renewal Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="renewalDate">Previous Renewal Date</label>
            <input
              type="date"
              id="renewalDate"
              name="renewalDate"
              value={formData.renewalDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Validity to be Extended To */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="validityExtendedTo">Validity to be Extended To</label>
            <input
              type="date"
              id="validityExtendedTo"
              name="validityExtendedTo"
              value={formData.validityExtendedTo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Pension Pay Order Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="pensionPayOrderNo">Pension Pay Order Number</label>
            <input
              type="text"
              id="pensionPayOrderNo"
              name="pensionPayOrderNo"
              value={formData.pensionPayOrderNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Upload Aadhar of Freedom Fighter/Spouse */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="aadharFile">Upload Aadhar of Freedom Fighter/Spouse</label>
            <input
              type="file"
              id="aadharFile"
              name="aadharFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Bank Details for Pension Payment */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="bankDetails">Bank Details for Pension Payment (with address)</label>
            <textarea
              id="bankDetails"
              name="bankDetails"
              value={formData.bankDetails}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Upload Attested Photocopy of Pension Order */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="pensionOrderFile">Upload Attested Photocopy of Pension Order</label>
            <input
              type="file"
              id="pensionOrderFile"
              name="pensionOrderFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Upload Recent Passport Photo of Spouse/Freedom Fighter */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="recentPhotoFile">Upload Recent Passport Photo of Spouse/Freedom Fighter</label>
            <input
              type="file"
              id="recentPhotoFile"
              name="recentPhotoFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form1;
