import './caption.scss';

import React from "react";
import { EditorBlock } from 'draft-js';

export default (props) => (
  <cite data-block={true} className="block block-caption">
    <EditorBlock {...props} />
  </cite>
);
