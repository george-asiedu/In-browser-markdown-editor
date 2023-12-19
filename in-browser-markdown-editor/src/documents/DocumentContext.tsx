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
  documents: getDocumentsFromLocalStorage(),
  activeDocument: {} as Document,
  createDocument: () => {},
  deleteDocument: () => {},
  onDocumentContentChange: () => {},
  onDocumentNameChange: () => {},
  saveDocument: () => {},
  changeActiveDocument: () => {},
});

function getDocumentsFromLocalStorage(): Document[] {
  const storedDocuments = localStorage.getItem('documents');

  try {
    if (storedDocuments) {
      const parsedDocuments = JSON.parse(storedDocuments);
      if (Array.isArray(parsedDocuments)) {
        return parsedDocuments;
      }
    }
  } catch (error) {
    console.error('Error parsing documents from localStorage:', error);
  }

  return textDocuments;
}

const DocumentContextWrapper: React.FC<DocumentContextWrapperProps> = ({ children }) => {
  const [documents, setDocuments] = useState<Document[]>(getDocumentsFromLocalStorage());
  const [activeDocument, setActiveDocument] = useState<Document>(getActiveDocumentFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
    localStorage.setItem('activeDocument', JSON.stringify(activeDocument));
  }, [documents, activeDocument]);

  useEffect(() => {
    const storedDocuments = getDocumentsFromLocalStorage();
    if (storedDocuments) {
      setDocuments(storedDocuments);
    }
  }, []);

  useEffect(() => {
    const storedActiveDocument = getActiveDocumentFromLocalStorage();
    if (storedActiveDocument) {
      setActiveDocument(storedActiveDocument);
    }
  }, []);

  function getActiveDocumentFromLocalStorage(): Document {
    const storedActiveDocument = localStorage.getItem('activeDocument');

    try {
      if (storedActiveDocument) {
        const parsedActiveDocument = JSON.parse(storedActiveDocument);
        if (parsedActiveDocument && typeof parsedActiveDocument === 'object') {
          return parsedActiveDocument;
        }
      }
    } catch (error) {
      console.error('Error parsing activeDocument from localStorage:', error);
    }

    return textDocuments[0];
  }

  const createDocument = (): void => {
    const newID = uuidv4();
    const newDateObject = new Date();
    const newDateString =
      newDateObject.toLocaleString('default', { day: 'numeric' }) +
      ' ' +
      newDateObject.toLocaleString('default', { month: 'long' }) +
      ' ' +
      newDateObject.toLocaleString('default', { year: 'numeric' });

    const newDocument: Document = {
      id: newID,
      name: 'untitled-document.md',
      createdAt: newDateString,
      content: '# Welcome to my markdown editor. Have fun!!!',
    };

    setActiveDocument(newDocument);

    setDocuments((existingDocuments) => {
      return [...existingDocuments, newDocument];
    });
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
    setDocuments((existingDocuments) => {
      return existingDocuments.map((document) => {
        if (document.id === activeDocument.id) {
          document.name = activeDocument.name;
          document.content = activeDocument.content;
        }
        return document;
      });
    });
  };

  const deleteDocument = (): void => {
    const existingDocuments = documents.filter((document) => {
      return document.id !== activeDocument.id;
    });

    setDocuments(existingDocuments);

    existingDocuments.length === 0
      ? setActiveDocument({} as Document)
      : setActiveDocument(existingDocuments[0]);
  };

  const changeActiveDocument = (id: string): void => {
    setActiveDocument(
      documents.find((document) => {
        return document.id === id;
      }) || ({} as Document)
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
