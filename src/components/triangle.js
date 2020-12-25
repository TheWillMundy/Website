import React from "react";
import triangleStyles from "./triangle.module.css";
export default function Triangle({ children }) {
	return <div className={triangleStyles.triangle}>{children}</div>;
}
