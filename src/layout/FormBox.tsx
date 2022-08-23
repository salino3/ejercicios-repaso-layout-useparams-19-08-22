import React from 'react';

interface Props {
  children?: any;
  textoH2?: any;
  className: any;
}

const FormBox = ({ children, textoH2, className }: Props) => {
  return (
    <>
      <div className="divBox">
        <h2 className='h2Form'>{textoH2}</h2>
        <div className={className}>
          {children}
        </div>
      </div>
    </>
  );
};

export default FormBox