---
layout: ../../layouts/MethodDoc.astro
title: The 30-Minute Relay
description: Zero to a running loop in thirty minutes, on one real task.
---

# The 30-Minute Relay

You do not need a project to start a relay. You need one real handoff and thirty minutes.

This is the fast path from zero to a running loop. Six blocks of five minutes. At the end you have a named workspace, one real task, one receipt, and a dashboard that shows the state.

The point is not speed for its own sake. The point is that if a relay cannot be stood up in thirty minutes, the first task was too big. Shrink it, not the method.

## The Six Blocks

### 0-5 · Create the workspace

Install the kit from GitHub if `relay` is not on your machine yet.

```bash
git clone https://github.com/The-Little-AI-Company/open-work-relay
cd open-work-relay
npm install -g .
```

Then pick one real area of work and name it.

```bash
relay init "Client Ops Relay"
```

You now have `tasks/`, `receipts/`, and `done/`. That is the whole system. `init` remembers this relay, so the rest of the commands need no `--root`.

### 5-10 · Run the smoke test

Copy the example task and let an agent run it end to end. This proves the loop works before you trust it with real work. The agent should claim it, do it, and leave a receipt — with no chat context from you.

### 10-15 · Write one real task

Take one handoff you would normally explain out loud and write it as a task. Use the seven-part record. Run the [Relay Loop Audit](../relay-loop-audit/) over it.

One task. Not your backlog. The smallest real thing that has to move from you to someone else.

### 15-20 · Hand it off

Give the task to the agent or person who acts next. Do not narrate it. Do not stay in the loop to explain. If they need you to talk them through it, the task is not done — go back to block three.

### 20-25 · Read the receipt

When the actor stops, read the receipt, not the chat. It should tell you what changed, what sources were used, why they stopped, and who acts next.

If you cannot resume from the receipt alone, the receipt is missing proof. That is the thing to fix, and it is more important than the task itself.

### 25-30 · Open the dashboard

```bash
relay dashboard
```

Confirm the three questions answer themselves:

1. What can move?
2. What needs me?
3. What proof exists?

If the dashboard answers those without you opening a single task file, the relay is live.

## The Shrink Rule

If you run out of time in any block, the task was too large.

Do not add time. Cut the task until it fits. A relay that runs on a small task today beats a perfect spec for a big task that never ships.

---

Next: [The Relay Loop Audit](../relay-loop-audit/) · [Prompt Craft](../prompt-craft/)
