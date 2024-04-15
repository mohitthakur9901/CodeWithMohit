
import { Link } from "react-router-dom"
import MyButton from "./Button"
import MyInput from "./Input"


export default function First() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
                        <div className=" flex flex-col  justify-center text-center space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">New Features</div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">Explore the Universe</h1>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Bringing the wonders of the cosmos to your classroom. Our interactive programs inspire curiosity and
                                ignite a passion for space exploration.
                            </p>
                        </div>
                        <img
                            alt="Hero"
                            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                            height="300"
                            src="/placeholder.svg"
                            width="1270"
                        />
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center  gap-4 px-4 md:px-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Interactive and educational. Our programs are designed to inspire the next generation of astronomers and
                                space explorers.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 lg:gap-10">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Astronomy 101
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Introduce your students to the wonders of the night sky. Our interactive course covers the basics of
                                    astronomy, from identifying constellations to understanding the life cycle of stars.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Journey to Mars
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Let your students experience what it's like to be a Martian explorer. Our virtual field trip to Mars
                                    includes interactive lessons on the red planet's geology and climate.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Space Camp</div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Ignite a passion for space exploration with our immersive space camp. Students will participate in
                                    hands-on experiments, meet real astronauts, and learn about the history of spaceflight.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center gap-4 px-4 md:px-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet the Team</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our educators are passionate about sharing their knowledge of the cosmos. With backgrounds in
                                astrophysics, planetary science, and science education, they bring expertise and enthusiasm to the
                                classroom.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Dr. Sofia Rodriguez</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Dr. Rodriguez is an astrophysicist who specializes in the study of exoplanets. She is passionate about
                                    inspiring the next generation of scientists and making astronomy accessible to all.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Prof. Michael Chen</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Prof. Chen is a planetary geologist with a deep knowledge of the rocky worlds of our solar system. He
                                    loves to engage students with hands-on activities that bring the wonders of space down to Earth.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Dr. Sofia Rodriguez</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Dr. Rodriguez is an astrophysicist who specializes in the study of exoplanets. She is passionate about
                                    inspiring the next generation of scientists and making astronomy accessible to all.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Prof. Michael Chen</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Prof. Chen is a planetary geologist with a deep knowledge of the rocky worlds of our solar system. He
                                    loves to engage students with hands-on activities that bring the wonders of space down to Earth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-4 px-4 md:px-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear from our Students</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                Our programs are out of this world!
                                <Link className="underline underline-offset-2" to="#">
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    height="70"
                                    src="/placeholder.svg"
                                    width="140"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    height="70"
                                    src="/placeholder.svg"
                                    width="140"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    height="70"
                                    src="/placeholder.svg"
                                    width="140"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    height="70"
                                    src="/placeholder.svg"
                                    width="140"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact us</h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Ready to take your students on a journey through the cosmos? Contact us to learn more about our
                                programs.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="flex flex-col gap-y-4 items-center">
                                <MyInput
                                    onChange={() => { }}
                                    postion="outside"
                                    label="Email"
                                    name='email'
                                    className="max-w-lg flex-1"
                                    type="email"
                                    required

                                    color="primary"
                                />                <MyButton
                                    type="button"
                                    size="sm"
                                    children={"Sign Up"}
                                    className="w-full md:w-3/4 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4"
                                />
                            </form>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Sign up to get notified when we launch.
                                <Link className="underline underline-offset-2" to="#">
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" to="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" to="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}



