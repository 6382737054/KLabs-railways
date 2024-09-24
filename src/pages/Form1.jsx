import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

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

  const [imageData, setImageData] = useState({
    aadharFile: '',
    pensionOrderFile: '',
    recentPhotoFile: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });

    // Read image files as data URLs
    if (type === 'file') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageData((prevState) => ({
          ...prevState,
          [name]: event.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate PDF
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Freedom Fighters Pension Form', 20, 20);

    // Add form data
    doc.setFontSize(12);
    let y = 30; // Starting Y position

    // Add each form field with respective image if applicable
    const addTextAndImage = (label, value, image) => {
      doc.text(`${label}: ${value ? value : 'N/A'}`, 20, y);
      y += 10; // Increase Y position for the next line

      if (image) {
        doc.addImage(image, 'JPEG', 20, y, 40, 40); // Adjust image size as needed
        y += 50; // Increase Y position after adding image
      }
    };

    // Add each field and image in respective order
    addTextAndImage('Name of Freedom Fighter', formData.name);
    addTextAndImage('Name of Spouse', formData.spouseName);
    addTextAndImage('Date of Birth', formData.dob);
    addTextAndImage('Residential Address', formData.address);
    addTextAndImage('Freedom Fighter Pass Card No', formData.passCardNo);
    addTextAndImage('Previous Renewal Date', formData.renewalDate);
    addTextAndImage('Validity to be Extended To', formData.validityExtendedTo);
    addTextAndImage('Pension Pay Order Number', formData.pensionPayOrderNo);

    // Add Aadhar File
    addTextAndImage('Aadhar File', formData.aadharFile?.name, imageData.aadharFile);

    // Add Bank Details for Pension Payment
    addTextAndImage('Bank Details for Pension Payment', formData.bankDetails);

    // Add Pension Order File
    addTextAndImage('Pension Order File', formData.pensionOrderFile?.name, imageData.pensionOrderFile);

    // Add Recent Passport Photo
    addTextAndImage('Recent Passport Photo', formData.recentPhotoFile?.name, imageData.recentPhotoFile);

    // Save the PDF
    doc.save('freedom_fighters_pension_form.pdf');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-gray-100 to-blue-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mt-16">
        <h2 className="text-2xl font-bold mb-6">Freedom Fighters Pension Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name of Freedom Fighter */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name of Freedom Fighter (in block letters)
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="spouseName">
              Name of Spouse
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dob">
              Date of Birth
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
              Residential Address
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="passCardNo">
              Freedom Fighter Pass Card No
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="renewalDate">
              Previous Renewal Date
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="validityExtendedTo">
              Validity to be Extended To
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="pensionPayOrderNo">
              Pension Pay Order Number
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="aadharFile">
              Upload Aadhar of Freedom Fighter/Spouse
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="bankDetails">
              Bank Details for Pension Payment (with address)
            </label>
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="pensionOrderFile">
              Upload Attested Photocopy of Pension Order
            </label>
            <input
              type="file"
              id="pensionOrderFile"
              name="pensionOrderFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Upload Recent Passport Size Photograph */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="recentPhotoFile">
              Upload Recent Passport Size Photograph
            </label>
            <input
              type="file"
              id="recentPhotoFile"
              name="recentPhotoFile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form1;
