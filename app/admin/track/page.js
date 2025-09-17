"use client";

import React from "react";

const TrackPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Google Map Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.981260344854!2d72.877655!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6300f2aef8f%3A0xa1b6c61c5c64f3b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1694628939176!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default TrackPage;