import ProposalsCard from "./ProposalsCard";

export default function ManageProposals() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] p-4 lg:p-6">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-[#191c1d] mb-10">
                    Manage Proposals
                </h1>

                <ProposalsCard />
            </div>
        </div>
    );
}
