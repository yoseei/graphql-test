import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  /** 画像をbase64で扱う */
  EncodedImage: any;
  /** #なしの16進数カラー(3けたor6ケタ) */
  HexColor: any;
};

/** Account Object */
export type Account = Node &
  Record & {
    __typename?: "Account";
    avatarUrl?: Maybe<Scalars["String"]>;
    createdAt: Scalars["DateTime"];
    email: Scalars["String"];
    id: Scalars["ID"];
    projectInvitations?: Maybe<ProjectMembershipConnection>;
    projects: ProjectConnection;
    tasks: TaskConnection;
    updatedAt: Scalars["DateTime"];
    username: Scalars["String"];
  };

/** Account Object */
export type AccountProjectInvitationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Account Object */
export type AccountProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Account Object */
export type AccountTasksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  state?: InputMaybe<Array<TaskState>>;
};

export type AccountConnection = {
  __typename?: "AccountConnection";
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  pageInfo: PageInfo;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  cursor: Scalars["String"];
  node?: Maybe<Account>;
};

export type CreateProjectInput = {
  title: Scalars["String"];
};

export type CreateProjectPayload = {
  __typename?: "CreateProjectPayload";
  project?: Maybe<Project>;
};

export type CreateTaskInput = {
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  name: Scalars["String"];
  state?: InputMaybe<TaskState>;
};

export type CreateTaskPayload = {
  __typename?: "CreateTaskPayload";
  task?: Maybe<Task>;
};

export type DeleteAccountInput = {
  accountId: Scalars["ID"];
};

export type DeleteAccountPayload = {
  __typename?: "DeleteAccountPayload";
  account?: Maybe<Account>;
};

export type DeleteProjectInput = {
  projectId: Scalars["ID"];
};

export type DeleteProjectMembershipInput = {
  projectMembershipId: Scalars["ID"];
};

export type DeleteProjectMembershipPayload = {
  __typename?: "DeleteProjectMembershipPayload";
  projectMembership?: Maybe<ProjectMembership>;
};

export type DeleteProjectPayload = {
  __typename?: "DeleteProjectPayload";
  project?: Maybe<Project>;
};

export type InviteProjectMembersInput = {
  emails?: InputMaybe<Array<Scalars["String"]>>;
  projectId: Scalars["ID"];
};

export type InviteProjectMembersPayload = {
  __typename?: "InviteProjectMembersPayload";
  projectMemberships?: Maybe<ProjectMembershipConnection>;
};

export type InviteProjectMembersPayloadProjectMembershipsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type LogInAccountInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LogInAccountPayload = {
  __typename?: "LogInAccountPayload";
  account?: Maybe<Account>;
  token?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createProject?: Maybe<CreateProjectPayload>;
  createTask?: Maybe<CreateTaskPayload>;
  deleteAccount?: Maybe<DeleteAccountPayload>;
  deleteProjectMembership?: Maybe<DeleteProjectMembershipPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  inviteProjectMembers?: Maybe<InviteProjectMembersPayload>;
  logInAccount?: Maybe<LogInAccountPayload>;
  signUpAccount?: Maybe<SignUpAccountPayload>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectMembership?: Maybe<UpdateProjectMembershipPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};

export type MutationDeleteProjectMembershipArgs = {
  input: DeleteProjectMembershipInput;
};

export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};

export type MutationInviteProjectMembersArgs = {
  input: InviteProjectMembersInput;
};

export type MutationLogInAccountArgs = {
  input: LogInAccountInput;
};

export type MutationSignUpAccountArgs = {
  input: SignUpAccountInput;
};

export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateAccountInput;
};

export type MutationUpdateProjectMembershipArgs = {
  input: UpdateProjectMembershipInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

/** Node interface for Realy specification */
export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

/** Project Object */
export type Project = Node &
  Record & {
    __typename?: "Project";
    createdAt: Scalars["DateTime"];
    /** プロジェクト作成者 */
    creator?: Maybe<Account>;
    id: Scalars["ID"];
    memberships: ProjectMembershipConnection;
    tasks: TaskConnection;
    title: Scalars["String"];
    updatedAt: Scalars["DateTime"];
  };

/** Project Object */
export type ProjectMembershipsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  role?: InputMaybe<Array<InputMaybe<ProjectMembershipRole>>>;
  state?: InputMaybe<Array<InputMaybe<ProjectMembershipState>>>;
};

/** Project Object */
export type ProjectTasksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  state?: InputMaybe<Array<InputMaybe<TaskState>>>;
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  pageInfo: PageInfo;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  cursor: Scalars["String"];
  node?: Maybe<Project>;
};

/** Project Membership Object */
export type ProjectMembership = Node &
  Record & {
    __typename?: "ProjectMembership";
    account: Account;
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    project: Project;
    role?: Maybe<ProjectMembershipRole>;
    state: ProjectMembershipState;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectMembershipConnection = {
  __typename?: "ProjectMembershipConnection";
  edges?: Maybe<Array<Maybe<ProjectMembershipEdge>>>;
  pageInfo: PageInfo;
};

export type ProjectMembershipEdge = {
  __typename?: "ProjectMembershipEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectMembership>;
};

export enum ProjectMembershipRole {
  Admin = "ADMIN",
  General = "GENERAL",
  Owner = "OWNER",
}

export enum ProjectMembershipState {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Inviting = "INVITING",
}

export type Query = {
  __typename?: "Query";
  currentAccount?: Maybe<Account>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

/** Record provides createdAt, updatedAt */
export type Record = {
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type SignUpAccountInput = {
  avatarUrl?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  username: Scalars["String"];
};

export type SignUpAccountPayload = {
  __typename?: "SignUpAccountPayload";
  account?: Maybe<Account>;
};

/** Task Object */
export type Task = Node &
  Record & {
    __typename?: "Task";
    assignees: AccountConnection;
    closed: Scalars["Boolean"];
    createdAt: Scalars["DateTime"];
    /** 作成者 */
    creator?: Maybe<Account>;
    id: Scalars["ID"];
    name: Scalars["String"];
    state: TaskState;
    updatedAt: Scalars["DateTime"];
  };

export type TaskConnection = {
  __typename?: "TaskConnection";
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  pageInfo: PageInfo;
};

export type TaskEdge = {
  __typename?: "TaskEdge";
  cursor: Scalars["String"];
  node?: Maybe<Task>;
};

export enum TaskState {
  Doing = "DOING",
  Done = "DONE",
  ThisWeek = "THIS_WEEK",
  Today = "TODAY",
  ToDo = "TO_DO",
}

export type UpdateAccountInput = {
  accountId: Scalars["ID"];
  email?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UpdateAccountPayload = {
  __typename?: "UpdateAccountPayload";
  account?: Maybe<Account>;
};

export type UpdateProjectInput = {
  projectId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectMembershipInput = {
  projectMembershipId: Scalars["ID"];
  role?: InputMaybe<ProjectMembershipRole>;
};

export type UpdateProjectMembershipPayload = {
  __typename?: "UpdateProjectMembershipPayload";
  projectMembership?: Maybe<ProjectMembership>;
};

export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload";
  project?: Maybe<Project>;
};

export type UpdateTaskInput = {
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  closed?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<TaskState>;
  taskId: Scalars["ID"];
};

export type UpdateTaskPayload = {
  __typename?: "UpdateTaskPayload";
  task?: Maybe<Task>;
};

export type UseCurrentAccountAccountFragment = {
  __typename?: "Account";
  id: string;
  email: string;
  username: string;
};

export const UseCurrentAccountAccountFragmentDoc = gql`
  fragment UseCurrentAccountAccount on Account {
    id
    email
    username
  }
`;
