---
layout: ../../layouts/MethodDoc.astro
title: Prompt Craft
description: The prompting techniques that move the output, and copy-paste templates for handoffs and saving state.
---

# Prompt Craft

Good prompting is not one trick. It is a small stack of reliable techniques, applied in roughly the order below. Anthropic's own guidance lands on the same moves: give the model a role, be clear, add context, show examples, structure the prompt, name the output format, and let it think.

For relay work you stack those moves into one reusable thing: a **handoff prompt** that another person or agent can pick up. The templates at the bottom are that stack, ready to copy.

## The Techniques That Move The Output

### 1. Give it a role

Set a role in the system prompt. It focuses tone and behavior, and even one sentence changes the result.

```text
You are a careful operations assistant. You do work that another
person or agent will pick up, so you leave a clear trail and never guess.
```

This is the move most people skip, and it is the one that makes everything after it land.

### 2. Be clear and direct

Treat the model like a brilliant new hire with no context on your norms. State the objective, the format, and the constraints in plain steps. The golden rule: if a colleague with no context would be confused by your prompt, so will the model.

### 3. Give it context

Explain *why*. A reason lets the model generalize instead of guessing.

```text
This email goes to a client we just closed, so the tone must be warm
but not over-promise — they will hold us to anything we say.
```

### 4. Show examples

Examples are the most reliable way to steer format, tone, and structure. Use three to five, make them relevant and diverse, and wrap them so they read as examples, not instructions.

```text
<examples>
  <example>Input: ... → Output: ...</example>
  <example>Input: ... → Output: ...</example>
</examples>
```

### 5. Structure with XML tags

When a prompt mixes instructions, context, sources, and inputs, tag each part. It stops the model from confusing your source material for your instructions.

```text
<instructions>...</instructions>
<context>...</context>
<sources>...</sources>
```

### 6. Name the output format

Do not hope for the right shape — specify it. Describe the format, or show it with a tagged skeleton the model fills in. Matching your prompt's style to the output you want helps too.

### 7. Let it think

For anything with reasoning, tell the model to work step by step before the final answer. It thinks, then commits — instead of committing, then justifying.

```text
Think step by step before you act. Then do the work.
```

## Stacking The Moves Into A Handoff

A relay handoff is just these techniques stacked around the [seven-part task record](../relay-loop-audit/):

- a **role** that says "you leave a trail,"
- a **clear** outcome,
- the **context** and **sources** the next actor needs,
- the **rules** and stop point,
- and a named **output format** — the receipt — so state is saved on the way out.

Tag the parts so nothing is mistaken for an instruction, and you have a prompt that can leave the chat.

## Templates

Copy these. Replace the angle-bracket placeholders.

### The handoff prompt

Give this to an agent to **do** a task and hand it off cleanly.

```text
You are a careful operations assistant. You do work another actor will
pick up, so you leave a clear trail and never guess.

<task>
Outcome: <the finished result, in one sentence>
</task>

<context>
<what has been decided so far, and why it matters>
</context>

<sources>
<paste or link every input the work needs — not "see the chat">
</sources>

<rules>
- You may: <allowed actions>
- You must not: <forbidden actions>
- Stop and hand back when: <the stop rule / human gate>
</rules>

Think step by step before you act. Then do the work.

When you stop, output a receipt in exactly this format:
<receipt>
Status: working | needs-input | review | done
What I did:
Sources I used:
What I did NOT do:
What I need next:
Next actor:
</receipt>
```

### The save-state prompt

Run this to turn a finished or paused chat into **saved state** the next actor can resume from. It adds no new work.

```text
You are closing out a unit of work so the next actor can resume without
reading this chat. Summarize the current state as a receipt only — do not
start anything new.

<receipt>
Status: working | needs-input | review | done | parked
What changed:
Sources used:
Decisions made:
Open questions / blockers:
Next actor:
</receipt>
```

### The resume prompt

Run this to **pick up** work from a saved receipt.

```text
You are continuing work another actor started. The receipt below is your
only context — do not ask for the original chat.

<receipt>
<paste the prior receipt>
</receipt>

<task>
Outcome: <the same or refined outcome>
</task>

Continue from where the receipt leaves off. Think step by step, do the
work, then leave an updated receipt in the same format.
```

## How Much To Use

Use only the moves the task needs. A throwaway answer needs clarity and nothing else. A job that has to leave the chat for another actor needs the whole stack — role, sources, rules, and a receipt format — because every move you skip is a question the next actor has to come back and ask you.

---

Source: [Anthropic — Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices).

Next: [The Relay Loop Audit](../relay-loop-audit/) · [The 30-Minute Relay](../thirty-minute-relay/)
