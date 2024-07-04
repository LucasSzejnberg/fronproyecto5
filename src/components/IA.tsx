/*import React, {  useEffect } from 'react';

interface UploadProps {
  file: File | null;
  onUploadResult: (result: string) => void;
  triggerUpload: boolean;
}

const UploadComponent: React.FC<UploadProps> = ({ file, onUploadResult, triggerUpload }) => {
  useEffect(() => {
    const handleUpload = async () => {
      if (!file) {
        onUploadResult('Please select a file!');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

    
      try {
        const response = await fetch('https://hjuyhjiuhjdsadasda-healthy.hf.space/upload-image/', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          onUploadResult('Upload successful: ' + JSON.stringify(data));
        } else {
          onUploadResult('Upload failed: ' + response.statusText);
        }
      } catch (error) {
        if (error instanceof Error) {
          onUploadResult('Error: ' + error.message);
        } else {
          onUploadResult('Unexpected error occurred');
        }
      }
    };

    if (triggerUpload && file) {
      handleUpload();
    }
  }, [file, onUploadResult, triggerUpload]);

  return null; // Componente sin renderizar nada visible en la interfaz
};

export default UploadComponent;
*/