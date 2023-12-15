import React from 'react'
import textDocuments from './data.json'
import { v4 as uuidv4 } from "uuid";

interface Document {
    id: string;
    name: string;
    createdAt: string;
    content: string;
}

const DocumentContext: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default DocumentContext