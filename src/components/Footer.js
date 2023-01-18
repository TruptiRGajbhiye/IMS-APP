import React from 'react';
export const Footer = () => {
  return (
    <div>
      <div class="footer" style={{
                                  backgroundColor:'#afc1d3', 
                                  position: 'fixed', 
                                  left: '10px', 
                                  bottom: '5px', 
                                  right: '10px',  
                                  width: '95',  
                                  color: 'black', 
                                  textAlign:'center'}}>  
      @Copyright <a href="https://www.javatpoint.com/" style={{color:'red', fontFamily:'cursive'}}> Trupti's App </a> 2022- All Right Reserved.   
      </div>  
    </div>
  );
};

export default Footer;