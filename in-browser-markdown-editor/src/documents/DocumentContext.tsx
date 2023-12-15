import React from 'react'
import textDocuments from './data.json'
import { v4 as uuidv4 } from "uuid";

interface Document {
    id: string;
    name: string;
    createdAt: string;
    content: string;
}

interface DocumentContextProps {
    documents: Document[];
    activeDocument: Document;
    createDocument: () => void;
    deleteDocument: () => void;
    onDocumentContentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onDocumentNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    saveDocument: () => void;
    changeActiveDocument: (id: string) => void;
}

const DocumentContext: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default DocumentContext