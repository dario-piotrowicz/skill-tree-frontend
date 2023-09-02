import React from "react";
import Drawer from "../drawer/Drawer";
import Tag from "../tag/Tag";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import Button from "../Button/Button";
import endorsementDetails from "../../../__mocks__/endorsementDetails.json";
import EndorsementCard from "../endorsementCard/EndorsementCard";

type EndorsementDetailsSlideOverProps = {
    endorsementId: string;
    open: boolean;
    onClose: () => void;
};

const EndorsementDetailsSlideOver = ({ endorsementId, open, onClose }: EndorsementDetailsSlideOverProps) => {
    const data = endorsementDetails.find((end) => end.id === endorsementId);

    return (
        <Drawer open={open} onClose={onClose}>
            <div className="p-6 pt-24 bg-yellow-100">
                <h1 className="mb-4 text-4xl font-semibold lg:text-5xl">{data?.title}</h1>
                <h3 className="mb-10 text-2xl font-semibold">{data?.date}</h3>
                <h3 className="mb-1 text-2xl font-medium">Skills: {data?.skills}</h3>
                <h6 className="mb-4 text-xl text-gray-700">Endorsers: {data?.endorsers.join(", ")}</h6>
                <Tag>Atomic</Tag>
            </div>

            <div className="p-6 pt-10">
                <h3 className="mb-8 text-2xl font-semibold">Endorsements</h3>

                <ul>
                    {data?.endorsements.map((end) => (
                        <EndorsementCard name={end.name} description={end.description} key={end.id} />
                    ))}
                </ul>
            </div>

            <div className="fixed bottom-0 right-0 flex justify-between w-3/4 gap-4 px-6 py-4 bg-blue-100 border border-blue-300 border-solid sm:w-1/2 lg:w-1/3">
                <Button icon={<IoCheckmarkSharp />} block={true} variant="success" roundness="medium">
                    Approve
                </Button>
                <Button icon={<RxCross2 />} block={true} variant="error" roundness="medium">
                    Reject
                </Button>
            </div>
        </Drawer>
    );
};

export default EndorsementDetailsSlideOver;