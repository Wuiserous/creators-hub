import React from 'react';
import { useState, useRef } from 'react'; // Added useRef

export default function NewDesign() {
    // State for logo's dynamic position (when tracking)
    const [logoPosition, setLogoPosition] = useState({ top: 0, left: 0 });
    // State to know if cursor is inside the branding div
    const [isTracking, setIsTracking] = useState(false);

    // Ref for the branding div to get its dimensions and position
    const brandingRef = useRef(null);

    // Assuming w-60 and h-60 for the logo means 15rem * 16px/rem = 240px.
    // Adjust if your rem base or the '60' unit means something else.
    const LOGO_DIMENSION = 240; // The width and height of the logo
    const LOGO_HALF_DIMENSION = LOGO_DIMENSION / 2;

    const handleMouseMoveInBranding = (event) => {
        if (brandingRef.current) {
            const rect = brandingRef.current.getBoundingClientRect();
            // Calculate cursor position relative to the branding div
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Update logo position to center it on the cursor
            setLogoPosition({
                top: y - LOGO_HALF_DIMENSION,
                left: x - LOGO_HALF_DIMENSION,
            });
        }
    };

    const handleMouseEnterBranding = () => {
        setIsTracking(true);
    };

    const handleMouseLeaveBranding = () => {
        setIsTracking(false);
        // When mouse leaves, the conditional style for the logo will be removed,
        // and it will revert to its original CSS class-based position.
    };

    // Styles to apply to the logo when tracking
    const dynamicLogoStyle = isTracking
        ? {
              position: 'absolute', // Already set by className, but good for clarity
              top: `${logoPosition.top}px`,
              left: `${logoPosition.left}px`,
              // We need to override 'right' from the class when 'left' is active
              right: 'auto',
          }
        : {}; // Empty object means Tailwind classes for position will apply

    return (
        <div className='bg-[#0a0a0a] flex justify-center h-screen text-white w-full'>
            <div className='w-fit h-fit'>
                <div className='w-100 h-fit'> {/* Note: w-100 is not a standard Tailwind class, might be w-full or custom */}
                    <div
                        id='branding'
                        ref={brandingRef} // Assign ref
                        onMouseEnter={handleMouseEnterBranding}
                        onMouseLeave={handleMouseLeaveBranding}
                        onMouseMove={isTracking ? handleMouseMoveInBranding : undefined} // Only track if mouse is inside
                        className='relative h-60 cursor-none' // Added cursor-none for better effect if desired
                    >
                        <div className='w-full border-b-[1px] absolute top-[111px] border-[#FF6A00] left-10'></div>
                        <div className='w-5 h-3 z-10 absolute top-[99px] bg-[#0a0a0a] right-3'></div>
                        <div className='w-5 h-1 absolute top-[112px] bg-[#0a0a0a] left-45 z-10'></div> {/* Note: left-45 is not standard Tailwind */}
                        <div id='creator' className='absolute flex flex-row'>
                            <span className='text-[85px] font-bold'>CREATOR</span>
                            <span className='text-[85px] h-fit font-bold pb-[2px] pr-1 mt-[24px] rounded-xl text-[#FF6A00] border-[1px] border-t-0 border-l-0 leading-none'>'S</span>
                        </div>
                        <div className='absolute bottom-0 flex flex-row'>
                            <span className='text-[85px] font-bold text-[#FF6A00] py-0 px-2 rounded-xl border border-[#FF6A00] relative'>HUB</span>
                        </div>
                        <div
                            // Apply dynamic styles here
                            style={dynamicLogoStyle}
                            // Original classes remain, `top-10` and `right-[-60px]` will be overridden by inline style when isTracking is true
                            className="absolute top-10 right-[-60px] w-60 h-60 rounded-full overflow-hidden mix-blend-difference z-10 pointer-events-none bg-orange-500"
                        >
                            <img
                                src="logos/creator-hub-logo.png" // Make sure this path is correct
                                alt="lens"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}