import React, {useRef} from "react";
import {Badge, Diamond, InputText} from "components/common";
import ToastEditor from "../../components/plugin/ToastEditor";


const BlogCreatePage = () => {
  const editorRef = useRef(null);
  let initContent = '';
  return (
    <div className="section content-blog-edit">
      <div className="section-header">
        <h1 className="section-header-title">Edit</h1>
        <Diamond size="small"></Diamond>
        <div className="spacer"></div>
        <button className="btn-text-link">Cancel</button>
        <button className="btn-text-link">Save</button>
      </div>
      <div className="edit-wrap">
        <div className="row">
          <div className="col col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12">
                <InputText
                  label="제목"
                  placeholder="제목을 입력하세요."
                ></InputText>
              </div>
              <div className="col-12">
                <InputText
                  label="설명"
                  placeholder="글의 요약이나 설명을 입력하세요."
                ></InputText>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-auto">
                <div className="label">카테고리 선택</div>
              </div>
              <div className="spacer"></div>
              <div className="col-auto">
                <button className="btn-text-link">+ Category Add</button>
              </div>
            </div>
            <div className="tag-list">
              <div className="tag-item">
                <Badge>React</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="editor-wrap fresh-editor">
          <ToastEditor
            editorRef={editorRef}
            content={initContent}
          ></ToastEditor>
        </div>
      </div>
    </div>
  )
}

export default BlogCreatePage;