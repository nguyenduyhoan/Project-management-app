import { useRef } from "react";
import { Ref } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;

        onAdd({
            title: enterTitle,
            enterDescription: enterDescription,
            enterDueDate: enterDueDate,
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 by-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input ref={title} label={'Title'} />
                <Input ref={description} label={'Description'} textarea />
                <Input ref={dueDate} label={'Due Date'} />
            </div>
        </div>
    )
}