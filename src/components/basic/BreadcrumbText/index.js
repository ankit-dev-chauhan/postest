import React from 'react';

const BreadcrumbText = (props) => {
  const style = {
    fontSize: props.size,
    color: props.color,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
    fontFamily: props.fontFamily,
    lineheight: props.lineheight,
  }

  return (
    <span style={style} {...props}>
      {props.children}
    </span>
  );
}

BreadcrumbText.defaultProps = {
  size: '11px',
  className: 'text-uppercase text-nowrap',
  fontWeight: 500,
  color: '#fd9149',
  lineheight: '14px',
  fontStyle: 'normal',
  fontFamily: 'mulish',
}

export default BreadcrumbText
