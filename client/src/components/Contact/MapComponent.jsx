import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Google Map - Beyond Blush"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.3890480942127!2d78.00258007535574!3d30.311449874790274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b7fcc480d9b%3A0xff467fb270c6c484!2sBalaji%20Residency!5e0!3m2!1sen!2sin!4v1752680142273!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
