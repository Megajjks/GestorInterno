# Task

This component defines the design and structure of a task.

## Props

|Props        | Type    | Description                                      | Required |
|-------------|---------| -------------------------------------------------|----------|
|title        | String  | Task title                                       | Yes      |
|description  | String  | Task description                                 | Yes      |
|status       | Boolean | Status of the task to verify that it is finished | Yes      |
|priority     | String  | Task priority                                    | Yes      |
|date         | date    | Deadline to complete the task                    | Yes      |
|collaborator | String  | Task creator                                     | Yes      |
|role         | String  | Role of the creator of the task                  | Yes      |

## Implementation

```jsx
<Task
    title={task.title}
    description={task.description}
    status={task.status}
    priority={task.priority}
    date={task.date}
    collaborator={task.user.firstName + " " + task.user.lastName}
    role={task.user.role}
></Task>
```