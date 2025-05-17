import './style.css'
export default function NotFound(){
    return (
        <div className="h-screen w-full bg-slate-800 text-gray-100 text-4xl text-center flex flex-col justify-center gap-3">
        <h1>Page Not Found</h1>
        <h2>Could not find requested resource</h2>
        </div>
    )
}