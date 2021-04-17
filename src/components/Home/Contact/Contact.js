import React from 'react';

const Contact = () => {
    return (
        <section style={{backgroundColor:'#f3f0f0'}} className="contact py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h1 style={{color:'#993337'}}>Contact</h1>
                    <h5 className="text-secondary">Always connect with us</h5>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group my-2">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Service Name*"/>
                       </div>
                       <div className="form-group my-2">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center my-2">
                           <button type="button" className="btn btn-primary serviceBtn"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;