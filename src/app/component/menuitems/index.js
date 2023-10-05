import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export default MenuItems = [
  {
    key: "1",
    label: "Test1",
    icon: <UserOutlined />,
    component: <Link to="/user/test1">nav 1</Link>,
  },
  {
    key: "1",
    label: "Test2",
    icon: <VideoCameraOutlined />,
    component: <Navigate to={"/user/test2"} />,
  },
  {
    key: "1",
    label: "Test3",
    icon: <UploadOutlined />,
    component: <Navigate to={"/user/test3"} />,
  },
];
