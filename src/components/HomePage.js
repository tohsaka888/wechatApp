import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtIcon, AtTabBar, AtTabs, AtTabsPane } from "taro-ui";
import "./homepage.css";

function HomePage() {
  const [current, setCurrent] = useState(0);
  return (
    <View
      className={"header"}
      style={{
        height: 200,
        paddingTop: 15
      }}
    >
      <View
        style={{
          zIndex: 10,
          paddingLeft: 15,
          paddingRight: 15,
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <AtIcon value={"map-pin"} />
        <Text style={{ marginLeft: 10 }}>常州工学院</Text>
        <View style={{ float: "right" }}>
          <AtIcon value={"bell"} />
        </View>
      </View>
      <View
        className={"at-row at-row__justify--center"}
        style={{
          boxShadow: "0px 0px 3px 3px #cecece",
          height: 45,
          margin: "5vw",
          borderRadius: 5,
          padding: "6vw",
          display: "flex",
          background: "white",
          width: "78vw"
        }}
      >
        <View className="at-row at-row__align--center">
          <AtIcon value={"camera"} size={38} color={"#79b2fd"} />
          <Text style={{ marginLeft: "3vw", fontSize: "16px" }}>扫码使用</Text>
        </View>
        <View style={{ width: 2, height: 43, background: "#cecece" }}></View>
        <View
          className="at-row at-row__align--center"
          style={{
            alignItems: "center",
            alignContent: "center",
            marginLeft: "5vw"
          }}
        >
          <AtIcon value={"search"} size={38} color={"#79b2fd"} />
          <Text style={{ marginLeft: "3vw", fontSize: "16px" }}>附近设备</Text>
        </View>
      </View>
      <AtTabs
        style={{fontSize: "20px"}}
        height={"100vh"}
        swipeable={true}
        current={current}
        tabList={[{ title: "当前" }, { title: "历史" }]}
        onClick={value => {
          setCurrent(value);
        }}
      >
        <AtTabsPane index={0} current={current}>
          <View>
            <View
              className="at-row at-row__align--center"
              style={{
                height: 80,
                width: "84vw",
                margin: "5vw",
                boxShadow: "0px 0px 1px 1px #cecece",
                borderRadius: 5,
                background: "white",
                paddingLeft: "3vw",
                paddingRight: "3vw"
              }}
            >
              <AtIcon value={"calendar"} color={"#79b2fd"} size={30}></AtIcon>
              <Text style={{ marginLeft: "3vw" }}>菁园公寓 1A 1F</Text>
            </View>
          </View>
          <View>
            <View
              className="at-row at-row__align--center"
              style={{
                height: 80,
                width: "84vw",
                margin: "5vw",
                boxShadow: "0px 0px 1px 1px #cecece",
                borderRadius: 5,
                background: "white",
                paddingLeft: "3vw",
                paddingRight: "3vw"
              }}
            >
              <AtIcon value={"calendar"} color={"#79b2fd"} size={30}></AtIcon>
              <Text style={{ marginLeft: "3vw" }}>菁园公寓 1A 2F</Text>
            </View>
          </View>
          <View>
            <View
              className="at-row at-row__align--center"
              style={{
                height: 80,
                width: "84vw",
                margin: "5vw",
                boxShadow: "0px 0px 1px 1px #cecece",
                borderRadius: 5,
                background: "white",
                paddingLeft: "3vw",
                paddingRight: "3vw"
              }}
            >
              <AtIcon value={"calendar"} color={"#79b2fd"} size={30}></AtIcon>
              <Text style={{ marginLeft: "3vw" }}>菁园公寓 1A 3F</Text>
            </View>
          </View>
          <View>
            <View
              className="at-row at-row__align--center"
              style={{
                height: 80,
                width: "84vw",
                margin: "5vw",
                boxShadow: "0px 0px 1px 1px #cecece",
                borderRadius: 5,
                background: "white",
                paddingLeft: "3vw",
                paddingRight: "3vw"
              }}
            >
              <AtIcon value={"calendar"} color={"#79b2fd"} size={30}></AtIcon>
              <Text style={{ marginLeft: "3vw" }}>菁园公寓 1A 4F</Text>
            </View>
          </View>
          <View>
            <View
              className="at-row at-row__align--center"
              style={{
                height: 80,
                width: "84vw",
                margin: "5vw",
                boxShadow: "0px 0px 1px 1px #cecece",
                borderRadius: 5,
                background: "white",
                paddingLeft: "3vw",
                paddingRight: "3vw"
              }}
            >
              <AtIcon value={"calendar"} color={"#79b2fd"} size={30}></AtIcon>
              <Text style={{ marginLeft: "3vw" }}>菁园公寓 1A 5F</Text>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane index={1} current={current}>
        <View>
            <View
              className="at-row at-row__align--center"
              style={{
                height: 80,
                width: "84vw",
                margin: "5vw",
                boxShadow: "0px 0px 1px 1px #cecece",
                borderRadius: 5,
                background: "white",
                paddingLeft: "3vw",
                paddingRight: "3vw",
              }}
            >
              <AtIcon value={"calendar"} color={"#79b2fd"} size={30}></AtIcon>
              <Text style={{marginLeft: "3vw"}}>菁园公寓 1A 1F</Text>
            </View>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}

export default HomePage;
