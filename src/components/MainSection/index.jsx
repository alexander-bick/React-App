import { EntryForm } from "./EntryForm/index.jsx";
import { EntrySection } from "./EntrySection/index.jsx";

export default function MainSection() {
    return (
        <main>
            <EntryForm />
            <EntrySection />
        </main>
    );
}