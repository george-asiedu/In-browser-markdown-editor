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


    const createDocument = (): void => {
        const newID = uuidv4()
        const newDateObject = new Date()
        const newDateString = newDateObject.toLocaleString('default', { day: 'numeric'}) + ' ' 
            + newDateObject.toLocaleString('default', { month: 'long' }) + ' ' 
            + newDateObject.toLocaleString('default', { year: 'numeric'})

        const newDocument: Document = {
            id: newID,
            name: 'untitled-document.md',
            createdAt: newDateString,
            content: '# Welcome to my markdown editor. Have fun!!!'
        }

        setActiveDocument(newDocument)

        setDocuments((existingDocuments) => {
            return [...existingDocuments, newDocument]
        })
    }

    const onDocumentNameChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setActiveDocument({
            ...activeDocument,
            content: event.target.value
        })
    }

    const saveDocument = (): void => {
        setDocuments((existingDocumnets) => {
            return existingDocumnets.map((document) => {
                if(document.id === activeDocument.id) {
                    document.name = activeDocument.name
                    document.content = activeDocument.content
                }
                return document
            })
        })
    }

    const deleteDocument = (): void => {
        const existingDocuments = documents.filter((document) => {
            return document.id !== activeDocument.id
        })

        setDocuments(existingDocuments)

        existingDocuments.length === 0 
            ? setActiveDocument({} as Document) 
            : setActiveDocument(existingDocuments[0])
    }

    const changeActiveDocument = ( id: string ): void => {
        setActiveDocument(
            documents.find((document) => {
                return document.id === id
            }) || ({} as Document)
        )
    }


  return (
    <DocumentContext.Provider>
        
    </DocumentContext.Provider>
  )
}

export default DocumentContextWrapper