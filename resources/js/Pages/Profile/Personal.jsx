import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { toast, Toaster } from "react-hot-toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Personal({
    auth,
    mustVerifyEmail,
    status,
    bookmarkedDestinations,
}) {
    const [photoProfile, setPhotoProfile] = useState(
        auth.user.profile_photo ? `storage/${auth.user.profile_photo}` : ""
    );
    const [imagePreview, setImagePreview] = useState("");
    const [showSaveButton, setShowSaveButton] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        profile_photo: null,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setData("profile_photo", file);
            setShowSaveButton(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("profile.update-photo"), {
            onSuccess: () => {
                setPhotoProfile(imagePreview);
                setImagePreview("");
                setShowSaveButton(false);
                toast.success("Profile photo updated successfully!");
            },
            onError: (errors) => console.log(errors),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Personal" />
            <Toaster />
            <div className="bg-white text-black flex flex-col items-center justify-center max-w-7xl my-10 mx-auto rounded-lg p-10">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex justify-center items-center space-x-16 border-b-2 border-gray-200 w-full pb-4">
                        <div className="relative">
                            <img
                                src={
                                    imagePreview ||
                                    photoProfile ||
                                    "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                                }
                                alt="Profile"
                                className={`rounded-full w-40 h-40 object-cover ${
                                    !photoProfile && !imagePreview
                                        ? "opacity-50"
                                        : ""
                                }`}
                            />
                            {!photoProfile && !imagePreview && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">
                                        Click to upload photo
                                    </span>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="space-y-2 space-x-2">
                            <h4 className="text-2xl font-bold">
                                {auth.user.name}
                            </h4>
                            <p className="text-xl">{auth.user.email}</p>
                            {showSaveButton && (
                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                >
                                    {processing ? "Saving..." : "Save"}
                                </PrimaryButton>
                            )}
                            <PrimaryButton>
                                <Link href={route("profile.edit")}>
                                    Edit Profile
                                </Link>
                            </PrimaryButton>
                        </div>
                    </div>
                </form>

                <div className="my-4">
                    <h4 className="text-xl font-semibold text-center">
                        Saved Destinations
                    </h4>

                    {bookmarkedDestinations.length > 0 ? (
                        <div className="grid grid-cols-12 my-10 gap-4">
                            {bookmarkedDestinations.map((destination) => (
                                <div
                                    key={destination.id}
                                    className="col-span-6 md:col-span-4 lg:col-span-3 relative group cursor-pointer"
                                >
                                    <img
                                        src={`/storage/${destination.images[0]}`}
                                        alt={destination.name}
                                        className="rounded-lg transition-transform transform group-hover:scale-110 ease-in-out duration-300 "
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <h4 className="text-lg font-semibold">
                                                {destination.name}
                                            </h4>
                                            <p className="text-sm">
                                                Entry Price: Rp.
                                                {destination.entrance_fee}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-10">
                            <p className="text-lg text-gray-600">
                                You haven't bookmarked any destinations yet.
                            </p>
                            <PrimaryButton className="mt-4">
                                <Link href={route("destinations")}>
                                    Explore Destinations
                                </Link>
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
