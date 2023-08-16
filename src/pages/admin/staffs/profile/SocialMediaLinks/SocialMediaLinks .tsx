import LinksModalForm from "@/components/Shared/LinksModal/LinksModalForm";
import Modall from "@/components/Shared/Modal/Modal";
import ToolTip from "@/components/Shared/ToolTip/ToolTip";
import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-6 mt-3 ">
      <Modall
        modalName={
          <ToolTip
            className="text-4xl text-gray-500"
            toolTipToShow="Linkedin"
            toolTipContent={
              <AiFillLinkedin className="text-4xl text-gray-500" />
            }
          />
        }
        modalContent={<LinksModalForm />}
        title="Linkedin Link"
      />

      <Modall
        modalName={
          <ToolTip
            className="text-4xl text-gray-500"
            toolTipToShow="Twitter"
            toolTipContent={<BsTwitter className="text-4xl text-gray-500" />}
          />
        }
        modalContent={<LinksModalForm />}
        title="Twitter Link"
      />

      <Modall
        modalName={
          <ToolTip
            className="text-4xl text-gray-500"
            toolTipToShow="Facebook"
            toolTipContent={
              <AiFillFacebook className="text-4xl text-gray-500" />
            }
          />
        }
        modalContent={<LinksModalForm />}
        title="Facebook Link"
      />

      <Modall
        modalName={
          <ToolTip
            className="text-4xl text-gray-500"
            toolTipToShow="Instagram"
            toolTipContent={<BsInstagram className="text-4xl text-gray-500" />}
          />
        }
        modalContent={<LinksModalForm />}
        title="Instagram Link"
      />

      <Modall
        modalName={
          <ToolTip
            className="text-4xl text-gray-500"
            toolTipToShow="IMDB"
            toolTipContent={<FaImdb className="text-4xl text-gray-500" />}
          />
        }
        modalContent={<LinksModalForm />}
        title="IMDB Link"
      />
    </div>
  );
};

export default SocialMediaLinks;
