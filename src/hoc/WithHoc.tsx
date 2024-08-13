import React, { ComponentType } from 'react';

export function withHoc(WrappedComponent: ComponentType) {
	function hocComponent({ ...props }) {
		return <WrappedComponent {...props} />;
	}

	hocComponent.propTypes = {};

	return hocComponent;
}
