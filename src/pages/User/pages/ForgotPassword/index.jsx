import React from 'react';
import HeaderTop from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function ForgotPasswordPage(props) {
  return (
    <div>
      <div>
        <HeaderTop />
      </div>
      <div className='bg-slate-200 '>
        <div className='max-w-[1100px] mx-auto bg-slate-100 pb-8 min-h-[90vh]'></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
