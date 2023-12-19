import React, { forwardRef, useContext, ChangeEvent, Ref } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/ThemeContext";
import { DocumentContext } from "../../documents/DocumentContext";
import { Theme } from "../../themes/Themes";
import PreviewButton from "./PreviewButton";

interface MarkdownEditorProps {
  showPreview: boolean;
  handlePreview: () => void;
}

const StyledEditorContainer = styled.div<{ showPreview: boolean }>`
    display: ${({ showPreview }) => (showPreview ? "none" : "flex")};
    flex-flow: column nowrap;
    height: 100%;
    width: 50%;
    outline: none;
    border: none;

    @media screen and (max-width: 768px) {
        width: ${({ showPreview }) => (showPreview ? "0%" : "1000%")};
    }
`;

const TitleContainer = styled.div<{ theme: Theme }>`
    height: 42px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.sectionheader};
    background-color: ${({ theme }) => theme.background.sectionheader};
`;

const ShowPreviewButton = styled(PreviewButton)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const Editor = styled.textarea<{ theme: Theme }>`
    height: calc(100% - 120px);
    padding-left: 16px;
    outline: none;
    border: none;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.markdownbody};
    background-color: ${({ theme }) => theme.background.main};
`;

const MarkdownEditorWindow: React.FC<MarkdownEditorProps> = forwardRef(
  (props, inputRef: Ref<HTMLTextAreaElement>) => {
    const { theme } = useContext(ThemeContext);
    const { activeDocument, onDocumentContentChange } = useContext(
      DocumentContext
    );

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onDocumentContentChange(event);
    };

    return (
      <StyledEditorContainer showPreview={props.showPreview}>
        <TitleContainer theme={theme}>
          MARKDOWN
          <ShowPreviewButton
            showPreview={props.showPreview}
            handlePreview={props.handlePreview}
            isPreviewWindow={false}
          />
        </TitleContainer>
        <Editor
          value={activeDocument.content}
          onChange={handleChange}
          ref={inputRef}
          theme={theme}
          {...props}
        />
      </StyledEditorContainer>
    );
  }
);

MarkdownEditorWindow.displayName = "MarkdownEditor";
export default MarkdownEditorWindow;