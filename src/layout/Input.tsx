import React from 'react';


interface Props {
  lbl?: any;
  className?: any;
  type?: any;
  name?: string | undefined;
  id?: string | undefined;
  title?: string | undefined;
  onCl?: React.MouseEventHandler<HTMLInputElement> | undefined;
  onCh?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  pl?: string | undefined;
}

const Input = ({lbl, className, type, name, id, title, onCl, onCh, pl}: Props) => {
  return (
    <>
      <label> {lbl}</label> &nbsp;
      <input
        className={className}
        title={title}
        type={type}
        name={name}
        id={id}
        onClick={onCl}
        onChange={onCh}
        placeholder={pl}
      />
    </>
  );
}

export default Input