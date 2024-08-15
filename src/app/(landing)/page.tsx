"use client";
import ThemeToggler from "@/components//molecules/ThemeToggler";

import { useRouter } from "next/navigation";
import {
  DingdingOutlined,
  FireFilled,
  SmileOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Button } from "antd";

const colors = [
  "primary",
  "secondary",
  "accent",
  "destructive",
  "info",
  "success",
  "warning",
  "error",
];
const colorVariants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const buttonVariants = {
  variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
  size: ["default", "lg", "sm", "icon"],
};

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="container">
      <div className="py-8">
        <h1 className="text-center text-3xl">H i i i :)</h1>
        <div className="w-full flex justify-center">
          <ThemeToggler />
        </div>
      </div>

      <div className="flex justify-center w-full h-dvh items-center gap-4">
        <Button type="primary">primary</Button>

        <Button type="default">default</Button>

        <Button type="text">text</Button>

        <Button type="dashed">dashed</Button>

        <Button type="link">link</Button>

        <Button ghost>ghost</Button>

        <Button loading>loading</Button>

        <Button disabled>disabled</Button>

        <Button icon={<DingdingOutlined />} />

        <Button type="primary" icon={<FireFilled />} iconPosition={"start"}>
          start Icon
        </Button>

        <Button type="primary" icon={<FireFilled />} iconPosition={"end"}>
          End Icon
        </Button>

        <Button
          icon={hovered ? <FrownOutlined /> : <SmileOutlined />}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? "Sad" : "Happy"} {/* Change text on hover */}
        </Button>
      </div>
    </main>
  );
}
