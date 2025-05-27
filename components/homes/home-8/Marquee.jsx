import React from "react";

export default function Marquee() {
  return (
    <div className="pt-40 pb-40 pt-md-0 pb-md-0">
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-3 mb-30 mb-md-0 z-index-1">
        <div className="marquee-track marquee-animation-1a">
          <div>Precision</div>
          <div aria-hidden="true">Innovation</div>
          <div aria-hidden="true">Quality</div>
          <div aria-hidden="true">Efficiency</div>
          <div aria-hidden="true">Craftsmanship</div>
          <div aria-hidden="true">Detail</div>
          <div aria-hidden="true">Engineering</div>
          <div aria-hidden="true">Excellence</div>
          <div aria-hidden="true">Functionality</div>
          <div aria-hidden="true">Reliability</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-4 clearfix">
        <div className="marquee-track marquee-animation-2a float-end">
          <div>Bauhaus</div>
          <div>Minimalism</div>
          <div aria-hidden="true">Elegance</div>
          <div aria-hidden="true">Structure</div>
          <div aria-hidden="true">Aesthetics</div>
          <div aria-hidden="true">Innovation</div>
          <div aria-hidden="true">Modernity</div>
          <div aria-hidden="true">Creativity</div>
          <div aria-hidden="true">Clarity</div>
          <div aria-hidden="true">Simplicity</div>
          <div aria-hidden="true">Precision</div>
          <div aria-hidden="true">Quality</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
    </div>
  );
}
