import {Badge} from "components/common";
import {NavLink} from "react-router-dom";
import 'assets/scss/components/blog/blogListItem.scss';
import * as utils from 'utils/utils';

const BlogListItem = ({item, smallType}) => {
  if (smallType) {
    return (
      <NavLink className="blog-list-item small" to="detail">
        <div className="bli-info">
          <ul className="tag-list">
            {
              item.tags.map((tag, index) => (
                <li className="tag-item" key={index}>
                  <Badge view size="x-small">{tag}</Badge>
                </li>
              ))
            }
          </ul>
          <div className="spacer"></div>
          <div className="bli-date">
            {utils.datestamp(item.date)}
          </div>
        </div>
        <h3 className="bli-title">{item.title}</h3>
      </NavLink>
    )
  } else {
    return (
      <NavLink className="blog-list-item" to="detail">
        <div className="bli-info">
          <h2 className="bli-title">{item.title}</h2>
          <p className="bli-title sub">{item.desc}</p>
          <ul className="tag-list">
            {
              item.tags.map((tag, index) => (
                <li className="tag-item" key={index}>
                  <Badge view>{tag}</Badge>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="bli-date">
          {utils.datestamp(item.date)}
        </div>
        <div className="bli-desc">{item.content}</div>
      </NavLink>
    )
  }
}

export default BlogListItem;