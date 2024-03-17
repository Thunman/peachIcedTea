"use client";

import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
const PasteArea = () => {
	const [paste, setPaste] = useState("");

	return (
		<div className="relative">
			<CodeEditor
				value={paste}
				language="js"
				placeholder="Paste..."
				onChange={(evn) => setPaste(evn.target.value)}
				padding={10}
				style={{ fontSize: 14 }}
				className="w-[75vw] h-[75vh] font-mono rounded-xl border-2 border-gray-500"
			/>
			<button
				className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white rounded px-2 py-1 border-2 border-gray-500 hover:bg-neutral-900 hover:text-neutral-500 transition-colors duration-200"
				onClick={() => {
					/* handle button click */
				}}
			>
				Upload
			</button>
		</div>
	);
};
export default PasteArea;
