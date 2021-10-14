import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Button } from 'styled/buttons';
import { MessageError } from 'components/index';

import {
  Picture, DropArea, Container, CredentialPanel,
} from './styled';

const UploadPicture = ({ name, onUpload }) => {
  const [file, setFile] = useState(undefined);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: (acceptedFiles, fileRejections) => {
      const acceptedFile = acceptedFiles[0];
      if (fileRejections && fileRejections.length) {
        setFile({ ...acceptedFile, rejected: true });
      }
      if (!fileRejections?.length) {
        setFile({ ...acceptedFile, preview: URL.createObjectURL(acceptedFile) });
      }
    },
  });

  useEffect(() => {
    URL.revokeObjectURL(file?.preview);
    onUpload(file?.path);
  }, [file]);

  const handleReset = () => setFile(undefined);

  return (
    <Container>
      {!file?.preview && (
        <DropArea {...getRootProps({ className: 'dropzone' })}>
          <input name={name} {...getInputProps()} />
          <p>Arrastre su foto , o haga click para buscarla</p>
          {file?.rejected && <MessageError messageError="Sólo imágenes jpeg o png" />}
        </DropArea>
      )}
      {file?.preview && <Picture src={file?.preview} />}
      {(file?.preview || file?.rejected) && (
        <CredentialPanel>
          <Button onClick={() => handleReset()}>Limpiar</Button>
        </CredentialPanel>
      )}
    </Container>
  );
};

UploadPicture.propTypes = {
  onUpload: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default UploadPicture;
