import React, {useState} from "react";

// Toast Editor
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import {Editor, Viewer} from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "assets/scss/plugin/editor.scss";

const ToastEditor = ({viewer, content, editorRef}) => {
  // eslint-disable-next-line
  let [initContent, setInitContent] = useState(content);
  const colorSyntaxOptions = {
    preset: [
      "#FF005C",
      "#00FFA3",
      "#95E5FF",
      "#94FF9E",
      "#FCFF75",
      "#FF97B0",
      "#FFFEF7",
      "#FDFAED",
      "#E5E3D8",
      "#CCCABF",
      "#B2B1A7",
      "#99978F",
      "#807E77",
      "#66655F",
      "#4D4C48",
      "#333230",
    ]
  };
  if (viewer) {
    return (
      <Viewer
        ref={editorRef}
        initialValue={initContent}
        theme="dark"
        plugins={[[codeSyntaxHighlight, {highlighter: Prism}]]}
      ></Viewer>
    )
  } else {
    return (
      <Editor
        ref={editorRef}
        initialValue={initContent}
        height="100%"
        placeholder="본문을 작성해주세요."
        initialEditType="markdown"
        previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'}
        theme="dark"
        hideModeSwitch={true}
        usageStatistics={false}
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, {highlighter: Prism}], [colorSyntax, colorSyntaxOptions]]}
      ></Editor>
    )
  }
}

export default ToastEditor;