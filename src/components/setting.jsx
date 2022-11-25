import React from "react";
import { CardGrid, CardItem } from "../common/card";
import {
  faHeart,
  faDownload,
  faLanguage,
  faHeadphones,
  faInfo,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Column from "../common/column";

const GridItems = [
  {
    favourties: {
      link: "Mark your favourties. The Favourties may be videos, audios, links or images",
      label: "Favourties",
      icon: faHeart,
    },
  },
  {
    downloads: {
      link: "Download videos and audios. Save those videos, links, images and audios.",
      label: "Downloads",
      icon: faDownload,
    },
  },
  {
    Languages: {
      link: "Our portal is open to all the Languages. Choose your own Language to which you are comfortable with.",
      label: "Languages",
      icon: faLanguage,
    },
  },
  {
    help: {
      link: "Contact us for any help or support regarding training, tickets, issues, problems or difficulties",
      label: "Help And Support",
      icon: faHeadphones,
    },
  },
  {
    about: {
      link: "User interface (UI) design or user interface engineering is the design of user interfaces.",
      label: "About",
      icon: faInfo,
    },
  },
  {
    Notification: {
      link: "Receive all the Notifications from all the vendors who are public or private",
      label: "Notification",
      icon: faBell,
    },
  },
];

const Settings = () => {
  return (
    <center>
      <CardItem item="body">
        <div className="row">
          {GridItems.map((items) =>
            Object.values(items).map((item) => {
              return (
                <Column span={6} key={item.label}>
                  <CardGrid
                    icon={item.icon}
                    title={item.label}
                    body={item.link}
                  />
                </Column>
              );
            })
          )}
        </div>
      </CardItem>
    </center>
  );
};

export default Settings;
