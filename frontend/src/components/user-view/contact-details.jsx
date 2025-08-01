import React from 'react';

const ContactDetail = ({ label, value }) => (
      <div className='text-lg font-bold text-wrap'>
            {label} : <span className='text-base md:text-[16px] italic font-semibold text-muted-foreground cursor-pointer'>{value}</span>
      </div>
);

export default ContactDetail;
