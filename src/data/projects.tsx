import project1 from "./project1.jpg";
import project2 from "./project2.jpg";
import project3 from "./project3.jpg";
import project4 from "./project4.jpg";
import video1 from "./video1.mp4";

export type Project = {
  title: string;
  src: string;
  type: "image" | "video";
};

const projects: Project[] = [
  {
    title: "3D Portfolio",
    src: project1,
    type: "image",
  },
  {
    title: "Landing Page Design",
    src: project2,
    type: "image",
  },
  {
    title: "Dashboard UI",
    src: project3,
    type: "image",
  },
  {
    title: "Product Animation",
    src: "https://substackcdn.com/image/fetch/$s_!G1lk!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    type: "image",
  },
  {
    title: "Website Interaction Demo",
    src: video1,
    type: "video",
  },
];

export default projects;
