import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Button } from 'styled/buttons';

import { DropArea, Container, CredentialPanel } from './styled';

const UploadPDF = ({ name, onUpload }) => {
  const [file, setFile] = useState({});

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'application/pdf',
    onDrop: (acceptedFiles, fileRejections) => {
      const acceptedFile = acceptedFiles[0];
      if (fileRejections && fileRejections.length) {
        setFile({
          ...acceptedFile,
          rejected: true,
        });
      }
      if (!fileRejections?.length) {
        setFile(acceptedFile);
      }
    },
  });

  const handleReset = () => setFile({});

  useEffect(() => {
    onUpload(file?.path);
  }, [file]);

  return (
    <Container>
      {!file.name && (
        <DropArea {...getRootProps({ className: 'dropzone' })}>
          <input name={name} {...getInputProps()} />
          <p>Arrastre su archivo, o haga click para buscarla</p>
          {file.rejected && <p>Sólo archivos PDF</p>}
        </DropArea>
      )}
      {file.name}
      {(file.name || file.rejected) && (
        <CredentialPanel>
          <Button onClick={() => handleReset()}>Limpiar</Button>
        </CredentialPanel>
      )}
    </Container>
  );
};

UploadPDF.propTypes = {
  onUpload: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default UploadPDF;
