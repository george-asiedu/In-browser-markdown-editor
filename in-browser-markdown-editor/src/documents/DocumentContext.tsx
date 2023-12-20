import React, { createContext, ChangeEvent, useState, useEffect } from 'react';
import textDocuments from './data.json';
import { v4 as uuidv4 } from 'uuid';

export interface Document {
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

interface DocumentContextWrapperProps {
  children: React.ReactNode;
}

export const DocumentContext = createContext<DocumentContextProps>({
  documents: [],
  activeDocument: {} as Document,
  createDocument: () => {},
  deleteDocument: () => {},
  onDocumentContentChange: () => {},
  onDocumentNameChange: () => {},
  saveDocument: () => {},
  changeActiveDocument: () => {},
});

const DocumentContextWrapper: React.FC<DocumentContextWrapperProps> = ({ children }) => {
  
  const [documents, setDocuments] = useState<Document[]>(textDocuments);
  const [activeDocument, setActiveDocument] = useState<Document>(() => {
    const storedActiveDocument = JSON.parse(localStorage.getItem('activeDocument') || '');
    return storedActiveDocument || textDocuments[0];
  });

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
    localStorage.setItem('activeDocument', JSON.stringify(activeDocument));
  }, [documents, activeDocument]);

  const createDocument = (): void => {
    const newID = uuidv4();
    const newDateObject = new Date();
    const newDateString = newDateObject.toLocaleString('default', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const newDocument: Document = {
      id: newID,
      name: 'untitled-document.md',
      createdAt: newDateString,
      content: '# Welcome to my markdown editor. Have fun!!!',
    };

    setActiveDocument(newDocument);

    setDocuments((existingDocuments) => [...existingDocuments, newDocument]);
  };

  const onDocumentContentChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setActiveDocument({
      ...activeDocument,
      content: event.target.value,
    });
  };

  const onDocumentNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setActiveDocument({
      ...activeDocument,
      name: event.target.value,
    });
  };

  const saveDocument = (): void => {
    setDocuments((existingDocuments) =>
      existingDocuments.map((document) => {
        if (document.id === activeDocument.id) {
          document.name = activeDocument.name;
          document.content = activeDocument.content;
        }
        return document;
      })
    );
  };

  const deleteDocument = (): void => {
    const existingDocuments = documents.filter((document) => document.id !== activeDocument.id);
    setDocuments(existingDocuments);

    existingDocuments.length === 0
      ? setActiveDocument({} as Document)
      : setActiveDocument(existingDocuments[0]);
  };

  const changeActiveDocument = (id: string): void => {
    setActiveDocument(
      documents.find((document) => document.id === id) || ({} as Document)
    );
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        activeDocument,
        createDocument,
        deleteDocument,
        onDocumentContentChange,
        onDocumentNameChange,
        saveDocument,
        changeActiveDocument,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextWrapper;
