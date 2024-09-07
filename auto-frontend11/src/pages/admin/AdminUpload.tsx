// AdminUpload.tsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [price, setPrice] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('price', price.toString());

      await axios.post('http://localhost:4000/file/upload', formData);
      alert('File uploaded successfully');
    }
  };

  return (
    <div>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price in cents" />
      <button onClick={handleUpload}>Upload ZIP</button>
    </div>
  );
};

export default AdminUpload;