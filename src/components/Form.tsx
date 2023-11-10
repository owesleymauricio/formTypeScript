import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { Validate } from "../utils/Validate";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const [error, setError] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: User = {
            name,
            email,
            agree,
        }

        const ValidateErros = Validate(data);

        console.log(data, ValidateErros)

        if (Object.keys(ValidateErros).length > 0) {
            setError(ValidateErros)
            return
        }

        setName("")
        setEmail("")
        setAgree(false)

        alert('obrigado por se inscrever')
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">
                    Nome:
                </label>
                <input type="text" placeholder="digite seu nome" value={name} onChange={(e) => setName(e.target.value)}
                    className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" />
                {error?.name && (
                    <small className="text-red-500 text-xs mt-1">{error?.name}</small>
                )}
            </div>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">
                    email:
                </label>
                <input type="email" placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" />
                {error?.email && (
                    <small className="text-red-500 text-xs mt-1">{error?.email}</small>
                )}
            </div>
            <div className="flex flex-col">
                <a href="#"
                    className="text-xs underline nb-2">leia os termos</a>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                    <label className="text-sm" htmlFor="agree">
                        Concordo com os termos
                    </label>
                </div>
                {error?.agree && (
                    <small className="text-red-500 text-xs mt-1">{error?.agree}</small>
                )}
            </div>
            <button type="submit"
                className="bg-slate-600 hover:bg-slate-500 py-2 px-4 font-medium
                rounded-lg text-white">
                cadastrar
            </button>
        </form>
    )
}

export default Form