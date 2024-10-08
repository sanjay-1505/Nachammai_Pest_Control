import React, { useState } from 'react';

const Quotation = () => { 
    const [isOpen, setIsOpen] = useState(false);  // Modal open/close control
    const [type, setType] = useState('comm');     // Quote type selection
    const [sqft, setSqft] = useState('');         // Input for square feet
    const [result, setResult] = useState('');     // Result of the quote calculation
    const [error, setError] = useState('');       // Error message for invalid input
  
    // Function to calculate the quote based on type and sqft
    const calculate = () => {
      setError(''); // Clear any previous errors
      let price = 0;
  
      if (sqft <= 0 || isNaN(sqft)) {
        setError('Please enter a valid square footage value.');
        setResult('');
        return;
      }
  
      switch (type) {
        case 'comm':
          price = 8 * sqft;
          break;
        case 'resi':
          price = 6 * sqft;
          break;
        default:
          price = 'Invalid type selected';
      }
  
      setResult(price);
    };
  


  return (
    <div>
    {/* Button to open modal */}
    <button
            className=" bg-lime-500 text-black font-bold py-2 px-4 rounded hover:bg-lime-600"
            onClick={() => setIsOpen(true)}  // Open modal on click
            >
            Get Free Quote
            </button>
    {/* Modal */}
    {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Get Your Quote</h2>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="type">
                Choose a Type:
              </label>
              <select
                id="type"
                className="w-full border border-gray-300 rounded-md p-2"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="comm">Commercial</option>
                <option value="resi">Residential</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sqft">
                Enter Square Feet:
              </label>
              <input
                type="number"
                id="sqft"
                className="w-full border border-gray-300 rounded-md p-2"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="Enter square feet"
              />
            </div>

            {/* Error message display */}
            {error && (
              <div className="text-red-500 text-center mb-4">
                {error}
              </div>
            )}

            <div className="mb-4">
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
                onClick={calculate}
              >
                Get Quote
              </button>
            </div>

            {/* Display result */}
            {result && (
              <div className="text-center text-lg font-semibold">
                Estimated Price: RS:{result}
              </div>
            )}

            <button
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 w-full"
              onClick={() => setIsOpen(false)}  // Close modal
            >
              Close
            </button>
          </div>
        </div>
      )}
  </div>
  )
}

export default Quotation