import Dashboard from "../../component/pages/Dashboard";
import Pool from "../../component/pages/Pool";
import Tracing from "../../component/pages/Tracing";
import Management from "../../component/pages/Management";
import CommitmentReport from "../../component/ui/CommitmentReport";
import TracingCommitmentDetails from "../../component/ui/TracingCommitmentDetails";
import Milestones from "../../component/pages/Milestones";
import M1 from "../../assets/img/dashboard.svg";
import M2 from "../../assets/img/gestion.svg";
import M3 from "../../assets/img/gps.svg";
import M5 from "../../assets/img/paper.svg";
import {
  DASHBOARD,
  POOL_COMMITMENTS,
  COMMITMENT_REPORT_DETAILS,
  TRACING_COMMITMENTS,
  TRACING_COMMITMENT_DETAILS,
  MILESTONES,
  MANAGEMENT_COMMITMENTS,
} from "../paths";

export const dasboardAssistant = {
  component: Dashboard,
  path: DASHBOARD,
  isPrivate: true,
  exact: true,
  name: "Dashboard",
  label: "Dashboard",
  img: M1,
  render: true,
};
export const poolAssistant = {
  component: Pool,
  path: POOL_COMMITMENTS,
  isPrivate: true,
  exact: true,
  name: "Pool",
  label: "Pool",
  img: M5,
  render: true,
};
export const tracingAssistant = {
  component: Tracing,
  path: TRACING_COMMITMENTS,
  isPrivate: true,
  exact: true,
  name: "Seguimiento",
  label: "Seguimiento",
  img: M3,
  render: true,
};
export const managementAssistant = {
  component: Management,
  path: MANAGEMENT_COMMITMENTS,
  isPrivate: true,
  exact: true,
  name: "Gestion",
  label: "Gestion",
  img: M2,
  render: true,
};
export const commitmentReportAssistant = {
  component: CommitmentReport,
  path: COMMITMENT_REPORT_DETAILS,
  isPrivate: true,
  render: false,
  exact: true,
};

export const tracingCommitmentDetailsAssistant = {
  component: TracingCommitmentDetails,
  path: TRACING_COMMITMENT_DETAILS,
  isPrivate: true,
  render: false,
  exact: true,
};

export const milestonesCommitmentAssistant = {
  component: Milestones,
  path: MILESTONES,
  isPrivate: true,
  render: false,
  exact: true,
};

export default [
  dasboardAssistant,
  poolAssistant,
  tracingAssistant,
  managementAssistant,
  commitmentReportAssistant,
  tracingCommitmentDetailsAssistant,
  milestonesCommitmentAssistant,
];
