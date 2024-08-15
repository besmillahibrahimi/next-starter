"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

import { Button } from "antd";

interface Props {
  useSwitch?: boolean;
}

const ThemeToggler: React.FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    console.log(" theme changed . . ");
  }, [theme]);

  return (
    <div className="flex justify-center space-x-4">
      <Button
        type="primary"
        icon={<SunOutlined />}
        iconPosition={"start"}
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </Button>

      <Button
        type="primary"
        icon={<MoonOutlined />}
        iconPosition={"start"}
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </Button>
    </div>
  );
};

export default ThemeToggler;
