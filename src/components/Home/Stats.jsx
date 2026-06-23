import { FileText, Users, DollarSign } from "lucide-react";

export default function Stats() {
    return (
        <section className="py-16 bg-[#f8f9fa]">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e7e8e9] text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto w-14 h-14 bg-[#eef4ff] rounded-2xl flex items-center justify-center mb-6">
                            <FileText className="w-8 h-8 text-[#004ac6]" />
                        </div>
                        <div className="text-5xl font-bold text-[#191c1d] tracking-tighter">
                            15.4k+
                        </div>
                        <p className="text-[#434655] mt-3 text-[17px] font-medium">
                            Total Tasks Posted
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e7e8e9] text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto w-14 h-14 bg-[#f0f0ff] rounded-2xl flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-[#4648d4]" />
                        </div>
                        <div className="text-5xl font-bold text-[#191c1d] tracking-tighter">
                            8.5k+
                        </div>
                        <p className="text-[#434655] mt-3 text-[17px] font-medium">
                            Active Users
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e7e8e9] text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto w-14 h-14 bg-[#ecfdf5] rounded-2xl flex items-center justify-center mb-6">
                            <DollarSign className="w-8 h-8 text-[#006242]" />
                        </div>
                        <div className="text-5xl font-bold text-[#191c1d] tracking-tighter">
                            $2.4M+
                        </div>
                        <p className="text-[#434655] mt-3 text-[17px] font-medium">
                            Total Payouts
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
