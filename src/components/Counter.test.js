import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("<Counter />", () => {
  const wrapper = shallow(<Counter />);

  // render check
  it("matches snapshot", () => expect(wrapper).toMatchSnapshot());

  // state check
  it("has initial number", () => expect(wrapper.state().number).toBe(0));

  // method increase check
  it("increase", () => {
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });

  // method decrease check
  it("decrease", () => {
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(0);
  });

  // click simulate increase btn
  it("calls handleIncrease", () => {
    // findWhere로 원하는 조건의 버튼을 찾을 수 있음
    const plusBtn = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusBtn.simulate("click");
    expect(wrapper.state().number).toBe(1);
  });

  // click simulate decrease btn
  it("calls handleIncrease", () => {
    // findWhere를 사용하지 않고 아래와 같이 할 수도 있음
    const buttons = wrapper.find("button");
    const minusBtn = buttons.at(1); // 두번째 버튼
    minusBtn.simulate("click");
    expect(wrapper.state().number).toBe(0);
  });

  // h2 tag text check
  it("text", () => {
    const number = wrapper.find("h2");
    expect(number.text()).toBe("0");
  });
});
