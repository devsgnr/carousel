import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel } from "..";

export default {
  title: "Component/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <div style={{ width: "650px", height: "500px" }}>
    <Carousel {...args} />
  </div>
);

export const TheCarousel = Template.bind({});
TheCarousel.args = {
  height: "100%",
  timeout: 5000,
  autoPlay: true,
  borderRadius: 10,
  thumbnailOutlineThickness: 2,
  thumbnailOutlineOffset: 1,
  thumbnailOutlineColor: "#000",
  thumbnailOutlineStyle: "solid",
  showThumb: false,
  showButton: true,
  showIndicator: true,
  pictures: [
    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1611258623154-c01feea09b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80",
    "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  ],
};
