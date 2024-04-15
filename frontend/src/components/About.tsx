
import { Link } from "react-router-dom"
import MyInput from "./Input"
import { Textarea } from "@nextui-org/react";
import MyButton from "./Button"
export default function Component() {
    return (
        <div className="bg-gray-50/90 dark:bg-gray-950/90">
            <section className="py-12 lg:py-24 xl:py-32">
                <div className="container px-4 space-y-8 text-center md:space-y-10">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I'm Jane.</h1>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I turn coffee into code. Frontend Engineer. Designer. Speaker.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-2 sm:gap-3 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            to="#"
                        >
                            <TwitterIcon className="w-4 h-4" />
                            Twitter
                        </Link>
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-2 sm:gap-3 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            to="#"
                        >
                            <GithubIcon className="w-4 h-4" />
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-12 lg:py-24 xl:py-32">
                <div className="container px-4 space-y-8 md:space-y-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I'm experienced in these technologies and tools.
                        </p>
                    </div>
                    <div className="grid gap-4 md:gap-6 lg:gap-8 xl:gap-12 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">JavaScript</h3>
                            <div className="w-[80%] h-2 rounded-lg bg-gray-200 overflow-hidden dark:bg-gray-800">
                                <div className="h-full w-3/4 rounded-lg bg-gray-900 dark:bg-gray-50" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">TypeScript</h3>
                            <div className="w-[90%] h-2 rounded-lg bg-gray-200 overflow-hidden dark:bg-gray-800">
                                <div className="h-full w-full rounded-lg bg-gray-900 dark:bg-gray-50" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">React</h3>
                            <div className="w-[95%] h-2 rounded-lg bg-gray-200 overflow-hidden dark:bg-gray-800">
                                <div className="h-full w-9/10 rounded-lg bg-gray-900 dark:bg-gray-50" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">Tailwind CSS</h3>
                            <div className="w-[70%] h-2 rounded-lg bg-gray-200 overflow-hidden dark:bg-gray-800">
                                <div className="h-full w-2/5 rounded-lg bg-gray-900 dark:bg-gray-50" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">GraphQL</h3>
                            <div className="w-[60%] h-2 rounded-lg bg-gray-200 overflow-hidden dark:bg-gray-800">
                                <div className="h-full w-3/5 rounded-lg bg-gray-900 dark:bg-gray-50" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">Vercel</h3>
                            <div className="w-[99%] h-2 rounded-lg bg-gray-200 overflow-hidden dark:bg-gray-800">
                                <div className="h-full w-1/2 rounded-lg bg-gray-900 dark:bg-gray-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 lg:py-24 xl:py-32">
                <div className="container px-4 space-y-8 md:space-y-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Here are some of my recent projects. Click to see more details.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <Link className="aspect-[1/1] overflow-hidden rounded-lg inline-block" to="#">
                                <img
                                    alt="Project 1"
                                    className="object-cover w-full transition-transform hover:scale-105 duration-150 aspect-[1/1] dark:filter dark:grayscale dark:contrast-150"
                                    height="400"
                                    src="/placeholder.svg"
                                    width="400"
                                />
                            </Link>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold tracking-tighter">Project One</h3>
                                <p className="text-gray-500 dark:text-gray-400">Description one.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link className="aspect-[1/1] overflow-hidden rounded-lg inline-block" to="#">
                                <img
                                    alt="Project 2"
                                    className="object-cover w-full transition-transform hover:scale-105 duration-150 aspect-[1/1] dark:filter dark:grayscale dark:contrast-150"
                                    height="400"
                                    src="/placeholder.svg"
                                    width="400"
                                />
                            </Link>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold tracking-tighter">Project Two</h3>
                                <p className="text-gray-500 dark:text-gray-400">Description two.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link className="aspect-[1/1] overflow-hidden rounded-lg inline-block" to="#">
                                <img
                                    alt="Project 3"
                                    className="object-cover w-full transition-transform hover:scale-105 duration-150 aspect-[1/1] dark:filter dark:grayscale dark:contrast-150"
                                    height="400"
                                    src="/placeholder.svg"
                                    width="400"
                                />
                            </Link>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold tracking-tighter">Project Three</h3>
                                <p className="text-gray-500 dark:text-gray-400">Description three.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 lg:py-24 xl:py-32">
                <div className="container px-4 space-y-8 md:space-y-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Want to work together? Send me a message.
                        </p>
                    </div>
                    <div className="max-w-lg space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <MyInput label="Name" name="name" required color="primary" onChange={() => { }} postion="outside" type="text" />
                            </div>
                            <div className="space-y-1">
                                <MyInput label="Email" name="email" required color="primary" onChange={() => { }} postion="outside" type="email" />
                            </div>
                        </div>
                        <div className="space-y-2">

                            <Textarea id="message" placeholder="Enter your message" required />

                        </div>
                        <MyButton size="sm" className="w-full" type="submit">
                            Submit
                        </MyButton>
                    </div>
                </div>
            </section>
        </div>
    )
}

function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}

