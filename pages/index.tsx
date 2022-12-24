import { useState } from 'react';
import path from 'path';
import Link from 'next/link';

// Function to create a VCF file content
function createVCFContent(contact: {[key: string]: any) {
  return `BEGIN:VCARD
VERSION:4.0
N:${contact.lastName};${contact.firstName}
FN:${contact.firstName} ${contact.lastName}
TEL;TYPE=cell:${contact.phone}
EMAIL:${contact.email}
ORG:${contact.company}
ADR;TYPE=WORK:;;${contact.street};${contact.city};${contact.state};${contact.zip}
URL:${contact.website}
NOTE:${contact.note}
END:VCARD`;
}

function VCFGenerator() {
  // State to store the contact information
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    company: '',
    street: '',
    city: '',
    zip: '',
    website: '',
    note: '',
  });

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Create the VCF file content
    const vcfContent = createVCFContent(contact);

    // Create a Blob object with the VCF content
    const vcfBlob = new Blob([vcfContent], { type: 'text/x-vcard' });

    // Create a URL for the VCF file
    const vcfUrl = URL.createObjectURL(vcfBlob);

    // Create a link element with the VCF file URL and the desired filename
    const vcfLink = document.createElement('a');
    vcfLink.href = vcfUrl;
    vcfLink.download = `${contact.firstName} ${contact.lastName}.vcf`;

    // Click the link to trigger the download
    vcfLink.click();
  };

  // Function to handle form input change
  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 mt-10 p-4">
      <nav className="bg-white shadow-md fixed top-0 w-full">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gray-900">Linkwear</Link>
          <ul className="md:flex md:items-center">
            <li className="mr-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            </li>
            <li className="mr-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </li>
            <li className="mr-6">
              <Link href="mailto:tpc75@drexel" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 w-full mt-12 md:mt-1 lg:mt-1 md:w-1/2 lg:w-1/2">
        <h1 className="font-bold text-3xl text-center mt-4 mb-6 text-black">VCF Generator</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
          <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
          <input type="text" name="lastName" value={contact.lastName} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input type="text" name="phone" value={contact.phone} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="text" name="email" value={contact.email} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">URL:</label>
          <input type="text" name="website" value={contact.website} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Company:</label>
          <input type="text" name="company" value={contact.company} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Street:</label>
          <input type="text" name="street" value={contact.street} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 w-1/2">City:</label>
            <input type="text" name="city" value={contact.city} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">State:</label>
            <input type="text" name="state" value={contact.state} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">ZIP:</label>
            <input type="text" name="zip" value={contact.zip} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Note:</label>
            <input type="text" name="note" value={contact.note} onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        <div className='text-center'>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-center	font-bold py-2 px-4 mt-6 mb-4 rounded focus:outline-none focus:shadow-outline">
            Download
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default VCFGenerator;