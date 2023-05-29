import { EntryForm } from "../EntryForm/EntryForm.jsx";
import { EntrySection } from "../EntrySection/EntrySections.jsx";

export function MainSection() {
    return (
        <main>
            <EntryForm />
            <EntrySection />
        </main>
    );
}