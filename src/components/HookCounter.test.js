/**
 * 함수형 컴포넌트에서는 클래스형 컴포넌트와 달리 인스턴스 메서드 및 상태를 조회 할 방법이 없음
 * 추가적으로, Hooks를 사용하는 경우 꼭 shallow 가 아닌 mount 를 사용해야 함
 *
 * 그 이유는, useEffect Hook 은 shallow 에서 작동하지 않고, 버튼 엘리먼트에 연결되어 있는 함수가
 * 이전 함수를 가르키고 있기 때문임 (예를 들어 +1 버튼의 클릭 이벤트를 두번 시뮬레이트해도 결과 값이 2가 되는게 아닌 1이 됨)
 */

import React from "react";
import { mount } from "enzyme";
import HookCounter from "./HookCounter";

describe("<HookCounter />", () => {
  const wrapper = mount(<HookCounter />);

  // render check
  it("matches snapshot", () => expect(wrapper).toMatchSnapshot());

  it("increase", () => {
    const plusBtn = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusBtn.simulate("click");
    plusBtn.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("2");
  });

  it("decrease", () => {
    const buttons = wrapper.find("button");
    const plusBtn = buttons.at(1);
    plusBtn.simulate("click");
    plusBtn.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("0");
  });
});
