import { getProposalsByClientId } from "@/lib/api/proposals";
import ProposalsCard from "./ProposalsCard";
import { getUserSession } from "@/lib/core/session";

export default async function ManageProposals() {
    const user = await getUserSession();
    const proposalsData = await getProposalsByClientId(user.id);
    console.log(proposalsData);

    return (
        <div className="min-h-screen bg-[#f8f9fa] p-4 lg:p-6">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-[#191c1d] mb-10">
                    Manage Proposals
                </h1>

                <ProposalsCard proposalsData={proposalsData} />
            </div>
        </div>
    );
}
