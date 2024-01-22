export default function SelectedProject({project}) {
debugger
    const formattedDate = new Date(project.enterDueDate).toLocaleDateString('en-US',
        {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    )

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 broder-b-2 broder-stone-300">
                <div className="flex item-center justyfi-between">
                    <h1 className="text-3xm font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="text-stone-600 hover: text-stone-950"></button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-swap">{project.enterDescription}</p>
            </header>
            TASK
        </div>
    )
}