import React, { useState } from 'react';

function Form2() {
  const [formData, setFormData] = useState({
    name: '',
    beneficiaryName: '',
    relationship: '',
    age: '',
    dob: '',
    beneficiaryDob: '',
    address: '',
    aadharFile: null,
    pan: '',
    pensionPayOrderNo: '',
    bankDetails: '',
    pensionOrderFile: null,
    recentPhotoFile: null,
    notificationFile: null,
    passCardNo: '',
    renewalDate: '',
    validityExtendedTo: '',
    awardType: '', // Now holds a string value for selected award type
    sanctionFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        awardType: checked ? name : '', // Update to ensure only one checkbox is selected
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mt-16">
        <h2 className="text-2xl font-bold mb-6">Gallantry Awardee Pension Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name of Gallantry Awardee */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name of Gallantry Awardee (in block letters)</label>
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

          {/* Name of Beneficiary */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="beneficiaryName">Name of Beneficiary</label>
            <input
              type="text"
              id="beneficiaryName"
              name="beneficiaryName"
              value={formData.beneficiaryName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Relationship of Beneficiary */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="relationship">Relationship of Beneficiary</label>
            <input
              type="text"
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Date of Birth of Gallantry Awardee */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dob">Date of Birth of Gallantry Awardee</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Date of Birth of Beneficiary */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="beneficiaryDob">Date of Birth of Beneficiary</label>
            <input
              type="date"
              id="beneficiaryDob"
              name="beneficiaryDob"
              value={formData.beneficiaryDob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
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

          {/* Upload Aadhar */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="aadharFile">Upload Aadhar of Gallantry Awardee/Beneficiary</label>
            <input
              type="file"
              id="aadharFile"
              name="aadharFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* PAN */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="pan">PAN of Gallantry Awardee/Beneficiary</label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
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
              required
            />
          </div>

          {/* Bank Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="bankDetails">Bank Details for Pension Payment (with address)</label>
            <textarea
              id="bankDetails"
              name="bankDetails"
              value={formData.bankDetails}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Upload Pension Pay Order */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="pensionOrderFile">Upload Pension Pay Order</label>
            <input
              type="file"
              id="pensionOrderFile"
              name="pensionOrderFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Upload Recent Passport Photo */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="recentPhotoFile">Upload Recent Passport Photo of Gallantry Awardee/Beneficiary</label>
            <input
              type="file"
              id="recentPhotoFile"
              name="recentPhotoFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Upload Notification of President's Secretariat */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="notificationFile">Upload Notification of President's Secretariat</label>
            <input
              type="file"
              id="notificationFile"
              name="notificationFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Gallantry Awardee Card Pass No */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="passCardNo">Gallantry Awardee Card Pass No</label>
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
              required
            />
          </div>

          {/* Validity to be Extended Upto */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="validityExtendedTo">Validity to be Extended Upto</label>
            <input
              type="date"
              id="validityExtendedTo"
              name="validityExtendedTo"
              value={formData.validityExtendedTo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Type of Award (Checkboxes now act as radio buttons) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Type of Award</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="gallantry"
                  checked={formData.awardType === 'gallantry'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Gallantry
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="service"
                  checked={formData.awardType === 'service'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Service
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="posthumous"
                  checked={formData.awardType === 'posthumous'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Posthumous
              </label>
            </div>
          </div>

          {/* Upload Sanction of Award */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="sanctionFile">Upload Sanction of Award by Concerned Ministry</label>
            <input
              type="file"
              id="sanctionFile"
              name="sanctionFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form2;
