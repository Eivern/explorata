import GuestLayout from "@/Layouts/GuestLayout";
export default function AboutUs() {
    return (
        <GuestLayout>
            <div className="bg-primary overflow-x-hidden">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                                Welcome to Explorata
                            </h1>
                            <p className="text-xl md:text-2xl text-center max-w-2xl mb-12">
                                Selamat datang di Explorata, gerbang Anda untuk
                                menemukan destinasi paling memikat di dunia. Di
                                Explorata, kami percaya bahwa perjalanan lebih
                                dari sekadar mengunjungi tempat baru—ini tentang
                                mengalami budaya baru, bertemu dengan berbagai
                                orang, dan menciptakan kenangan yang tak
                                terlupakan.
                            </p>

                            <img
                                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Hero Image"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Vision and Mission Section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                                Visi and Misi Kami
                            </h2>

                            <div className="max-w-4xl text-justify">
                                <p className="text-lg md:text-xl mb-6">
                                    <span className="font-bold">Visi Kami</span>{" "}
                                    Visi kami adalah menjadi teman perjalanan
                                    terdepan di dunia, menyediakan platform tak
                                    tertandingi yang menghubungkan para
                                    pelancong dengan destinasi impian mereka.
                                    Kami berusaha untuk memberdayakan individu
                                    untuk menjelajahi dunia, memperkaya hidup
                                    mereka dengan perspektif, pengalaman, dan
                                    koneksi baru.
                                </p>
                                <p className="text-lg md:text-xl">
                                    <span className="font-bold">Misi Kami</span>{" "}
                                    Misi kami adalah menginspirasi dan
                                    memfasilitasi perjalanan dengan menawarkan
                                    platform yang komprehensif dan ramah
                                    pengguna yang memenuhi kebutuhan setiap
                                    pelancong.Di Explorata, kami bersemangat
                                    tentang perjalanan dan berdedikasi untuk
                                    membantu Anda menjelajahi dunia dengan
                                    percaya diri dan kemudahan. Bergabunglah
                                    dengan kami dalam perjalanan ini dan biarkan
                                    kami menjadi teman perjalanan terpercaya
                                    Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                                Our Partners
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Partner 1 */}

                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjvxvZSN_t9RPktbBISXwKisw4vnfurRyvg&s"
                                    alt="Partner 1"
                                    className="rounded-lg shadow-lg object-fill"
                                    style={{ width: "302px", height: "244px" }}
                                />

                                {/* Partner 2 */}
                                <img
                                    src="https://play-lh.googleusercontent.com/vtF2gcADW6O7qnzipftCyGOyaB4pb12bjl4sMBcZp3KOOdf8DdHUJDVx0JeNeuT7nh3A"
                                    alt="Partner 2"
                                    className="rounded-lg shadow-lg object-fill"
                                    style={{ width: "302px", height: "244px" }}
                                />

                                {/* Partner 3 */}
                                <img
                                    src="https://play-lh.googleusercontent.com/qmSb4Q4pybqaxln5dUAMfhF1SUFLz2NFHjTrJSnQzYcrjSYhpQ7IrcOytjeLoshOiJt7"
                                    alt="Partner 3"
                                    className="rounded-lg shadow-lg object-fill"
                                    style={{ width: "302px", height: "244px" }}
                                />

                                {/* Partner 4 */}
                                <img
                                    src="https://media.licdn.com/dms/image/D560BAQGe_izwxvj_SQ/company-logo_200_200/0/1700635813325/traveloka_logo?e=2147483647&v=beta&t=j8au5QD5ao5CMKlpLY__V8ZiPPp2kWTP3m5dmqtba9k"
                                    alt="Partner 4"
                                    className="rounded-lg shadow-lg object-fill"
                                    style={{ width: "302px", height: "244px" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
