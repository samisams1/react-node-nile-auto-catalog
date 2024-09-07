import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface File {
  name: string;
  price: number;
  path: string; // Path for download
  status: string; // Status of the file
}

const UserPurchase: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/file/files');
        setFiles(response.data); // Assuming the API returns an array of files
      } catch (err) {
        setError('Failed to fetch files');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

 /* const handleDownload = (file: File) => {
    // Triggering the download of the file
    const link = document.createElement('a');
    link.href = file.path;
    link.download = file.name; // Set the download attribute to the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };*/
  const handleDownload = (file: File) => {
    const link = document.createElement('a');
    link.href = `http://localhost:4000/file/download/${file.name}`; // Correct download URL
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  if (loading) {
    return <div>Loading files...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Available ZIP Files</h1>
      {files.map((file) => (
        <div key={file.name}>
          <h2>{file.name}</h2>
          <p>Price: ${file.price}</p>
          <p>Status: {file.status}</p>
          <button 
            onClick={() => handleDownload(file)} 
            disabled={file.status === 'Unavailable'} // Disable button if unavailable
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserPurchase;