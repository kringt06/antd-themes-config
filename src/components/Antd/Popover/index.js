import React from "react";
import { Popover, Button, Divider } from "antd";

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

export default () => (
  <>
    <Divider orientation="left">Popover</Divider>
    <div>
      <div style={{ marginLeft: buttonWidth, whiteSpace: "nowrap" }}>
        <Popover
          placement="topLeft"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content} trigger="click">
          <Button>Top</Button>
        </Popover>
        <Popover
          placement="topRight"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: "left" }}>
        <Popover
          placement="leftTop"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>LT</Button>
        </Popover>
        <Popover
          placement="left"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>Left</Button>
        </Popover>
        <Popover
          placement="leftBottom"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Popover
          placement="rightTop"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>RT</Button>
        </Popover>
        <Popover
          placement="right"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>Right</Button>
        </Popover>
        <Popover
          placement="rightBottom"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>RB</Button>
        </Popover>
      </div>
      <div
        style={{ marginLeft: buttonWidth, clear: "both", whiteSpace: "nowrap" }}
      >
        <Popover
          placement="bottomLeft"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>BL</Button>
        </Popover>
        <Popover
          placement="bottom"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>Bottom</Button>
        </Popover>
        <Popover
          placement="bottomRight"
          title={text}
          content={content}
          trigger="click"
        >
          <Button>BR</Button>
        </Popover>
      </div>
    </div>
  </>
);
