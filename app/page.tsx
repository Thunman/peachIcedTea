import Image from "next/image";
import PasteArea from "./pasteArea/pasteArea";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<PasteArea />
		</main>
	);
}
