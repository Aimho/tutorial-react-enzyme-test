import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile userName="AimHo" name="조준호" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders userName and name", () => {
    const wrapper = mount(<Profile userName="AimHo" name="조준호" />);
    expect(wrapper.props().userName).toBe("AimHo");
    expect(wrapper.props().name).toBe("조준호");

    const boldElement = wrapper.find("b");
    expect(boldElement.contains("AimHo")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("조준호");
  });
});
