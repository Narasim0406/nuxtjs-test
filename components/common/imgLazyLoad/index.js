import React from "react";
import LazyLoad from 'react-lazyload'

export const ImgLazyLoad = ({src = '', className = ''}) => (
  <>
    {src != '' ? <LazyLoad><img className={className} src={src} /></LazyLoad> : null}
  </>
);
export default ImgLazyLoad