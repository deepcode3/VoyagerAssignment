import React, { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, handlePress) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				handlePress();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, handlePress]);
}

function OutsideAlerter(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props.handlePress);

	return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;
