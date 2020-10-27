import React, {useState, useRef, useEffect}  from 'react'
import './Button.scss'

export default function Button({isLoading, onClick, block, variant, className, children, ...props}) {
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if (isLoading) {
          setShowLoader(true);
        }
    
        // Show loader a bits longer to avoid loading flash
        if (!isLoading && showLoader) {

            const timeout = setTimeout(() => {
                setShowLoader(false);
            }, 300);
        
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [isLoading, showLoader]);

    useEffect(() => {
        if (ref.current && ref.current.getBoundingClientRect().width) {
          setWidth(ref.current.getBoundingClientRect().width)
        }
        if (ref.current && ref.current.getBoundingClientRect().height) {
          setHeight(ref.current.getBoundingClientRect().height)
        }
    }, [children])

    return (
        <button

            ref={ref}

            className={`
                btn
                ${variant ? 'btn-' + variant : 'btn-primary'}
                ${block ? 'btn-block' : ''}
                ${className ? className : ''}
            `}

            onClick={onClick}

            style={
                showLoader
                    ? {
                      width: `${width}px`,
                      height: `${height}px`
                    }
                    : {}
            }
        >
            {showLoader ? (
                <div className={`loader ${isLoading ? 'fade-in' : 'fade-out'}`}>
                    <i className="fas fa-circle-notch fa-spin" />
                </div>
            ) : (
                <div>{children}</div>
            )}
        </button>
    )
}
