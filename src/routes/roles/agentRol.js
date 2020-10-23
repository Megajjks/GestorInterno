import Dashboard from "../../component/pages/Dashboard";
import Community from "../../component/pages/Community";
import { DASHBOARD, COMMITMENT, COMMUNITY } from "../paths";
import M1 from "../../assets/img/dashboard.svg";
import M6 from "../../assets/img/agreement.svg";
import M7 from "../../assets/img/bullhorn.svg";
export const dasboardAgent = {
  component: Dashboard,
  path: DASHBOARD,
  isPrivate: true,
  exact: true,
  name: "Dashboard",
  label: "Dashboard",
  img: M1,
  render: true,
};
export const communityAgent = {
  component: Community,
  path: COMMUNITY,
  isPrivate: true,
  exact: true,
  name: "Comunidad",
  label: "Comunidad",
  img: M7,
  render: true,
};

export default [dasboardAgent, communityAgent];
