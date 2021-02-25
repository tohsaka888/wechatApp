import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtTabBar } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";
import HomePage from "../../components/HomePage";

function Index() {
  const [current, setCurrent] = useState(0);
  const changeValue = value => {
    setCurrent(value);
  };
  return (
    <View className="index">
      {current === 0 && (
        <HomePage />
      )}
      {current === 1 && (
        <View>
          <Text>发现</Text>
        </View>
      )}
      {current === 2 && (
        <View>
          <Text>我</Text>
        </View>
      )}
      <AtTabBar
        fixed
        tabList={[
          { title: "首页", iconType: "home" },
          { title: "发现", iconType: "search" },
          { title: "我", iconType: "user", text: "100", max: 99 }
        ]}
        onClick={value => {
          changeValue(value);
        }}
        current={current}
      />
    </View>
  );
}

export default Index;
