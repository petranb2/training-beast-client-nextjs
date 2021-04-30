import React, { useCallback } from "react";
import Button from "@material-ui/core/Button";
import { FileRejection, useDropzone } from "react-dropzone";

type UploadButtonProps = {
    uploadCallback(acceptedFiles: Blob[], rejectedFiles: FileRejection[]): void,
    maxFiles: number,
    maxSize: number,
    acceptTypes: string,
    title: string
};
function UploadButton(props: UploadButtonProps) {
    const { uploadCallback, maxFiles, maxSize, acceptTypes, title } = props;

    const onDrop = useCallback(uploadCallback, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: acceptTypes,
        maxFiles: maxFiles,
        maxSize: maxSize
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Button variant='outlined' color='primary'>{title}</Button>
        </div>
    );
}
export default UploadButton;
