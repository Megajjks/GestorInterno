import Dashboard from "../../component/pages/Dashboard";
import Management from "../../component/pages/Management";
import CommitmentReport from "../../component/ui/CommitmentReport";
import TracingCommitmentDetails from "../../component/ui/TracingCommitmentDetails";
import Milestones from "../../component/pages/Milestones";
import Tasks from "../../component/pages/Tasks";
import M1 from "../../assets/img/dashboard.svg";
import M2 from "../../assets/img/gestion.svg";
import M3 from "../../assets/img/gps.svg";
import M5 from "../../assets/img/paper.svg";
import {
  DASHBOARD,
  MANAGEMENT_COMMITMENTS,
  COMMITMENT_REPORT_DETAILS,
  TRACING_COMMITMENT_DETAILS,
  MILESTONES,
  TASKS,
} from "../paths";
import Task from "../../component/ui/Task";

export const dasboardCollaborator = {
  component: Dashboard,
  path: DASHBOARD,
  isPrivate: true,
  exact: true,
  name: "Dashboard",
  label: "Dashboard",
  img: M1,
  render: true,
};
export const managementCollaborator = {
  component: Management,
  path: MANAGEMENT_COMMITMENTS,
  isPrivate: true,
  exact: true,
  name: "Gestion",
  label: "Gestion",
  img: M2,
  render: true,
};
export const commitmentReportCollaborator = {
  component: CommitmentReport,
  path: COMMITMENT_REPORT_DETAILS,
  isPrivate: true,
  render: false,
  exact: true,
};
export const tracingCommitmentDetailsCollaborator = {
  component: TracingCommitmentDetails,
  path: TRACING_COMMITMENT_DETAILS,
  isPrivate: true,
  render: false,
  exact: true,
};
export const milestonesCommitmentCollaborator = {
  component: Milestones,
  path: MILESTONES,
  isPrivate: true,
  render: false,
  exact: true,
};
export const tasksCommitmentCollaborator = {
  component: Tasks,
  path: TASKS,
  isPrivate: true,
  render: false,
  exact: true,
};

export default [
  dasboardCollaborator,
  managementCollaborator,
  commitmentReportCollaborator,
  tracingCommitmentDetailsCollaborator,
  milestonesCommitmentCollaborator,
  tasksCommitmentCollaborator,
];
