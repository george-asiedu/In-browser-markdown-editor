import React, { createContext, ChangeEvent, useState, useEffect } from 'react'
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

export const DocumentContext = createContext<DocumentContextProps>({
    documents: JSON.parse(localStorage.getItem("documents") || "") || textDocuments,
    activeDocument: {} as Document,
    createDocument: () => {},
    deleteDocument: () => {},
    onDocumentContentChange: () => {},
    onDocumentNameChange: () => {},
    saveDocument: () => {},
    changeActiveDocument: () => {}  
})


const DocumentContextWrapper: React.FC = () => {
    const [documents, setDocuments] = useState<Document[]>(
        JSON.parse(localStorage.getItem('documents') || '') || textDocuments
    )

    const [activeDocument, setActiveDocument] = useState<Document>(
        JSON.parse(
            localStorage.getItem('activeDocument') === 'undefined' ? '{}' 
            : localStorage.getItem('activeDocument') || ''
        ) || textDocuments[0]
    )

    useEffect(() => {
        const storedDocuments = JSON.parse(localStorage.getItem('documents') || '')
        if(storedDocuments) {
            setDocuments(storedDocuments)
        }
    }, [])

    useEffect(() => {
        const storedActiveDocument = JSON.parse(localStorage.getItem("activeDocument") || "");
        if (storedActiveDocument) {
          setActiveDocument(storedActiveDocument);
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('documents', JSON.stringify(documents))
        localStorage.setItem('activeDocument', JSON.stringify(activeDocument))
    }, [documents, activeDocument])



  return (
    <DocumentContext.Provider>
        
    </DocumentContext.Provider>
  )
}

export default DocumentContextWrapper