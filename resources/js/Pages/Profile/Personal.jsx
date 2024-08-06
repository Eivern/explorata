import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link } from "@inertiajs/react";

export default function Personal({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Personal" />

            <div className="bg-white text-black  flex flex-col items-center justify-center max-w-7xl my-10 mx-auto rounded-lg p-10">
                <div className="flex justify-center items-center space-x-16 border-b-2 border-gray-200 w-full pb-4">
                    <div className="bg-black rounded-full w-40 h-40"></div>
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold">John Doe</h4>
                        <p className="text-xl">whatyournmaeboys@gmail.com</p>
                        <PrimaryButton>
                            <Link href={route("profile.edit")}>
                                Edit Profile
                            </Link>
                        </PrimaryButton>
                    </div>
                </div>
                <div className="my-4">
                    <h4 className="text-xl font-semibold text-center">
                        Saved Destinations
                    </h4>
                    <div className="grid grid-cols-12 my-10 gap-4">
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 ">
                            <img
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="rounded-lg hover:scale-110 transition-all ease-in-out 200 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
