import React, { useState, ChangeEvent } from 'react';

const Vicente: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const url = 'https://hjuyhjiuhjdsadasda-healthy.hf.space/upload-image/';

    try {
      console.log(url, file);
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Upload successful:', data);
        setResult('Upload successful: ' + JSON.stringify(data));
      } else {
        console.error('Upload failed:', response.statusText);
        setResult('Upload failed: ' + response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error);
        setResult('Error: ' + error.message);
      } else {
        console.error('Unexpected error:', error);
        setResult('Unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={result} 
        readOnly 
        style={{ width: '100%', marginBottom: '10px' }} 
      />
      <input 
        type="file" 
        onChange={handleFileChange} 
      />
      <button onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
};

export default Vicente;
