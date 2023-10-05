"use client";

import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Space } from "antd";
const { TextArea } = Input;

const Test2 = () => {
  const [value, setValue] = useState("");
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>Button</Space>
        </Button>
      </Dropdown>
      <TextArea placeholder="Autosize height based on content lines" autoSize />
      <div
        style={{
          margin: "24px 0",
        }}
      />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{
          minRows: 2,
          maxRows: 6,
        }}
      />
      <div
        style={{
          margin: "24px 0",
        }}
      />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
      />
    </>
  );
};

export default Test2;
